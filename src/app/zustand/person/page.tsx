'use client'
import { usePersonStore } from '@/v1/hooks/zustand'
import Link from 'next/link'

const Person = () => {
  const { firstName, lastName, updateFirstName, updateLastName } = usePersonStore()

  return (
    <>
      <Link href='/zustand'>Back To Zustand</Link>
      <div className='flex gap-2 items-center my-2'>
        <label className='w-[100px]' htmlFor='firstName'>
          First name
        </label>
        <input
          id='firstName'
          className='text-black ml-2'
          onChange={e => updateFirstName(e.currentTarget.value)}
          value={firstName}
        />
      </div>
      <div className='flex gap-2 items-center mb-2'>
        <label className='w-[100px]' htmlFor='lastName'>
          Last name
        </label>
        <input
          id='lastName'
          className='text-black ml-2'
          value={lastName}
          onChange={e => updateLastName(e.currentTarget.value)}
        />
      </div>
      Your Name is {firstName} {lastName}
    </>
  )
}

export default Person
