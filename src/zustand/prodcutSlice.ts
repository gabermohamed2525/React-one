import {create} from 'zustand'
import axios from 'axios'
export type TprodcutData={
    id :number
    name :string
    category ?:string
    brand ?:string
    price : number
    image :string
   
    
}

type Tresponse={
    success : boolean, 
    message ?: string
}

type TprodcutSliceData ={
    prodcutsData : TprodcutData[],
    categories : string[],
    isPendingProdcutsData: boolean,
     page :number,
     totalPages : number,
    fetchProdcutsData: (catigory ?: string) => Promise<Tresponse>
    fetchCategories: () => Promise<void>
    handleChangePage :(page : number)=> void
}
const endPoint ='http://localhost:5000/products'
const LIMIT = 8
const useProdcut = create<TprodcutSliceData>( (set ,get)=>({
    prodcutsData: [],
    categories :[],
    isPendingProdcutsData: false ,
    page : 1,
    totalPages : 1,
    fetchProdcutsData: async(category)=>{
        const {page} =  get()
        set({isPendingProdcutsData: true})
        try {
            const url = category ?
            `${endPoint}?_limit=${LIMIT}&&_page=${page}&&category=${category}  ` :
            `${endPoint}?_limit=${LIMIT}&&_page=${page}  ` 
            await new Promise(res => setTimeout(res,3000))
            const response = await axios.get(url)
            const prodcutsLenght =response.headers['x-total-count']
            set({
                prodcutsData :response.data ,
                totalPages: Math.ceil(prodcutsLenght / LIMIT)
            })
            return {success : true}
        } catch (error) {
            const err = error as Error
            return{success: false , message: err.message}
            
        }finally{
            set({isPendingProdcutsData: false})
        }
    },
    handleChangePage :(page) => set({page}),
    fetchCategories : async()=>{
        try {
            const {data} = await axios.get('http://localhost:5000/prodcutCategories')
            set({categories: data})
        } catch (error) {
            const err = error as Error
            console.log(err.message);
            
        }

    }
}))

export default useProdcut