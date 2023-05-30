'use client'
import Table from '@/components/Table'
import { ContactContext } from '@/contexts/ContactsContext'
import dynamic from 'next/dynamic'
import { Suspense, useContext, useState } from 'react'
import { UserPlusIcon } from '@heroicons/react/24/outline'
import { ButtonPrimary } from '@/components/Buttons'


const DinamicAddContactModal = dynamic(() => import('../../components/Modal/ModalAddContact'), {
    ssr: false,
  })
  
  export default function Home() {
    const [open, setOpen] = useState(false)
    const { contacts } = useContext(ContactContext)
  
    const handleOpen = () => setOpen(!open)
    return (
      <>
        {/* <NavBar /> */}
  
        <main className='container p-7'>
          <section>
            <h2 className='mb-6 block font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-inherit antialiased'>
              Gerenciamento de Contatos
            </h2>
          </section>
          <section className='mb-6 flex h-full w-full items-center justify-end'>
            <ButtonPrimary onClick={handleOpen}>
              <p className='g-4 flex items-center justify-center'>
                <span className='text-white'>Adicionar Contato</span>{' '}
                <UserPlusIcon className='h-6 w-6 text-white' />
              </p>{' '}
            </ButtonPrimary>
            <DinamicAddContactModal open={open} handleOpen={handleOpen}/>
          </section>
          <section className='flex h-full w-full flex-col items-center justify-center'>
            <Suspense fallback={<p>Loading</p>}>
              <Table
                contacts={contacts}
              />
            </Suspense>
          </section>
        </main>
      </>
    )
  }
  