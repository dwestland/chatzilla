import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import AuthBar from '@/components/AuthBar'
import Footer from '@/components/Footer'
import Container from '@/components/Container'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chattastic',
  description:
    'Empower your website with AI-driven customer service chat bot for health, fitness, and beauty sites. Boost engagement and promote your services seamlessly.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <body className={`${inter.className} container m-auto`}> */}
        <Navbar />
        <AuthBar />
        {children}
        {/* <div className="fixed bottom-0 m-auto border border-green-400"> */}
        <Footer />
        {/* </div> */}
      </body>
    </html>
  )
}
