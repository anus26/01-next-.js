import React from 'react'
import Link from 'next/link';


interface id{
    name:string;
    username:string;
    id:number;
    
}
const product = async() => {
const data =await fetch('https://freetestapi.com/api/v1/students  ')
const response =await data.json()
console.log(response);

  return (
    <><h1>product</h1>
    <div className='flex justify-center gap-5 flex-wrap'>
      {
        response.map((item: id)=>{
    return <div key={item.id}> 
        <h1 key={item.id}>{item.name} {item.username} </h1>
        
        <button className='btn btn-primary'><Link href={`product/${item.id}`}>single user</Link></button>
    </div>
        })
      }


    </div>
    </>
  )
}

export default product