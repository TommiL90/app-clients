'use client'

import { Fragment, useContext } from 'react'
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react'
import { Input } from '../Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ToastError, ToastSucess } from '../Toast'
import Spinner from '../Spinner'
import { registerContactFormSchema, tRegisterContactFormSchema } from '@/schemas'
import { ContactContext } from '@/contexts/ContactsContext'

interface IModalAddContact {
  open: boolean
  handleOpen: () => void
}

const ModalAddContact = ({ open, handleOpen }: IModalAddContact) => {
  const {
    addContact,
    loading,
    openToastSuccess,
    setOpenToastSuccess,
    openToastError,
    setOpenToastError,
  } = useContext(ContactContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<tRegisterContactFormSchema>({
    resolver: zodResolver(registerContactFormSchema),
  })

  const submit: SubmitHandler<tRegisterContactFormSchema> = async (formData) => {
    const formatedData = {
      name: formData.name,
      email: formData.email,
      phones: [formData.phone, formData.phoneAlt ? formData.phoneAlt : formData.phone],
    }
    await addContact(formatedData)
    reset
  }

  return (
    <Fragment>
      <Dialog open={open} handler={handleOpen}>
        <form onSubmit={handleSubmit(submit)}>
          <DialogHeader>Adicionar Contacto</DialogHeader>
          <DialogBody divider>
            <div className='flex flex-col gap-6'>
              <Input
                label='Nome'
                type='text'
                disabled={loading}
                {...register('name')}
                error={errors.name}
              />
              <Input
                label='Email'
                type='email'
                disabled={loading}
                {...register('email')}
                error={errors.email}
              />
              <Input
                label='Telefone'
                type='tel'
                disabled={loading}
                {...register('phone')}
                error={errors.phone}
              />
              <Input
                label='Telefone alternativo'
                type='tel'
                disabled={loading}
                {...register('phoneAlt')}
                error={errors.phoneAlt}
              />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant='text' color='red' onClick={handleOpen} className='mr-1'>
              <span>Cancelar</span>
            </Button>
            <Button type='submit' variant='gradient' color='green'>
              <span>{loading ? <Spinner /> : 'Adicionar'}</span>
            </Button>
          </DialogFooter>
          <ToastSucess
            message='Contato adicionado com sucesso'
            openToast={openToastSuccess}
            setOpenToast={setOpenToastSuccess}
          />
          <ToastError
            message='Email já cadastrado, tente de novo'
            openToast={openToastError}
            setOpenToast={setOpenToastError}
          />
        </form>
      </Dialog>
    </Fragment>
  )
}

export default ModalAddContact
