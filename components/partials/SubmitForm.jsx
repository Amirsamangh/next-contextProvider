'use client'

import { useFormStatus } from "react-dom";
import { ImSpinner10, ImSpinner8 } from "react-icons/im";

const SubmitForm = () => {
    const { pending } = useFormStatus()
    return (
        <div>
            <button
                disabled={pending}
                className="px-3 py-1 my-2 w-full h-10 flex justify-center items-center rounded-full cursor-pointer transition-all text-sky-50 bg-[#3b85ca] hover:bg-sky-700 disabled:opacity-70"
            >
                {pending ? (<ImSpinner8 className="animate-spin" />) : (<span>ورود</span>)}
            </button>
        </div>
    )
}

export default SubmitForm;