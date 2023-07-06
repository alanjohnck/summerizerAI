import React from 'react'
import {logo} from "../assets"
function Hero() {
  return (
    <header className='w-full flex justify-center items-center flex-col' >
        <nav className='flex justify-between items-center w-full mb-10 pt-2 '>
         <img src={logo} alt='summz_logo' className='w-28 object-contain'></img>
        </nav>
        <h1 className='head_text'>
        Summarize Articles with<br className='max-md:hidden' />
        <span className='orange_gradient'> Open AI GPT-4</span>
        </h1>
        <h2 className='desc'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </h2>
    </header>
  )
}

export default Hero