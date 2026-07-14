import z from 'zod'
export  const registerSechma = z.object({
    email :z.string().min(1 , {message: '"Enter your Email'}).email({message:'This Email is Not Vaild'}),
    password :z.string().min(1 , {message:'Enter Strong Password'})
           
})
