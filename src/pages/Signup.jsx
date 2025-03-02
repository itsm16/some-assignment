import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";
import z from 'zod'


function Signup() {
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const formSchema = z.object({
        username: z.string().min(2).max(15),
        email: z.string().email().max(15),
        password: z.string().min(2).max(20)
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    async function onSubmit(data) {
        const validation = formSchema.safeParse(data);
        // { !validation.success && setError(true) }

        if(!validation.success){
            setError(true)
            return
        }

        try {
            const {email, password} = data;
            const query = await axios.post("https://some-backend-task.onrender.com/api/signup",{
                name, email, password
            },
            {withCredentials: true})

            setError(false);
            reset();
            navigate("/");
        } catch (error) {

        }
    }

    return (
        <div className="bg-black text-white h-[100vh] flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-6 rounded-md border-gray-900/70 w-[90%] h-fit py-15 px-3">
                <div className="text-2xl font-semibold">Sign Up</div>
                <div className=" flex flex-col items-center justify-center w-[90%] gap-5">
                    <input {...register("username", { required: "Name is required" })} className="text-white border-gray-300/40 bg-black input outline-none" placeholder="Name" type="text" />
                    <input {...register("email")} className="text-white border-gray-300/40 bg-black input outline-none" placeholder="Email" type="text" />
                    <input {...register("password")} className="text-white border-gray-300/40 bg-black input outline-none" placeholder="Password" type="text" />
                </div>
                {errors.username && <div className="text-red-500">k</div>}
                {error &&
                    <div className="text-red-500 text-center text-sm w-[85%]">
                        <div>Check if the fields are appropriate and in the given range</div>
                        <p>Username, Email: 2-15</p>
                        <p>Password: 2-20</p>
                    </div>
                }
                <button type="submit" className="btn rounded-lg border-none bg-gray-200 w-[40%] max-w-[250px] text-black">Sign Up</button>
            </form>
                <div className="text-md">Already a user? <button onClick={()=> navigate("/login")} className="cursor-pointer text-blue-600 text-lg font-semibold">Login</button></div>
        </div>
    )
}
export default Signup
