import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa6'

const Header = () => {
  return (
    <div className='mx-auto max-w-3xl sticky top-0 z-10'>
      <header className='bottom-0 static flex justify-end items-center py-1'>
        <button className='py-4 px-2 sm:py-5 flex items-center gap-4 outline-none'>
          <div className='text-2xl  text-slate-700'><FaSun /></div>
          <div className='text-2xl hidden dark:block text-slate-100'><FaMoon /></div>
        </button>
      </header>
    </div>
  )
}

export default Header
