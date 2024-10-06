import React from 'react'


interface props{
    title?:string;
    description?:string
}
const Card = (props:props) => {
  return (
    <>

<div className="card bg-base-100 w-96 shadow-xl">
  {/* <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure> */}
  <div className="card-body items-center text-center">
    <h2 className="card-title"> {props.title}</h2>
    <p>{props.description ?  props.description: 'lorem ipsum'}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


    </>
  )
}

export default Card