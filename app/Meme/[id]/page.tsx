// "use client"

// import React, { useEffect, useState } from 'react'


// const Comment = (props:{params:{id:string}}) => {
//     const [firstMeme,setFirstMeme]=useState()
//     const [secondMeme,setSecondMeme]=useState()

// const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
// event.preventDefault()
// console.log('First Meme:', firstMeme);
// console.log('Second Meme:', secondMeme);
// console.log('Comment for ID:', props.params.id);

// }



//   return (
//     <>
//     <h1>Comment id: {props.params.id}</h1>
//     <form onSubmit={handleSubmit}>

//     <input type="text" placeholder='first meme'value={firstMeme} onChange={(event)=>setFirstMeme(event.target.value)}/>
//     <input type=" text" placeholder='second meme' value={secondMeme}  onChange={(event)=>setSecondMeme(event.target.value)}/>
// <button type='submit'>submit</button>
//     </form>
  
//     </>
//   )
// }

// export default Comment




'use client';

import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import Image from 'next/image';

interface Meme {
  id: number;
  name: string;
  url: string;
}

const Comment = (props:{params:{id:number}}) => {
  // const router = useRouter();
  // const { id } = router.query; // Get the meme id from the URL
  const [meme, setMeme] = useState<Meme | null>(null);
  const [firstComment, setFirstComment] = useState('');
  const [secondComment, setSecondComment] = useState('');

  // Fetch the meme data by ID when the component mounts



  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
const data =await fetch(`https://api.imgflip.com/get_memes`)
const response =await data.json()
console.log(response);



    console.log('First Comment:', firstComment);
    console.log('Second Comment:', secondComment);
    console.log('Comment for Meme ID:', );
    // Add your submission logic here
  };


  return (
    <>
      <h1>Comment for Meme ID: {props.params.id}</h1>
      {/* <Image src={meme.url} width={300} height={300} layout='responsive' alt={meme.name} /> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First comment"
          value={firstComment}
          onChange={(event) => setFirstComment(event.target.value)}
        />
        <input
          type="text"
          placeholder="Second comment"
          value={secondComment}
          onChange={(event) => setSecondComment(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Comment;
