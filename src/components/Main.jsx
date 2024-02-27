import React from 'react'
import ivan from '../assets/ivan.png'

// Icons
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Main = () => {
  return (
    <div className='mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10'>
      <main className='flex flex-col gap-16'>
        <section className='flex flex-col sm:flex-row items-center gap-5'>
          <div className='relative w-44 h-44 border-8 shadow-lg rounded-full overflow-hidden'>
            <span className='box-border block overflow-hidden bg-none opacity-1 border-0 m-0 p-0 top-0 left-0 bottom-0 right-0 absolute'>
              <img
                alt='avatar'
                sizes='100vw'
                src={ivan}
                className='rounded-full drop-shadow-2xl absolute box-border border-none m-auto block min-w-[100%] max-w-[100%] min-h-[100%] max-h-[100%] object-cover'
              />
            </span>
          </div>
          <div className='flex flex-col items-center sm:items-start gap-3'>
            <div className='flex flex-col items-left gap-2'>
              <h1 class='font-Lora text-2xl sm:text-4xl text-center sm:text-left font-bold text-slate-600 m-0'>Iván Guerrero</h1>
              <p className=' text-slate-600 text-sm sm:text-lg rounded-2xl max-w-xl font-Lora font-medium m-0'>I'm a passionate web development.</p>
            </div>
            <div className='flex gap-3'>
              <a target='_blank' className='flex items-center text-base text-[#0284C7] font-Lora gap-3 bg-indigo-100 py-2 px-4 rounded-xl h-6 font-bold border-2 hover:cursor-pointer hover:shadow-social'>
                <FaLinkedin className='text-[#0284C7]' /> Linkedin
              </a>
              <a className='flex items-center text-base font-Lora gap-3 bg-indigo-100 text-[#0284C7] py-2 px-4 rounded-xl h-6 font-bold hover:cursor-pointer border-4 hover:border-8 hover:shadow-social'>
                <FaGithub className='text-[#0284C7]' /> Github
              </a>
            </div>
          </div>
        </section>
        <hr className='border border-dotted border-gray-300 rounded-md w-full' />
      </main>
    </div>

  )
}

export default Main
