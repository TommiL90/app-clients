'use client'
import { ContextProvider } from '@/contexts/provider'
import '../styles/globals.css'
// eslint-disable-next-line camelcase
import { Roboto_Flex } from 'next/font/google'
import { checkPageRouteisPublic } from '@/functions/checkPage'
import { usePathname } from 'next/navigation'
import PrivateRoute from '@/components/PrivateRoute'

const roboto = Roboto_Flex({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  style: 'normal',
})

export const metadata = {
  title: 'Clients Hub',
  description: 'A plataforma pra listar e gerenciar os contatos dos seus clientes',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname: string = usePathname()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const isPublicPage = checkPageRouteisPublic(pathname!)
  return (
    <html lang='pt-Br'>
      <body className={roboto.className}>
        {isPublicPage && <ContextProvider>{children}</ContextProvider>}
        {!isPublicPage && (
          <ContextProvider>
            <PrivateRoute>{children}</PrivateRoute>
          </ContextProvider>
        )}
      </body>
    </html>
  )
}
