import { useForm } from 'react-hook-form'
import axios from 'axios'
import { z } from 'zod'
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Modal({ open, setOpen, setToast }) {
    const user = useSelector(state => state.user.user)
    const [checked, setChecked] = useState(false);
    const [validationError, setValidationError] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const formSchema = z.object({
        title: z.string().min(3).max(40).trim(),
        description: z.string().min(3).max(300).trim()
    })

    const onSubmit = async (data) => {
        const validation = formSchema.safeParse(data);
        // console.log(checked ? (title, description) : (title, description, user));
        if (!validation.success) {
            // console.error("Validation Error", validation.error)
            setValidationError(true)
            return
        }

        const { description, title } = validation.data;
        try {
            await axios.post("http://localhost:3000/api/feedback",
                checked ? { title, description } : { title, description, user }
            )
            reset();
            setValidationError(false);
            setOpen(false);
            setToast(true);
            console.log("Sent")
        } catch (error) {
            return error
        }
    };

    return (
        <>
            <dialog id="my_modal_3" className={`modal ${open ? "modal-open" : ""}`}>
                <div className="modal-box border border-gray-400/30 bg-black/10 backdrop-blur-xs text-white">
                    <button onClick={() => setOpen(false)} className="btn btn-sm btn-circle hover:bg-white hover:text-black btn-ghost absolute right-2 top-2">✕</button>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-7">
                            <div>
                                <div>Your Details</div>
                                <div className="flex flex-col gap-3 mt-1">
                                    <input
                                        {...register("title", { required: "Name is required" })}
                                        placeholder="Title"
                                        className="text-white border-gray-300/40 bg-black input outline-none"
                                    />
                                    {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

                                    <textarea
                                        {...register("description", { required: "Description is required" })}
                                        placeholder="Description"
                                        className="text-white border-gray-300/40 bg-black textarea outline-none"
                                    />
                                    {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                                    <label className='flex gap-3 text-sm w-[60%]'>
                                        Record feedback without username
                                        <input onChange={() => setChecked(!checked)} checked={checked ? true : false} className={`checkbox checkbox-sm checked:bg-white checked:text-black`} type="checkbox" />
                                    </label>
                                </div>
                            </div>
                            
                            {validationError && <div>
                                <div className="text-red-500 text-sm">Above fields should be in given range</div>
                                <div className="text-red-500 text-sm">Title: 3-40, Description: 3-300</div>
                            </div>}

                            <button type="submit" className="btn w-[40%] max-w-[400px] rounded-md bg-gray-200 text-black border-none">Submit</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}
export default Modal