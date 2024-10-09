

'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

// interface Meme {
//   id: number;
//   name: string;
//   url: string;
// }

const CreateMeme = ({searchParams}:{searchParams:{id:string; url:string}}) => {
  const [meme, setMeme] = useState<string | null>(null);
  const text1= useRef<HTMLInputElement>(null)
  const text2= useRef<HTMLInputElement>(null)
  console.log(searchParams);
  
  


  const createMeme =async(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    console.log(text1.current?.value);
    console.log(text2.current?.value);
    const data=await fetch( `https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=anusraza268@gmail.com&password=qadri786&text0=${text1.current?.value}&text1=${text2.current?.value}`,
      {
        method:'post'
      }
    )
    const  response =await data.json()
    console.log(response);
    setMeme(response.data.url)
    
  }
  

 
  


  return (
    <>
      {/* <h1>Comment for Meme ID: {meme.id}</h1> */}
      
{/*      
   { meme.url&&(

<Image src={meme.url} width={300} height={300} layout='responsive' alt='{name}' /> 

    )
   }

 */}
 <h1>createMeme</h1>
    <Image src={searchParams.url} width={200} height={200} alt='meme'/>


    <form onSubmit={createMeme}>
        <input type="text" placeholder='enter text 1' ref={text1}/>
        <input type="text" placeholder='enter text 2' ref={text2} />
        <button type='submit'>create meme</button>
    </form>
    {meme ? <Image src={meme} width={200} height={200} alt='meme'/> : null}
     
     
     
    </>
  );
};

export default CreateMeme;
