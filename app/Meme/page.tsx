import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
{response.data.memes.map((meme:Meme)=>{
  return <div key={meme.id} >
    <h1>{meme.email}</h1>
    <h1>{meme.id}</h1>
    <Image src={meme.url} width={300} height={300} layout='responsive' alt='{name}'/>
<button className='btn btn-primary mt-3'>
              {/* Dynamically pass the meme id in the Link component */}
              <Link href={`/meme/${meme.id}`}>Single User</Link>
            </button>
  </div>

}) }
</div>
    </>
  )
}

export default Meme