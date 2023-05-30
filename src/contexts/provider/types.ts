import { tLoginFormSchema } from '@/schemas'
import { Dispatch, SetStateAction } from 'react'

export interface iContext {
  loginUser: (data: tLoginFormSchema) => Promise<void>
  loading: boolean
  openToastSuccess: boolean
  setOpenToastSuccess: Dispatch<SetStateAction<boolean>>
  openToastError: boolean
  setOpenToastError: Dispatch<SetStateAction<boolean>>
}

export interface iChildrenProps {
  children: React.ReactNode
}
