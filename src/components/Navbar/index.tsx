import Link from 'next/link'
import MenuComponent from '../Menu'

const NavBar = () => {
  return (
    <nav className='sticky inset-0 z-10 block h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 px-4 py-2 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4'>
      <div className='flex items-center justify-between text-gray-900'>
        <Link href={'/home'}>
          <h2 className='mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased'>
            Clients Hub
          </h2>
        </Link>

        <MenuComponent />
      </div>
    </nav>
  )
}

export default NavBar
