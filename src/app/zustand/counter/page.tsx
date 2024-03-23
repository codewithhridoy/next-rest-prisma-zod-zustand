'use client'
import { useEffect } from 'react'
import { Button, PrimaryLink } from '@/v1.0/components/ui'
import { useCounterStore } from '@/v1.0/hooks/zustand'

const Counter = () => {
  const { count, incrementCount, decrementCount, resetCount } = useCounterStore()

  // To Reset Store when leaving the parent component (unmount).
  useEffect(() => {
    return () => {
      resetCount()
    }
  }, [resetCount])

  return (
    <>
      <section className={'container mt-4'}>
        <PrimaryLink href='/zustand'>Back To Zustand</PrimaryLink>

        <div className={'flex gap-4 mt-3'}>
          <div className='flex flex-col gap-2 my-2 w-[100px]'>
            <Button onClick={incrementCount}>Increment</Button>
            <Button onClick={decrementCount} disabled={count <= 0}>
              Decrement
            </Button>
            <Button onClick={resetCount} variant={'destructive'}>
              Reset
            </Button>
          </div>

          <p className={'leading-loose flex items-center gap-2 font-medium'}>
            Count: <strong className={'text-2xl text-red-500'}>{count}</strong>
          </p>
        </div>
      </section>
    </>
  )
}

export default Counter
