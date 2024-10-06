import React from 'react'
import Link from 'next/link'
const Person = () => {
  return (
    <>
    <h1>Person</h1>
    <button className='btn btn-primary'><Link href={'/'}>Home</Link></button>
    </>
  )
}

export default Person