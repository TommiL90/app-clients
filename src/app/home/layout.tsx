import { ContactProvider } from '@/contexts/ContactsContext'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ContactProvider>{children}</ContactProvider>
      </body>
    </html>
  )
}
