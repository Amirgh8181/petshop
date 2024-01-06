import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/assests/styles/globals.css'
import NavBar from '@/components/NavBar'

const roboto = Roboto({
  weight: ["100", '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'PetShop',
  description: 'This website is an educational and store website',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/logo/logo-text-black.png',
        href: '/images/logo/logo-text-black.png',
      },
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${roboto.className} bg-petBg text-black`}>
        <nav>
          <NavBar/>
        </nav>
        <main className='mt-8 pt-12'>
          {children}
        </main>
      </body>
    </html>
  )
}
