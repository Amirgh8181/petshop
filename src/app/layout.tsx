import type { Metadata } from 'next'
import '@/assests/styles/globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { NextAuthProvider } from '@/providers/next-auth'
import { NextUiProviders } from '@/providers/next-ui'


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
      <body className='font-roboto bg-petBg text-black'>
        <NextAuthProvider>
          <NextUiProviders>
            <NavBar />
            <main className='pt-16 min-h-screen w-full'>
              <div className='container mx-auto'>
                {children}
              </div>
            </main>
            <Footer />
          </NextUiProviders>
        </NextAuthProvider>
      </body>
    </html>
  )
}
