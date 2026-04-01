import './globals.css' // Agar ye file nahi hai toh niche wali line check karo
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shuddha Dhara | Zero Waste Grocery',
  description: 'Premium groceries delivered in reusable glass jars. No plastic, just purity.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
