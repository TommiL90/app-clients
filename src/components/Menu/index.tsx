'use client'

import { Menu, MenuHandler, MenuList, MenuItem, Avatar, Typography } from '@material-tailwind/react'
import { PowerIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const MenuComponent = () => {
  const { push } = useRouter()
  const handleExitAcount = () => {
    localStorage.removeItem('@Clients:token')
    push('/')
  }
  return (
    <Menu>
      <MenuHandler>
        <Avatar
          variant='circular'
          alt='candice wu'
          className='cursor-pointer'
          src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
        />
      </MenuHandler>
      <MenuList>
        <Link href={'/user'}>
          <MenuItem className='flex items-center gap-2'>
            <UserCircleIcon strokeWidth={2} className='h-4 w-4' />
            <Typography variant='small' className='font-normal'>
              Meu perfil
            </Typography>
          </MenuItem>
        </Link>
        <hr className='my-2 border-blue-gray-50' />
        <MenuItem className='flex items-center gap-2 ' onClick={handleExitAcount}>
          <PowerIcon strokeWidth={2} className='h-4 w-4' />
          <Typography variant='small' className='font-normal'>
            Sair da conta
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default MenuComponent
