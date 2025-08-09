import { Inter } from 'next/font/google'
import './globals.css'
import './styles/components.css'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FrostFlow - Professional HVAC Services in GTA',
  description: 'Professional HVAC services in Greater Toronto Area. Installation, repair, and maintenance of heating, cooling, and ventilation systems. Licensed and insured.',
  keywords: 'HVAC, heating, cooling, ventilation, Toronto, GTA, furnace, air conditioning, ductwork',
  authors: [{ name: 'FrostFlow' }],
  creator: 'FrostFlow',
  publisher: 'FrostFlow',
  robots: 'index, follow',
  openGraph: {
    title: 'FrostFlow - Professional HVAC Services in GTA',
    description: 'Professional HVAC services in Greater Toronto Area. Licensed and insured with 24/7 emergency service.',
    url: 'https://frostflow.ca',
    siteName: 'FrostFlow',
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FrostFlow - Professional HVAC Services in GTA',
    description: 'Professional HVAC services in Greater Toronto Area. Licensed and insured with 24/7 emergency service.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}