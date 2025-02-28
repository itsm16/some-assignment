import {useForm} from 'react-hook-form'

function Modal({open, setOpen}) {
    const {register, handleSubmit, formState : {errors}} = useForm();

    const onSubmit = () => {
        console.log("mg");
    };

    return (
        <>
            <dialog id="my_modal_3" className={`modal ${open ? "modal-open" : ""}`}>
                <div className="modal-box border border-white/60 bg-black/10 backdrop-blur-xs text-white">
                    <button onClick={() => setOpen(false)} className="btn btn-sm btn-circle hover:bg-white hover:text-black btn-ghost absolute right-2 top-2">✕</button>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-7">
                            <div>
                                <div>Your Details</div>
                                <div className="flex flex-col gap-3 mt-1">
                                    <input
                                        {...register("title", { required: "Referrer Name is required" })}
                                        placeholder="Title"
                                        className="text-white border-gray-300/40 bg-inherit input outline-none"
                                    />
                                    {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

                                    <input
                                        {...register("title", { required: "Referrer Name is required" })}
                                        placeholder="Title"
                                        className="text-white border-gray-300/40 bg-inherit input outline-none"
                                    />
                                    </div>
                            </div>
                            <button type="submit" className="btn w-[40%] max-w-[400px] rounded-md bg-gray-300 text-black border-none">Submit</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}
export default Modal