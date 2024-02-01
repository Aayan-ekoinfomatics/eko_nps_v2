import React, { useEffect, useState } from 'react'
import Sidebar from '../components/dashboard-components/Sidebar'
import DigitalClock from '../components/dashboard-components/DigitalClock'
import ReviewsBarChart from '../components/dashboard-components/ReviewsBarChart'
import ReviewCard from '../components/dashboard-components/ReviewCard'
import CommentsTab from '../components/dashboard-components/CommentsTab'
import ReviewsTable from '../components/dashboard-components/ReviewsTable'
import review from '../assets/icons/review.svg'
import positive from '../assets/icons/positive.svg'
import profit from '../assets/icons/profit.svg'
import users from '../assets/icons/users.svg'

const Dashboard = () => {

  const [popUpToggleOpen, setPopUpToggleOpen] = useState(false);

  const reviewcardData = [
    {
      id: 0,
      amount: '3690',
      title: 'reviews',
      image: review,
    },
    {
      id: 1,
      amount: '58%',
      title: 'positive',
      image: positive,
    },
    {
      id: 2,
      amount: '7%',
      title: 'revenue',
      image: profit,
    },
    {
      id: 3,
      amount: '200+',
      title: 'new users',
      image: users,
    },
  ];

  return (
    <div className='bg-[#f4f6ff] w-full flex relative overflow-x-hidden min-h-screen'>
      {/* <div className='w-full h-[30vh] bg-[#d2e1ff] absolute top-0 rounded-b-[60%] z-0'></div> */}
      <Sidebar />
      <div className='w-full z-10 p-10 sm:pl-[100px] lg:pl-[270px] xl:pl-[380px] sm:mr-5'>
        <div className='w-full flex justify-end md:justify-between mb-20 mt-1'>
          <div className='hidden md:block'>
            <h1 className='text-5xl font-[600] text-gray-800'>Hello admin,</h1>
            <h1 className='text-2xl font-[500] text-gray-800'>Welcome to your reviews analytics.</h1>
          </div>
          <DigitalClock />
        </div>
        <div className='w-full flex flex-col-reverse 2xl:flex-row-reverse justify-between 2xl:items-center gap-5'>
          <div className='w-full 2xl:w-fit'>
            <ReviewsBarChart />
          </div>
          <div className='flex flex-col lg:flex-row w-full  2xl:justify-between gap-5'>
            <div className='w-full 2xl:w-fit flex justify-end'>
              <CommentsTab />
            </div>
            <div className='w-full 2xl:w-fit col-start-2 col-end-3'>
              <div className='w-full 2xl:w-fit grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {
                  reviewcardData.map((data) => (
                    <ReviewCard title={data?.title} amount={data?.amount} id={data?.id} key={data?.id} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <div className='w-full mt-10'>
          <ReviewsTable />
        </div>
      </div>
    </div>
  )
}

export default Dashboard