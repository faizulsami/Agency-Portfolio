import { Inter } from 'next/font/google'
import './globals.css'
import {Raleway} from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

const raleway = Raleway({
  subsets: ['latin'],
  variable:"--font-raleway",
})

export const metadata = {
  title: 'CraFlex',
  description: 'CRAFT WEBSITES FOR BUSINESS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.variable}>{children}</body>
    </html>
  )
}
