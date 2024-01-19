import { Hero, CustomFilter, SearchBar } from '@/components'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="overflow-hidden flex flex-col items-stretch">
      <div className='bg-light-green flex h-screen flex-col items-center justify-between lg:py-24 -m-16'>
        <Hero />
      </div>
      <div className='mt-14 px-10 py-5 border-black border-2 flex flex-col items-start mx-auto w-full lg:w-4/5 sm:py-10 lg:py-16 '>
        <div className='inline-block border-2 border-black max-w-7xl'>
          <h1 className='text-xl sm:text-2xl font-extrabold'>Catalogue produits</h1>
          <p className='font-serif text-sm text-gray-500 mt-2'>Explorez la liste de nos produits</p>
        </div>
        <div className='flex flex-row-1 flex-wrap sm:flex-row sm:flex-nowrap  justify-between w-full mt-3 '>
          <div className='basis-1/2'>
            <SearchBar />
          </div>

          <div className='basis-1/4 md:flex  justify-between w-full'>
            <CustomFilter />
            <CustomFilter />
          </div>

        </div>
      </div>
    </main >
  )
}
