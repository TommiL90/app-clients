'use client'

import { Dispatch, Fragment, SetStateAction, useContext } from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tooltip,
  IconButton,
} from '@material-tailwind/react'
import { InputAlt } from '../Input'
import { PencilIcon } from '@heroicons/react/24/solid'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import Spinner from '../Spinner'
import { ToastError, ToastSucess } from '../Toast'
import { iPhone } from '@/contexts/ContactsContext/types'
import { ContactContext } from '@/contexts/ContactsContext'
import { tUpdateContactFormSchema, updateContactFormSchema } from '@/schemas'

interface IModalEditContact {
  idContact: number
  name: string
  email: string
  phones: iPhone[]
  registrationDate: string
  openModalEdit: boolean
  setOpenModalEdit: Dispatch<SetStateAction<boolean>>
}

const ModalEditContact = ({ name, idContact, email, phones, openModalEdit, setOpenModalEdit }: IModalEditContact) => {
  const {
    editContact,
    loading,
    openToastSuccess,
    openToastError,
    setOpenToastSuccess,
    setOpenToastError,
  } = useContext(ContactContext)

  const handleOpen = () => setOpenModalEdit(!openModalEdit)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<tUpdateContactFormSchema>({
    resolver: zodResolver(updateContactFormSchema),
  })

  const submit: SubmitHandler<tUpdateContactFormSchema> = async (formData) => {
    const formatedData = {
      name: formData.name,
      email: formData.email,
      phones: [
        { ...phones[0], phone: formData.phone },
        { ...phones[1], phone: formData.phoneAlt },
      ],
    }
    await editContact(formatedData, idContact)
    handleOpen()
    reset()
  }

  return (
    <>
      <Fragment>
        <Tooltip content='Edit User'>
          <IconButton variant='text' color='blue-gray' onClick={handleOpen}>
            <PencilIcon className='h-4 w-4' />
          </IconButton>
        </Tooltip>

        <Dialog open={openModalEdit} handler={handleOpen} size='xl'>
          <DialogHeader>Editar contato</DialogHeader>
          <form onSubmit={handleSubmit(submit)}>
            <DialogBody divider>
              <InputAlt
                label='Nome'
                type='text'
                disabled={loading}
                defaultValue={name}
                {...register('name')}
                error={errors.name}
              />
              <InputAlt
                label='Email'
                type='email'
                disabled={loading}
                defaultValue={email}
                {...register('email')}
                error={errors.email}
              />
              <InputAlt
                label='Telefone'
                type='tel'
                disabled={loading}
                defaultValue={phones[0].phone}
                {...register('phone')}
                error={errors.phone}
              />
              <InputAlt
                label='Telefone alternativo'
                type='tel'
                disabled={loading}
                defaultValue={phones[1].phone}
                {...register('phoneAlt')}
                error={errors.phoneAlt}
              />
            </DialogBody>
            <DialogFooter>
              <Button variant='text' color='red' onClick={handleOpen} className='mr-1'>
                Cancelar
              </Button>
              <Button variant='gradient' color='green' type='submit'>
                {loading ? <Spinner /> : 'Editar'}
              </Button>
            </DialogFooter>
          </form>
          <ToastError
            message='Aconteceu alguma coisa errada, tente novamente daqui a pouco'
            openToast={openToastError}
            setOpenToast={setOpenToastError}
          />
        </Dialog>
        <ToastSucess
          message='Contato editado com suceso'
          openToast={openToastSuccess}
          setOpenToast={setOpenToastSuccess}
        />
      </Fragment>
    </>
  )
}

export default ModalEditContact
