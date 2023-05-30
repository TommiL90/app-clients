'use client'

import { createContext } from 'react'
import { iChildrenProps, iContext } from './types'

export const Context = createContext({} as iContext)

export const ContextProvider = ({ children }: iChildrenProps) => {
  return <Context.Provider value={{ teste: 'teste' }}>{children}</Context.Provider>
}
