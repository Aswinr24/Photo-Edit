import Image from 'next/image'
import Navbar from './components/Navbar'

import Listings from './components/Listings'

export default function Home() {
  return (
    <main className="flex-col items-center justify-between p-0 bg-gray-100">
      <Navbar />
      <Listings />
    </main>
  )
}
