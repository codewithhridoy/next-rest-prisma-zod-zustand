'use client'
import { useCounterStore } from '@/v1/hooks/zustand'
import Link from 'next/link'

const Counter = () => {
  const { count, incrementCount, decrementCount, resetCount } = useCounterStore()

  return (
    <>
      <div>
        <Link href='/zustand'>Back To Zustand</Link>

        <div className='flex gap-2 my-2'>
          <button onClick={incrementCount} className='border px-2 rounded'>
            Increment
          </button>
          <button onClick={decrementCount} className='border px-2 rounded'>
            Decrement
          </button>
          <button onClick={resetCount} className='border px-2 rounded'>
            Reset
          </button>
        </div>

        <p>Count: {count}</p>
      </div>
    </>
  )
}

export default Counter
