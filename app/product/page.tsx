'use client'


import React, { useEffect, useState } from 'react';
import Link from 'next/link';


interface id{
    name:string;
    username:string;
    id:number;
    
}



const Product = () => {
  const [response, setResponse] = useState<id[]>([]);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await fetch('https://freetestapi.com/api/v1/students');
      if (!data.ok) {
        throw new Error(`Failed to fetch data: ${data.statusText}`);
      }
      const result = await data.json();
      setResponse(result);
    } catch (err) {
      setError('Failed to load data');
      console.error('Error fetching data:', err);
    }
  };
  fetchData();
}, []);

// const response =await data.json()
// console.log(response);

  return (
    <><h1>product</h1>
    <div className='flex justify-center gap-5 flex-wrap'>
      {
        response.map((item: id)=>{
    return <div key={item.id}> 
        <h1 >{item.name} {item.username} </h1>
        
        <button className='btn btn-primary'><Link href={`product/${item.id}`}>single user</Link></button>
    </div>
        })
      }


    </div>
    </>
  )
}

export default Product