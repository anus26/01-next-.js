import React from 'react'

const Singleuser = (props:{ params:{id:string}}) => {
  return (
    <>
    <div>Singleuser{props.params.id}</div>
    </>
  )
}

export default Singleuser