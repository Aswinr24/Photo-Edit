import { Outfit } from 'next/font/google'
import './globals.css'

const inter = Outfit({ subsets: ['latin'], weight: ['500'] })

export const metadata = {
  title: 'SmartAriser',
  description: 'Celebrations with your Branding!',
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: 'icon.ico',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
