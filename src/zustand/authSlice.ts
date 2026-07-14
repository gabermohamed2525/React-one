import { create } from "zustand";
import type { TinputsForm } from "../Components/auth/signUpForm";
import supabase from "../supabase";
import type { TLoginForm } from "../Components/auth/LogInForm";
import { toast } from "react-toastify";
import useCart from "./cartSlice";
import useOrder from "./orderSlice";

export type Tresponse={
    success:boolean,
    message?:string
     
}
export type  TuserData ={
    id :string,
    userName :string,
    email :string,
    phone :string,
    created_at :string,
    bio?: string,
    image?: string
}
type TauthSlice={
    cuurentUser : null | TuserData,
    isPendingCurrentUser :boolean,
    isPendingRegister:boolean,
    isPendingSignout : boolean,
    isPendingLogin:boolean,
    getUserData : (id : string)=> Promise <Tresponse>
    handleRegister:(data:TinputsForm)=>Promise<Tresponse>,
    handleLogin:(data:TLoginForm)=>Promise<Tresponse>,
    restoreUserSession : () => Promise <void>,
    signOut : ()=> Promise <void>,
    updateBio: (bio: string) => Promise<Tresponse>,
    uploadProfileImage:(file:File)=>Promise<Tresponse>
}

const useAuth=create<TauthSlice>((set , get)=>({
    isPendingCurrentUser :true ,
    isPendingSignout :false ,
    cuurentUser :null,
    isPendingRegister:false,
    isPendingLogin:false,

    handleRegister:async(data)=>{
        const {email,password,firstName,lastName,phone}=data;

        set({isPendingRegister:true});

        try{
            const {data:authData,error:authErr}=await supabase.auth.signUp({email,password});

            if(authErr){
                set({isPendingRegister:false});
                return {success:false,message:authErr.message};
            }

            const userId=authData.user?.id;

            const {error:tableErr}=await supabase.from("clients").insert({
                id:userId,
                userName:`${firstName} ${lastName}`,
                email,
                phone
            });

            if(tableErr){
                set({isPendingRegister:false});
                return {success:false,message:tableErr.message};
            }

            set({isPendingRegister:false});
            return {success:true};

        }catch(error){
            set({isPendingRegister:false});
            const err=error as Error;
            return {success:false,message:err.message};
        }
    },
    handleLogin : async( data) =>{
        set({isPendingLogin :true})
        const {getUserData} = get()
        const {email , password} = data
        try {
            
            const { data :authData , error :authErr} = await supabase.auth.signInWithPassword({email ,password})
            if(authErr){
                set({isPendingLogin: false})
                console.log(authErr);
                return {success : false , message :authErr.message}
            }
            const id = authData.user.id
            const res = await getUserData(id)
            if(!res.success){
                set({isPendingLogin:false})
                return{success : false , message: res.message}
            }

            
            
            set({isPendingLogin: false})
            return{success:true}
        } catch (error) {
            set({isPendingLogin :false})
            const err = error as Error
            return {success : false , message :err.message}
        }
        
    },
    getUserData : async(id)=> {
        const { data ,error} = await supabase.from('clients').select().eq('id', id).single()
        if(error){
            set({isPendingCurrentUser :false})
            return {success :false , message : error.message}
        }
        set({isPendingCurrentUser :false , cuurentUser : data})
        useCart.getState().loadCart();
        useOrder.getState().loadOrders();
        return{success : true}
        
    },
    restoreUserSession : async() =>{
        const {getUserData} = get()
        try {
            const {data , error} = await supabase.auth.getSession()
            if(error || !data.session){
                set({isPendingCurrentUser :false})
                return
            }
            const id = data.session.user.id
            getUserData(id)
        } catch (error) {
            const err = error as Error
            toast.error(err.message)

        }
    },
    signOut : async() =>{
        set({isPendingSignout :true})
        const {error} = await supabase.auth.signOut()
        if(error){
          set({isPendingSignout :false})
        return
      }
      set({cuurentUser:null , isPendingSignout: false})
    },


uploadProfileImage: async(file)=>{
    const {cuurentUser,getUserData}=get();

    if(!cuurentUser){
        return{
            success:false,
            message:"User not found"
        };
    }

    try{
        const {data:{session}}=await supabase.auth.getSession();

        if(!session){
            return{
                success:false,
                message:"No session"
            };
        }

        const id=session.user.id;

        const fileName=`${id}-${Date.now()}`;

        const {error:uploadError}=await supabase.storage
            .from("avatars")
            .upload(fileName,file);

        if(uploadError){
            return{
                success:false,
                message:uploadError.message
            };
        }

        const {data:{publicUrl}}=supabase.storage
            .from("avatars")
            .getPublicUrl(fileName);

        console.log("Public URL:",publicUrl);

        const {data,error}=await supabase
            .from("clients")
            .update({
                image:publicUrl
            })
            .eq("id",id)
            .select();

        console.log("Updated Row:",data);
        console.log("Update Error:",error);

        if(error){
            return{
                success:false,
                message:error.message
            };
        }

        await getUserData(id);

        return{
            success:true
        };

    }catch(error){
        const err=error as Error;

        return{
            success:false,
            message:err.message
        };
    }
},



updateBio: async (bio) => {
    const { getUserData } = get();

    try {
        const {
            data: { session },
        } = await supabase.auth.getSession();

        if (!session) {
            return {
                success: false,
                message: "No session",
            };
        }

        const id = session.user.id;

        const { error } = await supabase
            .from("clients")
            .update({ bio })
            .eq("id", id);

        if (error) {
            return {
                success: false,
                message: error.message,
            };
        }

        await getUserData(id);

        return {
            success: true,
        };
    } catch (error) {
        const err = error as Error;

        return {
            success: false,
            message: err.message,
        };
    }
},

}));

export default useAuth;