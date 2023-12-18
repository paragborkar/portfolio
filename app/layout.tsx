import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Parag | Personal Portfolio',
  description: 'Parag is a FullStack Developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
        <div className='bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25]
         w-[31.25rem] rounded-full -z-10 blur-[10rem] sm:w-[68.5rem]'></div>
          <div className='bg-[#dbd7fb] absolute top-[-1rem] left-[35rem] h-[31.25]
         w-[50rem] rounded-full -z-10 blur-[10rem] sm:w-[68.5rem] md:left-[-33rem] lg:left-[-28rem]
         xl:left-[-15] 2xl:left[-5rem]'></div>
        {children}</body>
    </html>
  )
}
