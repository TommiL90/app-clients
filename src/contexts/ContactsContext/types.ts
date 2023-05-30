import { Dispatch, SetStateAction } from 'react'

export interface iContactContext {
  loading: boolean
  openToastSuccess: boolean
  setOpenToastSuccess: Dispatch<SetStateAction<boolean>>
  openToastError: boolean
  setOpenToastError: Dispatch<SetStateAction<boolean>>
  contacts: iContact[]
  addContact: (data: iDataAddContact) => Promise<void>
  editContact: (data: iDataEditContact, idContact: number) => Promise<void>
  deleteContact: (idContact: number) => Promise<void>
  retrieveContacts: () => Promise<iContact[]>
}

export interface iChildrenProps {
  children: React.ReactNode
}

export interface iPhone {
  id: number
  phone: string
  contactId: number
}
export interface iContact {
  id: number
  name: string
  email: string
  registrationDate: string
  userId: number
  phones: iPhone[]
}

export interface iDataAddContact {
  name: string
  email: string
  phones: string[]
}

export interface iDataEditContact {
  name: string
  email: string
  phones: {
    phone: string | undefined
    id: number
    contactId: number
  }[]
}
