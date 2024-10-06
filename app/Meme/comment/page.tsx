

import React from 'react'


const Comment = (props:{params:{id:string}}) => {




  return (
    <>
    <h1>Comment {props.params.id}</h1>
    <form onSubmit={handlesubmit}>

    <input type="text" placeholder='first meme'/>
    <input type=" text" placeholder='second meme' />
<button type='submit'></button>
    </form>
  
    </>
  )
}

export default Comment