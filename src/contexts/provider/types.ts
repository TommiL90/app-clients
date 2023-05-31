import { tLoginFormSchema, tRegisterFormSchema } from '@/schemas'
import { Dispatch, SetStateAction } from 'react'

export interface iUser {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}

export interface iContext {
  loginUser: (data: tLoginFormSchema) => Promise<void>
  loading: boolean
  openToastSuccess: boolean
  setOpenToastSuccess: Dispatch<SetStateAction<boolean>>
  openToastError: boolean
  setOpenToastError: Dispatch<SetStateAction<boolean>>
  userRegister: (data: tRegisterFormSchema) => Promise<void>
  user: iUser
}

export interface iChildrenProps {
  children: React.ReactNode
}

