import './globals.css'
import { Poppins } from 'next/font/google'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
})

export const metadata = {
  title: 'Guilheme Rodrigues',
  description: 'Guilherme Rodrigues is a Software Engineer...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
