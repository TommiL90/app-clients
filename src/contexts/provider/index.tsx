'use client'

import { createContext, useEffect, useState } from 'react'
import { iChildrenProps, iContext, iUser } from './types'
import { useRouter } from 'next/navigation'
import api from '@/services/api'
import { tLoginFormSchema, tRegisterFormSchema } from '@/schemas'

export const Context = createContext({} as iContext)

export const ContextProvider = ({ children }: iChildrenProps) => {
  const [loading, setLoading] = useState(false)
  const [openToastSuccess, setOpenToastSuccess] = useState(false)
  const [openToastError, setOpenToastError] = useState(false)
  const [user, setUser] = useState({} as iUser)
  const router = useRouter()

  const loginUser = async (data: tLoginFormSchema): Promise<void> => {
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

  const userRegister = async (data: tRegisterFormSchema) => {
    try {
      setLoading(true)
      await api.post('/users/register', data)
      setOpenToastSuccess(true)
      setTimeout(() => {
        router.push('/login')
      }, 3000)
    } catch (error) {
      console.log(error)
      setOpenToastError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const accessToken = localStorage.getItem('@Clients:token')

        if (!accessToken) {
          router.push('/login')
          throw new Error('Access Token not found')
        }

        const response = await api.get<iUser>('/users/user', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        setUser(response.data)
      } catch (error) {
        console.log(error)
        router.push('/login')
        throw new Error('Retrieve Contacts failed')
      }
    })()
  }, [router, setUser])

  return (
    <Context.Provider
      value={{
        loginUser,
        loading,
        openToastSuccess,
        setOpenToastSuccess,
        openToastError,
        setOpenToastError,
        userRegister,
        user,
      }}
    >
      {children}
    </Context.Provider>
  )
}
