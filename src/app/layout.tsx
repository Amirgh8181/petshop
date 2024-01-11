import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/assests/styles/globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { NextAuthProvider } from '@/providers/next-auth'
import { NextUiProviders } from '@/providers/next-ui'

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
        <NextAuthProvider>
          <NextUiProviders>
            <nav>
              <NavBar />
            </nav>
            <main className='pt-16'>
              {children}
            </main>
            <footer className=' pt-12'>
              <Footer />
            </footer>
          </NextUiProviders>
        </NextAuthProvider>
      </body>
    </html>
  )
}
