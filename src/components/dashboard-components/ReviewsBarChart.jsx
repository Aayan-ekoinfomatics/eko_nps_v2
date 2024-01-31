import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import { ResponsiveBar } from '@nivo/bar'

const data = [
    {
        name: 'Jan',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Mar',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Apr',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Jun',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
];

const ReviewsBarChart = () => {
    return (
        <div className='w-full bg-white shadow-md rounded-[15px] relative flex justify-center items-center'>
            <div className='absolute top-3 left-6 flex justify-start items-center gap-2'>
                <div className='w-2 h-2 bg-green-600 rounded-full'></div>
                <h1 className='text-[18px] font-[800] text-black'>Reviews</h1>
            </div>
            <ResponsiveContainer width={600} minWidth={300} height={290} className={`w-full flex justify-center items-center`} >
                <BarChart
                    data={data}
                    margin={{
                        top: 50,
                        right: 30,
                        left: 30,
                        bottom: 10,
                    }}
                >
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="skyblue" stroke="blue" />} />
                    <Bar dataKey="uv" fill="#98BDFF" activeBar={<Rectangle fill="lavender" stroke="purple" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ReviewsBarChart
