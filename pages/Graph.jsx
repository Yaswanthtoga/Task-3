import React, { useEffect, useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';


const Graph = () => {
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     const fetchData = async()=>{
    //         const res=  await axios.get(`http://localhost:8800/api/tasklist`);
    //         const arr = res.data;
    //         arr.forEach((item)=>{
    //             const createdAt = new Date(item.createdAt);
    //             const formattedDate = createdAt.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    //             // item.formattedDate = formattedDate;
    //             setData([...data,{ Date:"formattedDate",Total:arr }]);
    //         })
    //     }
    //     fetchData();
    // },[])
    const data = [
        { Name:"January",Total:1200 },
        { Name:"February",Total:2100 },
        { Name:"March",Total:800 },
        { Name:"April",Total:1600 },
        { Name:"May",Total:900 },
        { Name:"June",Total:1700 },
    ];

  return (
    <div style={{ marginLeft:120,marginTop:30 }} >
        <ResponsiveContainer width="90%" aspect={2 / 0.8}>
        <AreaChart width={730} height={250} data={data}
        margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
        <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
            </defs>
            <XAxis dataKey="date" stroke='gray'/>
            <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
            <Tooltip />
            <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Graph