'use client'
import { checkUserAuthenticated } from '@/functions/functions/checkUserAuthenticated'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

interface IPrivateRouteProps {
  children: ReactNode
}

const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const { push } = useRouter()

  const isUserAuthenticated = checkUserAuthenticated()

  useEffect(() => {
    if (!isUserAuthenticated) {
      push('/login')
    }
  }, [isUserAuthenticated, push])

  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  )
}

export default PrivateRoute
