import React, { useEffect, useState } from 'react'
import cross from '../../assets/icons/cross.png'
import { FaCaretDown } from "react-icons/fa6";

const ReviewsTable = () => {

    const [reviewData, setReviewData] = useState();

    const [editedComment, setEditedComment] = useState('');

    const [activeReviewId, setActiveReviewId] = useState(null);

    const [toggleDurationPopup, setToggleDurationPopup] = useState(false);

    const [activeDuration, setActiveDuration] = useState('1w');

    const comments = [
        {
            id: 1,
            review: 'Review 1: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 1: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '3m',
        },
        {
            id: 2,
            review: 'Review 2: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 2: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '1m',
        },
        {
            id: 3,
            review: 'Review 3: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 3: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '3m',
        },
        {
            id: 4,
            review: 'Review 4: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 4: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '2w',
        },
        {
            id: 5,
            review: 'Review 5: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 5: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '1m',
        },
        {
            id: 6,
            review: 'Review 6: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 6: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '1w',
        },
        {
            id: 7,
            review: 'Review 7: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 7: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '1w',
        },
        {
            id: 8,
            review: 'Review 8: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 8: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '3m',
        },
        {
            id: 9,
            review: 'Review 9: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 9: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '2w',
        },
        {
            id: 10,
            review: 'Review 10: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 10: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '3m',
        },
        {
            id: 11,
            review: 'Review 11: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 11: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '1m',
        },
        {
            id: 12,
            review: 'Review 12: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 12: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '1w',
        },
        {
            id: 13,
            review: 'Review 13: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 13: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '3m',
        },
        {
            id: 14,
            review: 'Review 14: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 14: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '3m',
        },
        {
            id: 15,
            review: 'Review 15: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 15: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '3m',
        },
        {
            id: 16,
            review: 'Review 1: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 1: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '2w',
        },
        {
            id: 17,
            review: 'Review 2: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 2: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '1w',
        },
        {
            id: 18,
            review: 'Review 3: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 3: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '2w',
        },
        {
            id: 19,
            review: 'Review 4: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 4: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '3m',
        },
        {
            id: 20,
            review: 'Review 76: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 5: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '1m',
        },
        {
            id: 21,
            review: 'Review 6: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 6: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '1m',
        },
        {
            id: 22,
            review: 'Review 7: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 7: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '1m',
        },
        {
            id: 23,
            review: 'Review 8: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 8: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '1w',
        },
        {
            id: 24,
            review: 'Review 9: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 9: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '3m',
        },
        {
            id: 25,
            review: 'Review 10: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 10: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '1w',
        },
        {
            id: 26,
            review: 'Review 11: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 11: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '2w',
        },
        {
            id: 27,
            review: 'Review 12: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 12: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '3m',
        },
        {
            id: 28,
            review: 'Review 13: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 13: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '3m',
        },
        {
            id: 29,
            review: 'Review 14: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 14: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '2w',
        },
        {
            id: 30,
            review: 'Review 15: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita. Aperiam optio dolores minus necessitatibus quibusdam.',
            comment: 'Comment 15: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor atque fuga quos ipsa expedita.',
            duration: '1m',
        }
    ];

    const commentData = [
        { id: 0, duration: '1w' },
        { id: 1, duration: '2w' },
        { id: 2, duration: '1m' },
        { id: 3, duration: '3m' },
    ];

    const handleEditReviewClick = (id) => {
        setActiveReviewId(id);
        setEditedComment(reviewData?.find((findData) => findData?.id == id)?.comment);
    }

    const handleSubmit = () => {
        const updatedReviewData = reviewData.map((item) =>
            item.id === activeReviewId ? { ...item, comment: editedComment } : item
        );
        setReviewData(updatedReviewData);
        setActiveReviewId(null);
    };

    useEffect(() => {
        setReviewData(comments)
    }, [])

    return (
        <div className='w-full bg-[#ecf3ff] border-4 border-[#afd8ff] shadow-md rounded-[15px] p-5'>

            {/* desktop reviews table */}
            <div className='w-full hidden lg:block'>
                <div className='w-full py-3 flex justify-normal'>
                    <div className='w-full max-w-[80px] bg-gray-100 px-3 py-1 rounded-[8px] relative border border-gray-500 cursor-pointer' onClick={() => setToggleDurationPopup(!toggleDurationPopup)}>
                        {activeDuration}
                        <span className={`absolute top-[19%] right-1 cursor-pointer flex justify-center items-center  ${toggleDurationPopup ? 'rotate-180' : ''} transition-all duration-150 ease-in-out`}>
                            <FaCaretDown size={20} />
                        </span>
                        <div className={`w-full absolute top-[104%] left-0 bg-gray-200 rounded-[7px] transition-all duration-150 ease-in-out overflow-hidden ${toggleDurationPopup ? 'h-[133px]' : 'h-0'}`}>
                            <div className='w-full flex flex-col'>
                                {
                                    commentData?.map((data, i) => (
                                        <h1 key={i} onClick={() => {
                                            setActiveDuration(data?.duration);
                                            setToggleDurationPopup(false);
                                        }} className={`text-[14px] font-[500] hover:text-white hover:bg-[color:var(--primary-color)] cursor-pointer text-center border-b py-1.5 ${data?.id == 0 ? 'rounded-t-[7px]' : data?.id == 3 ? 'rounded-b-[7px]' : ''}`}>{data?.duration}</h1>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full grid grid-cols-[1fr_1fr_200px] gap-5 pb-5 pt-2'>
                    <div className='w-full'>
                        <h1 className='text-[16px] font-[600] text-black'>Reviews</h1>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-[16px] font-[600] text-black'>Comments</h1>
                    </div>
                    <div className='w-full text-center'>
                        <h1 className='text-[16px] font-[600] text-black'>Action</h1>
                    </div>
                </div>
                <div className='w-full border-t-2 border-t-[#afd8ff] pt-5 max-h-[400px] overflow-y-scroll'>
                    {
                        reviewData?.filter((filterValue => filterValue?.duration === activeDuration))?.map((data, i) => (
                            <div className='w-full grid grid-cols-[1fr_1fr_200px] gap-10 mb-8'>
                                <div className='w-full'>
                                    <h1 className='text-[14px] font-[400]'>{data?.review}</h1>
                                </div>
                                <div className='w-full'>
                                    <h1 className='text-[14px] font-[400]'>{data?.comment}</h1>
                                </div>
                                <div className='w-full text-center'>
                                    <button onClick={() => handleEditReviewClick(data?.id)} className='px-6 py-2 bg-blue-200 text-[14px] font-[400] rounded-[7px] active:scale-95 transition-all duration-300 ease-in-out'>Reject / Edit</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* mobile reviews table */}
            <div className='w-full block lg:hidden'>
                <div className='w-full py-3 flex justify-normal'>
                    <div className='w-full max-w-[80px] bg-gray-100 px-3 py-1 rounded-[8px] relative border border-gray-500 cursor-pointer' onClick={() => setToggleDurationPopup(!toggleDurationPopup)}>
                        {activeDuration}
                        <span className='absolute top-1 right-1'>▼</span>
                        <div className={`w-full absolute top-[104%] left-0 bg-gray-200 rounded-[7px] transition-all duration-150 ease-in-out overflow-hidden ${toggleDurationPopup ? 'h-[133px]' : 'h-0'}`}>
                            <div className='w-full flex flex-col'>
                                {
                                    commentData?.map((data, i) => (
                                        <h1 key={i} onClick={() => {
                                            setActiveDuration(data?.duration);
                                            setToggleDurationPopup(false);
                                        }} className={`text-[14px] font-[500] hover:text-white hover:bg-[color:var(--primary-color)] cursor-pointer text-center border-b py-1.5 ${data?.id == 0 ? 'rounded-t-[7px]' : data?.id == 3 ? 'rounded-b-[7px]' : ''}`}>{data?.duration}</h1>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    {
                        reviewData?.filter((filterValue => filterValue?.duration === activeDuration))?.map((data, i) => (
                            <div key={data?.id} className='w-full mb-6 border border-[color:var(--primary-color)] rounded-[7px] p-4'>
                                <div key={data?.id} className='w-full flex flex-col'>
                                    <div className='w-full flex flex-col justify-normal border-b border-gray-300 pb-3'>
                                        <h1 className='text-[14px] font-[700] text-gray-800 mb-1'>Review</h1>
                                        <h1 className='text-[15px] text-gray-800'>{data?.review}</h1>
                                    </div>
                                    <div className='w-full flex flex-col justify-normal pt-3'>
                                        <h1 className='text-[14px] font-[700] text-gray-800 mb-1'>Comment</h1>
                                        <h1 className='text-[15px] text-gray-800'>{data?.comment}</h1>
                                    </div>
                                </div>
                                <div className='w-full flex justify-end items-center mt-5'>
                                    <button onClick={() => handleEditReviewClick(data?.id)} className='px-6 py-2 bg-blue-200 text-[14px] font-[400] rounded-[7px] active:scale-95 transition-all duration-300 ease-in-out'>Reject / Edit</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* edit comment popup */}
            <div className={`w-full max-w-[700px] bg-white rounded-[15px] shadow-md fixed left-[50%] -translate-x-[50%] -translate-y-[0%] bottom-[25%] z-[260] px-5 pb-5 ${activeReviewId == null ? 'hidden' : 'block'}`}>
                <div className='w-full pt-4 flex justify-end items-center'>
                    <img src={cross} className='w-[30px]' alt="" onClick={() => {
                        setActiveReviewId(null);
                        setEditedComment('');
                    }} />
                </div>
                {
                    reviewData?.filter((filterData) => filterData?.id === activeReviewId)?.map((data) => (
                        <div key={data?.id}>
                            <div className='w-full py-4 flex justify-start items-center'>
                                <h1>{data?.duration} ago</h1>
                            </div>
                            <div className='w-full'>
                                <div className='w-full pb-4 border-b border-b-gray-400'>
                                    <h1 className='text-[15px] font-[800] mb-4'>Review</h1>
                                    <h1>{data?.review}</h1>
                                </div>
                            </div>
                            <div className='w-full mt-6'>
                                <div className='w-full pb-4'>
                                    <h1 className='text-[15px] font-[800] mb-4'>Comment</h1>
                                    <textarea rows={5} value={editedComment} onChange={(e) => setEditedComment(e?.target?.value)} type="text" className='w-full outline-none bg-gray-200 p-3 rounded-[10px]' />
                                </div>
                            </div>
                            <div className='w-full flex justify-end items-center gap-4'>
                                <button className='px-6 py-2 rounded-[7px] bg-blue-200' onClick={handleSubmit}>Submit</button>
                                <button className='px-6 py-2 rounded-[7px] bg-red-700 text-white'>Reject</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={`w-full fixed bg-black inset-0 z-[250] opacity-40 ${activeReviewId !== null ? 'block' : 'hidden'}`} onClick={() => {
                setActiveReviewId(null);
                setEditedComment('');
            }} />
        </div>
    )
}

export default ReviewsTable