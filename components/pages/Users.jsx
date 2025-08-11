'use client'

import React, { useEffect, useState } from 'react';
import TableLoading from '../partials/TableLoading';
import axios from 'axios'

const UsersPage = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const handleGetUsers = async () => {
        setIsLoading(true)
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        if (res.status === 200) {
            setUsers(res.data)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        handleGetUsers()
    }, [])

    return isLoading ? (<TableLoading />) : (

        <div className={"w-full p-4"}>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-500 dark:text-gray-800">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                نام کاربر
                            </th>
                            <th scope="col" className="px-6 py-3">
                                نام کاربری
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ایمیل
                            </th>
                            <th scope="col" className="px-6 py-3">
                                آدرس
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(u => (
                            <tr key={u.id} className="odd:bg-white odd:dark:bg-gray-800 even:bg-gray-50 even:dark:bg-gray-700 border-b dark:border-gray-700 border-gray-200">
                                <td className="px-6 py-4">
                                    {u.id}
                                </td>
                                <td className="px-6 py-4">
                                    {u.name}
                                </td>
                                <td className="px-6 py-4">
                                    {u.username}
                                </td>
                                <td className="px-6 py-4">
                                    {u.email}
                                </td>
                                <td className="px-6 py-4">
                                    {u.address?.street}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {/* <table className={"table w-full"}>
                <thead>
                    <tr className={"h-8"}>
                        <td className={"bg-gray-300 rounded-r-md"}>#</td>
                        <td className={"bg-gray-300"}>نام کاربر</td>
                        <td className={"bg-gray-300"}>نام کاربری</td>
                        <td className={"bg-gray-300"}>ایمیل</td>
                        <td className={"bg-gray-300 rounded-l-md"}>آدرس</td>
                    </tr>
                </thead>

                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td className={"bg-white rounded-r-md p-1"}>{user.id}</td>
                            <td className={"bg-white p-1"}>{user.name}</td>
                            <td className={"bg-white p-1"}>{user.username}</td>
                            <td className={"bg-white p-1"}>{user.email}</td>
                            <td className={"bg-white rounded-l-md p-1"}>{user.address?.street}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>
    );
};

export default UsersPage;