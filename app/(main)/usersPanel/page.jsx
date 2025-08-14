'use client'
import { GrUserExpert } from "react-icons/gr";
import { useRouter } from 'next/navigation';
import React from 'react';
import CustomButton from "@/components/partials/CustomButton";

const Posts = () => {
    const router = useRouter()
    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <GrUserExpert className="size-20"/>
            <h1 className='my-5'>صفحه کاربر</h1>
            <CustomButton className='bg-red-500 hover:bg-red-800 text-red-100 w-64 cursor-pointer' onClick={()=>router.push("/")}>خروج</CustomButton>
        </div>
    );
}

export default Posts;