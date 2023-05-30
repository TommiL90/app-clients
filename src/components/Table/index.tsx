'use client'
import { Card, Typography } from '@material-tailwind/react'
import dynamic from 'next/dynamic'
import { TABLE_HEAD } from '@/constants/table-head'
import { iContact } from '@/contexts/ContactsContext/types'
import { useContext, useState } from 'react'
import { ContactContext } from '@/contexts/ContactsContext'
import { ToastError, ToastSucess } from '../Toast'

interface TableProps {
  contacts: iContact[]
}

const DinamicEditContactModal = dynamic(() => import('../Modal/ModalEditContact'), {
  ssr: false,
})

const DinamicDeleteContactModal = dynamic(() => import('../Modal/ModalDelete'), {
  ssr: false,
})

const Table = ({ contacts }: TableProps) => {
  const [openModalEdit, setOpenModalEdit] = useState(false)
  const {
    deleteContact,
    openToastSuccess,
    setOpenToastSuccess,
    openToastError,
    setOpenToastError,
  } = useContext(ContactContext)

  const handleDeleteContact = async (idContact: number) => {
    deleteContact(idContact)
  }

  return (
    <Card className='h-full w-full overflow-x-auto'>
      <table className='w-full min-w-max table-auto text-left'>
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
                <Typography
                  variant='small'
                  color='blue-gray'
                  className='font-normal leading-none opacity-70'
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {contacts.map(({ id, email, name, phones, registrationDate }, index) => {
            const isLast = index === contacts.length - 1
            const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'
            const formattedDate = new Date(registrationDate).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })
            registrationDate = formattedDate

            return (
              <>
                <tr key={id}>
                  <td className={classes}>
                    <Typography variant='small' color='blue-gray' className='font-normal'>
                      {name}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography variant='small' color='blue-gray' className='font-normal'>
                      {email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant='small' color='blue-gray' className='font-normal'>
                      {phones[0].phone}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant='small' color='blue-gray' className='font-normal'>
                      {phones[1].phone}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant='small' color='blue-gray' className='font-normal'>
                      {registrationDate}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography variant='small' color='blue-gray' className='font-normal'>
                      <DinamicEditContactModal
                        idContact={id}
                        name={name}
                        email={email}
                        phones={phones}
                        registrationDate={registrationDate}
                        openModalEdit={openModalEdit}
                        setOpenModalEdit={setOpenModalEdit}
                      />
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant='small' color='blue-gray' className='font-normal'>
                      <DinamicDeleteContactModal
                        idContact={id}
                        handleDeleteContact={handleDeleteContact}
                      />
                    </Typography>
                  </td>
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
      <ToastSucess
        message='Deu, certo !'
        openToast={openToastSuccess}
        setOpenToast={setOpenToastSuccess}
      />
      <ToastError
        message='Alguma coisa deu errado, tente novamente!'
        openToast={openToastError}
        setOpenToast={setOpenToastError}
      />
    </Card>
  )
}

export default Table
