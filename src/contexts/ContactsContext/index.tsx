'use client'

import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  iChildrenProps,
  iContact,
  iContactContext,
  iDataAddContact,
  iDataEditContact,
} from './types'
import api from '@/services/api'

export const ContactContext = createContext({} as iContactContext)

export const ContactProvider = ({ children }: iChildrenProps) => {
  const [loading, setLoading] = useState(false)
  const [openToastSuccess, setOpenToastSuccess] = useState(false)
  const [openToastError, setOpenToastError] = useState(false)
  const [contacts, setContacts] = useState<iContact[]>([])

  const router = useRouter()

  useEffect(() => {
    (async () => {
      try {
        const accessToken = localStorage.getItem('@Clients:token')
        const response = await api.get<iContact[]>('/contacts', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        setContacts((prevContacts) => [...prevContacts, ...response.data])
      } catch (error) {
        console.log(error)
        router.push('/login')
        throw new Error('Retrieve Contacts failed')
      }
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addContact = async (data: iDataAddContact) => {
    const accessToken = localStorage.getItem('@Clients:token')

    try {
      setLoading(true)
      const response = await api.post<iContact>('/contacts', data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      setContacts((prev) => [...prev, response.data])
    } catch (error) {
      console.log(error)

      setOpenToastError(true)
    } finally {
      setLoading(false)
    }
  }

  const editContact = async (data: iDataEditContact, idContact: number) => {
    const accessToken = localStorage.getItem('@Clients:token')

    try {
      setLoading(true)
      const response = await api.patch<iContact>(`/contacts/${idContact}`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      setContacts((prevEstate) => {
        const filteredContacts = prevEstate.filter((contact) => contact.id !== idContact)
        const updatedContact = prevEstate.find((contact) => contact.id === idContact)
        if (updatedContact) {
          return [...filteredContacts, { ...response.data }]
        }
        return filteredContacts
      })
      setOpenToastSuccess(true)
    } catch (error) {
      console.log(error)
      setOpenToastError(true)
      throw new Error('EditContact failed')
    } finally {
      setLoading(false)
    }
  }

  const deleteContact = async (idContact: number) => {
    const accessToken = localStorage.getItem('@Clients:token')

    try {
      await api.delete(`/contacts/${idContact}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      console.log('DeleteContact', idContact)
      return
    } catch (error) {
      console.log(error)
      throw new Error('DeleteContact failed')
    }
  }

  const retrieveContacts = async () => {
    const accessToken = localStorage.getItem('@Clients:token')

    try {
      const response = await api.get<iContact[]>('/contacts', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return response.data
    } catch (error) {
      console.log(error)
      throw new Error('Retrieve Contacts failed')
    }
  }

  return (
    <ContactContext.Provider
      value={{
        loading,
        openToastSuccess,
        openToastError,
        setOpenToastError,
        setOpenToastSuccess,
        contacts,
        addContact,
        editContact,
        deleteContact,
        retrieveContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}
