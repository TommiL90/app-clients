import { ContextProvider } from '@/contexts/provider'
import '../styles/globals.css'
// eslint-disable-next-line camelcase
import { Roboto_Flex } from 'next/font/google'

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
  return (
    <html lang='pt-Br'>
      <body className={roboto.className}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  )
}
