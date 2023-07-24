import * as Yup from 'yup'

export const SignInSchema = Yup.object({
    email:Yup.string().email().required("Email is required"),
    password:Yup.string().min(8).required("Password is required"),
    
})