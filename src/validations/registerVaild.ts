import z from 'zod'
export  const registerSechma = z.object({
    firstName : z.string().min(1 , {message: 'Enter your Frist Name'}),
    lastName : z.string().min(1 , {message: 'Enter your Last Name'}),
    phone : z.string().min(1 , {message: 'Enter your Phone Number'})
                .regex(/^01[0-25][0-9]{8}$/ , {message:'This Number is Not Vaild'}),
    email :z.string().min(1 , {message: '"Enter your Email'}).email({message:'This Email is Not Vaild'}),
    password :z.string().min(1 , {message:'Enter Strong Password'})
            .regex(/[A-Z]/ ,{message: 'Must Write Capital Charctar'})
            .regex(/[A-Z]/ ,{message: 'Must Write Capital Charctar'})
            .regex(/[a-z]/ ,{message: 'Must Write Smaul Charctar'})
            .regex(/[a-z]/ ,{message: 'Must Write Smaul Charctar'})
            .regex(/[0-9]{3}/ ,{message: 'Must Be write 3 Number at least'})
            .regex(/[!@#$%^&*()_+\-={};':"|,.<>/?`~]{1}/ ,{message: 'Must Be Write 1 Specail Charctar at least'})
           .min(8, { message: "Enter 8 Characters at least" }),
    confirmPassword: z.string().min(1 , {message: 'Enter your Confirm Password'})
}).refine((same)=>same.password === same.confirmPassword ,{message:'Password is not Matching' , path:['confirmPassword']} )