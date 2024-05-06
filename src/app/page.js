import Navbar from './components/Navbar'
import Listings from './components/Listings'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex-col items-center justify-between p-0 bg-gray-100">
      <Navbar />
      <Listings />
      <Footer />
    </main>
  )
}
