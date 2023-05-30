'use client'
import { Fragment, useState } from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Tooltip,
  IconButton,
} from '@material-tailwind/react'
import { BellIcon } from '@heroicons/react/24/solid'
import { TrashIcon } from '@heroicons/react/24/outline'

interface ModalAlertProps {
  handleDeleteContact: (id: number) => void
  idContact: number
}

const ModalDeleteContact = ({ handleDeleteContact, idContact }: ModalAlertProps) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(!open)

  const handleMultiFunctions = () => {
    handleDeleteContact(idContact)
    handleOpen()
  }
  return (
    <Fragment>
      <Tooltip content='Edit User'>
        <IconButton variant='text' color='blue-gray' onClick={handleOpen}>
          <TrashIcon className='h-4 w-4' />
        </IconButton>
      </Tooltip>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <Typography variant='h5' color='blue-gray'>
            Atentção
          </Typography>
        </DialogHeader>
        <DialogBody divider className='grid place-items-center gap-4'>
          <BellIcon className='h-16 w-16 text-red-500' />
          <Typography color='red' variant='h4'>
            Precisa confirmar
          </Typography>
          <Typography className='text-center font-normal'>
            se apagar o contato, será eliminado do banco de dados permanentemente
          </Typography>
        </DialogBody>
        <DialogFooter className='space-x-2'>
          <Button variant='text' color='blue-gray' onClick={handleOpen}>
            Cancelar
          </Button>
          <Button variant='gradient' onClick={handleMultiFunctions}>
            Confirmar
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  )
}

export default ModalDeleteContact
