import type { Metadata } from 'next'
import { Footer, NavBar } from '@/components'
import './globals.css'





export const metadata: Metadata = {
  title: 'Next Frutas',
  description: 'Commandez vos fruits et légumes directement chez Next-frutas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
