'use client'

import NavBar from '@/components/Navbar'
import { Context } from '@/contexts/provider'
import { useContext } from 'react'

const UserPage = () => {
const {user} = useContext(Context)

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}-${month}-${year}`;
  }
  
  return (
    <>
      <NavBar />
      <main className='container mx-auto p-4'>
        <div className='flex flex-col gap-4 justify-center items-center'>
            <div className='w-96 bg-white shadow-xl rounded-lg'>
              <ul className='list-outside p-4'>
                <li className='flex items-center py-2'>
                  <span className='font-semibold w-32'>ID:</span>
                  <span>{user.id}</span>
                </li>
                <li className='flex items-center py-2'>
                  <span className='font-semibold w-32'>Name:</span>
                  <span>{user.name}</span>
                </li>
                <li className='flex items-center py-2'>
                  <span className='font-semibold w-32'>Email:</span>
                  <span>{user.email}</span>
                </li>
                <li className='flex items-center py-2'>
                  <span className='font-semibold w-32'>Created At:</span>
                  <span>{formatDate(user.createdAt)}</span>
                </li>
              </ul>
            </div>
        </div>
      </main>
    </>
  )
}

export default UserPage
