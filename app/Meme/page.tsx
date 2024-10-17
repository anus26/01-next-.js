import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { url } from 'inspector'
interface Meme {
  email: string
  id: string
  url: string
  box_count: number
}


const Meme = async () => {
  const data = await fetch('https://api.imgflip.com/get_memes')
  const response = await data.json()
  console.log("DATA======>", response);
  return (
    <>
      <div  >

        <h1>memes maker</h1>
        {response.data.memes.map((item: Meme) => {
          return <div >
            {/* <h1>{item.email}</h1> */}
          

            
<div className='flex-wrap justify-center '>
            <h1>{item.id}</h1>
        

            <Image src={item.url} width={300} height={300}  alt='{name}' className='justify-center'/>
            <button className='btn btn-primary mt-3'>
              {/* Dynamically pass the meme id in the Link component */}
              <Link href={{
                pathname: "creatememe",
                query: {
                  url: item.url,
                  id: item.id,
                  box_count: item.box_count
                }
              }}>generate meme</Link>
            </button>
              </div>
          </div>

        
        })}
      </div>
    </>
  )
}

export default Meme