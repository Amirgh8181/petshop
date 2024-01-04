import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import '../assests/styles/globals.css'

const jost=Jost({
  subsets:['latin'],
  preload:true,
  variable: '--font-jost',
  fallback:['system-ui', 'sans']
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
      <body className={jost.className}>
        {children}
      </body>
    </html>
  )
}
