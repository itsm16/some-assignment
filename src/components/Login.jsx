import { useState } from "react";
import { useForm } from "react-hook-form"
import z from 'zod'


function Login() {
    const [error, setError] = useState(false);

    const formSchema = z.object({
        username: z.string().min(2).max(15),
        email: z.string().email().max(15),
        password: z.string().min(2).max(20)
    })

    const {register, handleSubmit, formState:{errors}, reset} = useForm();

    function onSubmit(data){
        try {
            const validation = formSchema.safeParse(data);
            {validation.error && setError(true)}

            // setError(false);
            // reset();
        } catch (error) {
            
        }
    }

  return (
    <div className="bg-black text-white h-[100vh] flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-6 rounded-md border-gray-900/70 w-[90%] h-fit py-18 px-3">
                <div className="text-2xl font-semibold">Login</div>
                <div className=" flex flex-col items-center justify-center w-[90%] gap-5">
                    <input {...register("username")} className="text-white border-gray-300/40 bg-black input outline-none" placeholder="Name" type="text" />
                    <input {...register("email")} className="text-white border-gray-300/40 bg-black input outline-none" placeholder="Email" type="text" />
                    <input {...register("password")} className="text-white border-gray-300/40 bg-black input outline-none" placeholder="Password" type="text" />
                    {/* {password.errors ? <p>k</p> : ""} */}
                </div>
                {error && 
                <div className="text-red-500 text-sm">
                    <div>Check if the fields are in given range</div>
                    <p>Username, Email: 2-15</p>
                    <p>Password: 2-20</p>
                </div>
                }
                <button type="submit" className="btn rounded-lg border-none bg-gray-200 w-[40%] max-w-[250px] text-black">Login</button>
            </form>
    </div>
  )
}
export default Login