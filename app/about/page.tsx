import React from 'react'
import Link from 'next/link'
const About = () => {
  return (
    <><h1>About</h1>
    <button className='btn btn-primary'><Link href={"/"}>Home</Link></button>
    </>
  )
}

export default About