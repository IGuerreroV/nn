// Icon
import { FaSun, FaMoon } from 'react-icons/fa6'
// Hooks
import { useEffect, useState } from 'react'

const Header = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('prefers-color-scheme: dark').matches) {
      return 'dark'
    }

    return 'light'
  })

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  return (
    <div className='mx-auto max-w-3xl sticky top-0 z-10'>
      <header className='w-full bottom-0 static flex justify-end items-center py-1 px-5 z-20 bg-white dark:bg-neutral-900 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg'>
        <button
          className='py-4 px-2 sm:py-5 flex items-center gap-4 outline-none bg-white border-none dark:bg-neutral-900'
          onClick={handleChangeTheme}
        >
          <div className='text-2xl text-slate-700 dark:hidden'>
            <FaSun />
          </div>
          <div className='text-2xl hidden dark:block text-slate-100'>
            <FaMoon />
          </div>
        </button>
      </header>
    </div>
  )
}

export default Header
