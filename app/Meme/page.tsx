import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { url } from 'inspector'
interface Meme{
    email:string
    id:number
    url:string
}


const Meme  = async() => {
const data=await fetch('https://api.imgflip.com/get_memes')
const response =await data.json()
console.log(response);
  return (
    <>
    <div className='flex-wrap text-center' >

    <h1>memes maker</h1>
{response.data.memes.map((item:Meme)=>{
  return <div >
    {/* <h1>{item.email}</h1> */}
    <h1>{item.id}</h1>
    <Image src={item.url} width={200} height={200} layout='responsive' alt='{name}'/>
<button className='btn btn-primary mt-3'>
              {/* Dynamically pass the meme id in the Link component */}
              <Link href={ { pathname:"creatememe",
               query:{url:item.url,
                id:item.id
              }}}>generate meme</Link>
            </button>
  </div>

}) }
</div>
    </>
  )
}

export default Meme