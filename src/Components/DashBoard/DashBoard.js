import React from 'react';
import useData from '../../hooks/useData';
import { Line, LineChart, Area, AreaChart, Bar, BarChart, Tooltip, XAxis, YAxis, Legend, PieChart, Pie} from 'recharts';
const DashBoard = () => {
    const [data] = useData();
    return (
        <div className='grid grid-cols-2 justify-center items-center gap-5 w-[80%] mx-auto py-5'>
            <div className='shadow-lg border-2 rounded-2xl p-3'>
                <h1>Month VS Sell</h1>
                <LineChart width={400} height={300} data={data}>
                    <Line dataKey='month'></Line>
                    <Line dataKey='sell'></Line>
                    <Legend />
                    <Tooltip></Tooltip>
                    <XAxis dataKey="month" />
                    <YAxis dataKey="sell" />
                </LineChart>
            </div>
            <div className='shadow-lg border-2 rounded-2xl p-3'>
                <h1>Investment VS Revenue</h1>
                <AreaChart width={400} height={300} data={data}>
                    <Area dataKey='investment'></Area>
                    <Area dataKey='revenue'></Area>
                    <Legend />
                    <Tooltip></Tooltip>
                    <XAxis dataKey="month" />
                    <YAxis dataKey="investment" />
                </AreaChart>
            </div>
            <div className='shadow-lg border-2 rounded-2xl p-3'>
                <h1>Investment VS Revenue</h1>
                <BarChart width={400} height={300} data={data}>
                    <Bar dataKey='investment' fill="#8884d8"></Bar>
                    <Bar dataKey='revenue' fill="#82ca9d"></Bar>
                    <Legend />
                    <Tooltip></Tooltip>
                    <XAxis dataKey="month" />
                    <YAxis dataKey="investment" />
                </BarChart>
            </div>
            <div className='shadow-lg border-2 rounded-2xl p-3'>
                <h1>Investment VS Revenue</h1>
                <PieChart width={400} height={300} >

                    <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                     <Legend></Legend>
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
        </div>
    );
};

export default DashBoard;