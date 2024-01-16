import { Hero } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-light-green flex h-screen flex-col items-center justify-start lg:py-24 border-2 border-black">
        <Hero/>
    </main>
  )
}
