import React from 'react'
import { MdReviews } from "react-icons/md";
import { RiChatSmile2Fill, RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";

const ReviewCard = ({ amount, title, id }) => {
    return (
        <div className='bg-[#c7daff] shadow-md flex flex-col justify-center items-center rounded-[15px] p-10'>
            <h1 className='text-lg text-black font-[900] text-center leading-[17px] mb-2'>{`${amount} ${title}`}</h1>
            { id == 0 ? <MdReviews size={30} color='white' /> : id == 1 ? <RiChatSmile2Fill size={30} color='white' /> : id == 2 ? <RiMoneyDollarCircleFill size={30} color='white' /> : id == 3 ? <IoPeopleSharp size={30} color='white' /> : null }
        </div>
    )
}

export default ReviewCard