'use client'

import { Alert, Typography } from '@material-tailwind/react'
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { Fragment } from 'react'

interface ToastProps {
  message: string
  openToast: boolean
  setOpenToast: (openToastSuccess: boolean) => void
}

export const ToastSucess = ({ message, openToast, setOpenToast }: ToastProps) => {
  setTimeout(() => {
    setOpenToast(false)
  }, 3000)

  return (
    <div className='fixed right-0 top-[115px] z-[999]'>
      <Fragment>
        <Alert
          open={openToast}
          color='green'
          className='max-w-screen-md'
          icon={<CheckCircleIcon className='mt-px h-6 w-6' />}
          onClose={() => setOpenToast(false)}
        >
          <Typography variant='h5' color='white'>
            Parabéns!
          </Typography>
          <Typography color='white' className='mt-2 font-normal'>
            {message}
          </Typography>
        </Alert>
      </Fragment>
    </div>
  )
}


export const ToastError = ({ message, openToast, setOpenToast }: ToastProps) => {
  setTimeout(() => {
    setOpenToast(false)
  }, 3000)

  return (
    <div className='fixed right-0 top-[115px] z-[999]'>
      <Fragment>
        <Alert
          open={openToast}
          color='red'
          className='max-w-screen-md'
          icon={<ExclamationCircleIcon className='mt-px h-6 w-6' />}
          onClose={() => setOpenToast(false)}
        >
          <Typography variant='h5' color='white'>
            Oppss!
          </Typography>
          <Typography color='white' className='mt-2 font-normal'>
            {message}
          </Typography>
        </Alert>
      </Fragment>
    </div>
  )
}
