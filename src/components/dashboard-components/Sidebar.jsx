import React from 'react'
import dashboard from '../../assets/icons/dashboard.png'
import model from '../../assets/icons/model.png'
import score from '../../assets/icons/score.png'

const Sidebar = () => {
    return (
        <div className='w-full hidden sm:block max-w-[100px] lg:max-w-[270px] xl:max-w-[340px] fixed top-[100px] bottom-0 p-5'>
            <div className='w-full h-full bg-white rounded-[15px] relative'>
                <div className='w-full flex justify-center items-center py-26 md:py-[80px]'>
                    <div className='w-fit flex items-end'>
                        {/* <div className='w-fit flex items-end'>
                            <span className='w-16 h-16 rounded-t-full rounded-l-full rounded-r-full rounded-br-none bg-[color:var(--secondary-color)]'></span>
                            <span className='w-24 h-24 rounded-full bg-[color:var(--primary-color)] -translate-x-[36px]'></span>
                        </div> */}
                        {/* <h1 className='text-3xl font-[900] tracking-tighter text-gray-700 px-2 rounded-[10px] border-2 border-[color:var(--primary-color)] bg-blue-200'>NPS</h1> */}
                    </div>
                </div>
                <div className=' flex flex-col'>
                    <div className='flex justify-start gap-3 bg-[#c7daff] py-3 px-5 cursor-pointer'>
                        <img src={dashboard} className='w-[22px] aspect-square object-contain' alt="" />
                        <h1 className='text-xl font-[700] text-black hidden lg:block'>NPS Dashboard</h1>
                    </div>
                    <div className='flex justify-start gap-3 hover:bg-[#a3c5ff] py-3 px-5 cursor-pointer'>
                        <img src={model} className='w-[22px] aspect-square object-contain' alt="" />
                        <h1 className='text-lg font-[500] text-black hidden lg:block'>Engagement Model</h1>
                    </div>
                    <div className='flex justify-start gap-3 hover:bg-[#a3c5ff] py-3 px-5 cursor-pointer'>
                        <img src={score} className='w-[22px] aspect-square object-contain' alt="" />
                        <h1 className='text-lg font-[500] text-black hidden lg:block'>Provider Score</h1>
                    </div>
                </div>
                <div className='w-full absolute left-0 bottom-0 justify-center items-center pb-4 hidden lg:flex'>
                    <h1 className='text-[12px] text-center'>© Eko Infomatics Solutions Pvt. Ltd.</h1>
                </div>
            </div>
        </div>
    )
}

export default Sidebar