import React from 'react'
import Link from 'next/link'

import Card from './components/Card'
const App = () => {
console.log('my first server component');



  return (


  
    <>
<Card title='hello'/>    
    <h1   className='text-center border-l box-border m-24  '>hello world</h1>
    <div className='text-center'>
    <button className='btn btn-primary' ><Link href={'about'}>About</Link></button><br /><br />
    <button className='btn btn-primary'><Link href={'contact'}>Contact</Link></button><br /><br />
    <button className='btn btn-primary'><Link href={'person'}>Person</Link></button><br /><br />
    <button className='btn btn-primary '><Link href={'product'}>Product</Link></button><br /><br />
    <button className='btn btn-primary'><Link href={'Meme '}> Meme</Link></button>
    </div>
    </>
  )
}

export default App