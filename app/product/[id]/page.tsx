import React from 'react'

const Singleuser = (props:{ params:{id:string}}) => {
  return (
    <>
    <div>Singleuser{props.params.id}</div>
    </>
  )
}

export default Singleuser
 // const data=await fetch(`https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=umarprogrammer19&password=Ugsofficial190807&text0=${text1.current?.value}&text1=${text2.current?.value}`,