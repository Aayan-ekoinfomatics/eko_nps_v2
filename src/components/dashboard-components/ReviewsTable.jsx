import React, { useEffect, useState } from 'react'
import cross from '../../assets/icons/cross.png'
import { FaCaretDown } from "react-icons/fa6";
import axios from 'axios';
import { topAlerts } from '../../utils/eversideCommentsApi';
import { handleFilterDate } from '../../utils/getTimeDifference';

const ReviewsTable = () => {

    const [reviewData, setReviewData] = useState();

    const [editedComment, setEditedComment] = useState('');

    const [activeReviewId, setActiveReviewId] = useState(null);

    const [toggleDurationPopup, setToggleDurationPopup] = useState(false);

    const [activeDuration, setActiveDuration] = useState('1m');

    const [dataLoading, setDataLoading] = useState(false);

    const commentData = [
        { id: 0, duration: '1w' },
        { id: 1, duration: '2w' },
        { id: 2, duration: '1m' },
        { id: 3, duration: '3m' },
        { id: 4, duration: '6m' },
        { id: 5, duration: '1y' },
        { id: 6, duration: '1y+' },
    ];

    const handleEditReviewClick = (id) => {
        setActiveReviewId(id);
        setEditedComment(reviewData?.find((findData) => findData?.id == id)?.review);
    }

    const handleSubmit = () => {
        const updatedReviewData = reviewData.map((item) =>
            item.id === activeReviewId ? { ...item, review: editedComment } : item
        );
        setReviewData(updatedReviewData);
        setActiveReviewId(null);
    };

    useEffect(() => {
        setDataLoading(true);
        axios.post(topAlerts).then((res) => {
            if (res) {
                setDataLoading(false);
                setReviewData(res?.data?.data)
            }
        })
    }, [])

    return (
        <div className='w-full bg-[#fff] border-4 border-[#afd8ff] shadow-md rounded-[15px] p-5'>

            {/* desktop reviews table */}
            <div className='w-full hidden lg:block'>
                <div className='w-full py-3 flex justify-normal'>
                    <div className='w-full max-w-[80px] bg-gray-100 px-3 py-1 rounded-[8px] relative border border-gray-500 cursor-pointer' onClick={() => setToggleDurationPopup(!toggleDurationPopup)}>
                        {activeDuration}
                        <span className={`absolute top-[19%] right-1 cursor-pointer flex justify-center items-center  ${toggleDurationPopup ? 'rotate-180' : ''} transition-all duration-150 ease-in-out`}>
                            <FaCaretDown size={20} />
                        </span>
                        <div className={`w-full absolute top-[104%] left-0 bg-gray-200 rounded-[7px] transition-all duration-150 ease-in-out overflow-hidden ${toggleDurationPopup ? 'h-[210px]' : 'h-0'}`}>
                            <div className='w-full flex flex-col'>
                                {
                                    commentData?.map((data, i) => (
                                        <h1 key={i} onClick={() => {
                                            setActiveDuration(data?.duration);
                                            setToggleDurationPopup(false);
                                        }} className={`text-[14px] font-[500] hover:text-white hover:bg-[color:var(--primary-color)] cursor-pointer text-center border-b py-1.5 ${data?.id == 0 ? 'rounded-t-[7px]' : data?.id == 6 ? 'rounded-b-[7px]' : ''}`}>{data?.duration}</h1>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full grid grid-cols-[1fr_1fr_15%] gap-5 pb-5 pt-2'>
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
                {
                    dataLoading ? (
                        <div className='w-full flex justify-center items-center border-t-2 border-t-[#afd8ff] pt-5 h-[400px] overflow-y-scroll'>
                            <div className='w-12 h-12 border-4 border-t-[color:var(--primary-color)] rounded-full animate-spin' />
                        </div>
                    ) : (
                        <div className='w-full border-t-2 border-t-[#afd8ff] pt-5 max-h-[400px] overflow-y-scroll'>
                            {
                                (() => {
                                    // Check if any comments match the condition
                                    const hasMatchingComments = reviewData?.filter((filterValue) => handleFilterDate(filterValue) === activeDuration);

                                    // Render based on the condition
                                    if (hasMatchingComments && hasMatchingComments?.length > 0) {
                                        // if (hasMatchingComments) {
                                        return hasMatchingComments?.map((data, i) => (
                                            <div key={i} className='w-full grid grid-cols-[1fr_1fr_15%] gap-10 mb-8'>
                                                <div className='w-full'>
                                                    <h1 className='text-[14px] font-[400]'>{data?.review1}</h1>
                                                </div>
                                                <div className='w-full'>
                                                    <h1 className='text-[14px] font-[400]'>{data?.review}</h1>
                                                </div>
                                                <div className='w-full text-center'>
                                                    <button onClick={() => handleEditReviewClick(data?.id)} className='px-6 py-2 shadow-md bg-blue-200 text-[14px] font-[400] rounded-[7px] active:scale-95 transition-all duration-300 ease-in-out'>
                                                        Reject / Edit
                                                    </button>
                                                </div>
                                            </div>
                                        ));
                                    } else {
                                        // Render "No comments found" if no matching comments
                                        return (
                                            <div className='w-full flex justify-center items-center h-[300px]'>
                                                <h1>No comments found!</h1>
                                            </div>
                                        );
                                    }
                                })()
                            }
                        </div>
                    )
                }

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
                {
                    dataLoading ? (
                        <div className='w-full flex justify-center items-center border-t-2 border-t-[#afd8ff] pt-5 h-[400px] overflow-y-scroll'>
                            <div className='w-12 h-12 border-4 border-t-[color:var(--primary-color)] rounded-full animate-spin' />
                        </div>
                    ) : (
                        <div className='w-full'>
                            {
                                (() => {
                                    // Check if any comments match the condition
                                    const hasMatchingComments = reviewData?.filter((filterValue) => handleFilterDate(filterValue) === activeDuration);

                                    // Render based on the condition
                                    if (hasMatchingComments && hasMatchingComments?.length > 0) {
                                        // if (hasMatchingComments) {
                                        return hasMatchingComments?.map((data, i) => (
                                            <div key={data?.id} className='w-full mb-6 border border-[color:var(--primary-color)] rounded-[7px] p-4'>
                                                <div key={data?.id} className='w-full flex flex-col'>
                                                    <div className='w-full flex flex-col justify-normal border-b border-gray-300 pb-3'>
                                                        <h1 className='text-[14px] font-[700] text-gray-800 mb-1'>Review</h1>
                                                        <h1 className='text-[15px] text-gray-800'>{data?.review1}</h1>
                                                    </div>
                                                    <div className='w-full flex flex-col justify-normal pt-3'>
                                                        <h1 className='text-[14px] font-[700] text-gray-800 mb-1'>Comment</h1>
                                                        <h1 className='text-[15px] text-gray-800'>{data?.review}</h1>
                                                    </div>
                                                </div>
                                                <div className='w-full flex justify-end items-center mt-5'>
                                                    <button onClick={() => handleEditReviewClick(data?.id)} className='px-6 py-2 bg-blue-200 text-[14px] font-[400] rounded-[7px] active:scale-95 transition-all duration-300 ease-in-out'>Reject / Edit</button>
                                                </div>
                                            </div>
                                        ));
                                    } else {
                                        // Render "No comments found" if no matching comments
                                        return (
                                            <div className='w-full flex justify-center items-center h-[300px]'>
                                                <h1>No comments found!</h1>
                                            </div>
                                        );
                                    }
                                })()
                            }
                        </div>
                    )
                }
            </div>

            {/* edit comment popup */}
            <div className={`w-full max-w-[700px] bg-white rounded-[15px] shadow-md fixed left-[50%] -translate-x-[50%] -translate-y-[0%] bottom-[6%] md:bottom-[15%] z-[260] px-5 pb-5 ${activeReviewId == null ? 'hidden' : 'block'}`}>
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