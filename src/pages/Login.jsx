import React, { useState } from 'react'
import blob from '../assets/images/blob.svg'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useNavigate } from 'react-router';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    return (
        <div className='w-full h-screen flex justify-center items-center relative'>
            <div className='w-full fixed h-screen bottom-0 left-0 z-0'>
                <img src={blob} className='w-full h-full object-cover' alt="" />
            </div>
            <div className='w-full max-w-[400px] bg-white rounded-[15px] shadow-md z-10 border-4 border-[#98BDFF] p-5'>
                <div className='w-full flex justify-center items-center my-3'>
                    <div className='w-fit flex flex-col items-center'>
                        <div className='w-fit flex items-end translate-x-[5px]'>
                            <span className='w-5 h-5 rounded-t-full rounded-l-full rounded-r-full rounded-br-none bg-[color:var(--secondary-color)]'></span>
                            <span className='w-7 h-7 rounded-full bg-[color:var(--primary-color)] -translate-x-[10px]'></span>
                        </div>
                        <h1 className='text-lg font-[900] tracking-tighter text-gray-700'>eko nps</h1>
                    </div>
                </div>
                <div className='w-full mt-12 flex flex-col gap-4'>
                    <input type="text" placeholder='username' className='border border-[#98BDFF] bg-white rounded-[10px] text-[15px] w-full outline-none px-3 py-2' />
                    <div className='w-full flex items-center pr-2 border border-[#98BDFF] bg-white rounded-[10px]'>
                        <input type={showPassword ? "text" : "password"} placeholder='password' className='text-[15px] w-full rounded-[10px] outline-none px-3 py-2' />
                        <span className={`${showPassword ? 'rotate-180' : ''} transition-all duration-200 ease-in-out cursor-pointer`}>
                            {showPassword ? <IoEyeOff size={20} onClick={() => setShowPassword(!showPassword)} /> : <IoEye size={20} onClick={() => setShowPassword(!showPassword)} />}
                        </span>
                    </div>
                    <div className='w-full flex justify-end items-center gap-2 pr-1'>
                        <p className='text-[12px]'>remember me </p>
                        <span>
                            <input type="checkbox" name="" className='w-3' id="" />
                        </span>
                    </div>
                    <button onClick={() => navigate('/dashboard')} className='px-8 py-2 bg-[color:var(--secondary-color)] rounded-[10px] text-[16px] text-white font-[600] active:scale-95 transition-all duration-200 ease-in-out'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login