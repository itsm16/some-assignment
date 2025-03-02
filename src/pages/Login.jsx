import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import z from 'zod'
import { getUser, setUser } from "../store/features/userSlice";


function Login() {
    const [error, setError] = useState(false);
    const [queryErr, setQueryErr] = useState(null);
    const [resStatus, setResStatus] = useState(null);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const formSchema = z.object({
        email: z.string().email().max(15),
        password: z.string().min(2).max(20)
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    async function onSubmit(data) {
        const validation = formSchema.safeParse(data);
        // { !validation.success && setError(true) }

        if (!validation.success) {
            setError(true)
            return
        }

        try {
            const {email, password} = data;
            const query = await axios.post("https://some-backend-task.onrender.com/api/login",{
                email, password
            },
            {withCredentials: true})

            console.log("Inside login try:", query.data);
            
            // setQueryErr(false)
            dispatch(setUser(query.data.user));
            setError(false);
            reset();
            navigate("/");
        } catch (error) {
            throw error
        }
    }

    return (
        <div className="bg-black text-white h-[100vh] flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-6 rounded-md border-gray-900/70 w-[90%] h-fit py-15 px-3">
                <div className="text-2xl font-semibold">Login</div>
                <div className=" flex flex-col items-center justify-center w-[90%] gap-5">
                    <input {...register("email")} className="text-white border-gray-300/40 bg-black input outline-none" placeholder="Email" type="text" />
                    {errors.email && <div className="text-red-500">{errors.email.message}</div>}
                    <input {...register("password")} className="text-white border-gray-300/40 bg-black input outline-none" placeholder="Password" type="text" />
                    {errors.password && <div className="text-red-500">{errors.password.message}</div>}
                </div>
                {error &&
                    <div className="text-red-500 text-sm w-[85%] text-center">
                        <div>Check if the fields are appropriate and in the given range</div>
                    </div>
                }
                
                <button type="submit" className="btn rounded-lg border-none bg-gray-200 w-[40%] max-w-[250px] text-black">Login</button>
            </form>
                {/* <button onClick={()=>dispatch(getUser())} className="btn">k</button> */}
                
                <div className="text-md">Not a user? <button onClick={()=> navigate("/signup")} className="text-blue-600 cursor-pointer text-lg font-semibold">Sign Up</button></div>
        </div>
    )
}
export default Login