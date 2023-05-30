'use client'

import { createContext, useState } from 'react'
import { iChildrenProps, iContext } from './types'
import { useRouter } from 'next/navigation'
import api from '@/services/api'
import { tLoginFormSchema } from '@/schemas'

export const Context = createContext({} as iContext)

export const ContextProvider = ({ children }: iChildrenProps) => {
        const [loading, setLoading] = useState(false)
        const [openToastSuccess, setOpenToastSuccess] = useState(false)
        const [openToastError, setOpenToastError] = useState(false)
        const router = useRouter()

        const loginUser = async (
            data: tLoginFormSchema,
          ): Promise<void> => {
            try {
              setLoading(true)
              const response = await api.post('/users/login', data)
              const token = response.data.token
          
            //   api.defaults.headers.common['Authorization'] = `Bearer ${token}`
              localStorage.setItem('@Clients:token', token)
              router.push('/home')
            } catch (error) {
              console.log(error)
              setLoading(false)
              setOpenToastError(true)
            } finally {
              setLoading(false)
            }
          }

  return <Context.Provider value={{ loginUser, loading,  openToastSuccess, setOpenToastSuccess, openToastError, setOpenToastError }}>{children}</Context.Provider>
}
