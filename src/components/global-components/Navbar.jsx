import React from 'react'
import logout from '../../assets/icons/logout.svg'
import profile from '../../assets/icons/profile.svg'
import { useNavigate } from 'react-router'

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div className='fixed top-0 bg-[#f2f5ff] z-[200] max-w-[100vw] w-full'>
            <div className='w-full px-5 md:px-10 xl:px-16 py-5 flex justify-between items-center'>
                <div className=''>
                    <div className='w-fit flex flex-col items-center'>
                        <div className='w-fit flex items-end translate-x-[5px]'>
                            <span className='w-5 h-5 rounded-t-full rounded-l-full rounded-r-full rounded-br-none bg-[color:var(--secondary-color)]'></span>
                            <span className='w-7 h-7 rounded-full bg-[color:var(--primary-color)] -translate-x-[10px]'></span>
                        </div>
                        <h1 className='text-xl font-[900] tracking-tighter text-gray-700'>eko nps</h1>
                    </div>
                </div>
                <div className='flex items-center gap-5 md:gap-10 '>
                    <div>
                        <img src={profile} className='w-[30px] md:w-[35px] cursor-pointer' alt="" />
                    </div>
                    <div>
                        <img src={logout} className='w-[30px] md:w-[43px] cursor-pointer' alt="" onClick={() => navigate('/login')} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar