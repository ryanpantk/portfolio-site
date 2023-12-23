import type { Metadata } from 'next'
import { Inter, Mukta } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter', 
  display: 'swap'})
const mukta = Mukta({
  subsets: ['latin'], 
  variable: '--font-mukta',
  weight: '400',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Ryan Pan',
  description: 'Ryan Pan is a software engineer based in Singapore and this is his personal website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`{${inter.variable} ${mukta.variable}}`}>{children}</body>
    </html>
  )
}
