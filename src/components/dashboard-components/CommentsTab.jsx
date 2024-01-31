import React, { useState } from 'react';
import { FaCaretDown } from "react-icons/fa6";

const topreviews = [
    {
        id: 0,
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
        stars: 4,
        image: '',
    },
    {
        id: 1,
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
        stars: 4,
        image: '',
    },
    {
        id: 2,
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
        stars: 4,
        image: '',
    },
    {
        id: 3,
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
        stars: 4,
        image: '',
    },
];

const commentData = [
    { id: 0, comments: 14, duration: '1w' },
    { id: 1, comments: 49, duration: '2w' },
    { id: 2, comments: 91, duration: '1m' },
    { id: 3, comments: 172, duration: '3m' },
];


const CommentsTab = () => {

    const [toggleDurationPopup, setToggleDurationPopup] = useState(false);

    const [activeDurationIndex, setActiveDurationIndex] = useState(0);

    return (
        <div className='w-full lg:min-w-[300px] sm:max-w-[380px] bg-white flex justify-center items-center shadow-md rounded-[15px] p-8 relative'>
            <div className='absolute top-3 left-6 flex justify-start items-center gap-2'>
                <div className='w-2 h-2 bg-green-600 rounded-full'></div>
                <h1 className='text-[18px] font-[800] text-black'>Comments</h1>
            </div>
            <div className='w-full flex flex-col mt-5 z-10'>
                <div className='text-right'>
                    <h1 className='text-8xl font-[600] text-[color:var(--primary-color)]'>{commentData[activeDurationIndex]?.comments}</h1>
                    <h1 className='text-[15px] font-[800] pr-2 text-gray-800'>Comments</h1>
                </div>
                <div className='w-full flex items-center justify-end gap-3 mt-8'>
                    <h1>in last</h1>
                    <div className='w-full max-w-[80px] bg-gray-100 px-3 py-1 rounded-[8px] relative cursor-pointer' onClick={() => setToggleDurationPopup(!toggleDurationPopup)}>
                        {commentData[activeDurationIndex]?.duration}
                        <span className={`absolute top-[19%] right-1 cursor-pointer flex justify-center items-center  ${toggleDurationPopup ? 'rotate-180' : ''} transition-all duration-150 ease-in-out`}>
                            <FaCaretDown size={20} />
                        </span>
                        <div className={`w-full absolute top-[104%] left-0 bg-gray-200 rounded-[7px] transition-all duration-150 ease-in-out overflow-hidden ${toggleDurationPopup ? 'h-[133px]' : 'h-0'}`}>
                            <div className='w-full flex flex-col'>
                                {
                                    commentData?.map((data, i) => (
                                        <h1 key={i} onClick={() => {
                                            setActiveDurationIndex(i);
                                            setToggleDurationPopup(false);
                                        }} className={`text-[14px] font-[500] hover:text-white hover:bg-[color:var(--primary-color)] cursor-pointer text-center border-b py-1.5 ${data?.id == 0 ? 'rounded-t-[7px]' : data?.id == 3 ? 'rounded-b-[7px]' : ''}`}>{data?.duration}</h1>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="custom-shape-divider-bottom-1706595659 absolute bottom-0 left-0 rounded-b-[10px]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
    );
}

export default CommentsTab;