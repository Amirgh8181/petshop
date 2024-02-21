'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'
import { CgDanger } from "react-icons/cg";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  const router = useRouter()


  return (
    <div className='relative w-full min-h-screen'>
      <div className='absolute z-20 w-full h-screen top-0 p-12 flex items-center justify-center text-white'>
        <div className='flex flex-col justify-center items-center space-y-8 rounded-lg bg-red-500/70 hover:bg-red-500/90 p-10 mx-auto transition-all duration-400'>
          <div className='animate-bounce text-7xl'>
            <CgDanger className='text-red-900' />
          </div>
          <h2 className='text-xl text-ellipsis overflow-hidden whitespace-nowrap w-[70vw]'>{error.message}</h2>
          <div className='space-x-6'>
            <button
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
              className='md:px-6 md:py-3 md:text-xl p-2 rounded-lg text-red-600 bg-white  hover:bg-red-600 hover:text-white transition-all duration-400'
            >
              Try again
            </button>
            <button
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => router.push('/')
              }
              className='md:px-6 md:py-3 md:text-xl p-2 rounded-lg text-red-600 bg-white hover:bg-red-600 hover:text-white transition-all duration-400'
            >
              go to home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}