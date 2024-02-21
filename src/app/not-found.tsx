import Image from 'next/image';
import Link from 'next/link'

export default function NotFound() {

  return (
    <div className='flex flex-col items-center w-full min-h-screen md:space-y-4 space-y-2 pt-4'>
      <h1 className='md:text-7xl text-2xl'>
        404 page-not-found
      </h1>
      <Image src={'/images/NotFound/not-found.gif'} quality={100} priority={true} alt='error bg' width={800} height={800} className='w-[70vw] h-[60vh]' />
      <div>
        <Link
          href={'/'}
          className='md:px-6 md:py-3 md:text-xl p-2 rounded-lg border border-blue-500 text-white bg-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-400'
        >
          back to home
        </Link>
      </div>
    </div>
  )
}