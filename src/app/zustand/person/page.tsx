'use client'
import { usePersonStore } from '@/v1.0/hooks/zustand'
import { Button, Input, PrimaryLink } from '@/v1.0/components/ui'

const Person = () => {
  const { firstName, lastName, updateFirstName, updateLastName } = usePersonStore()

  return (
    <>
      <section className={'container mt-4'}>
        <PrimaryLink href='/zustand'>Back To Zustand</PrimaryLink>
        <form className={'border rounded-lg p-4 my-4 space-y-2 max-w-[300px]'}>
          <div className=''>
            <label className='' htmlFor='firstName'>
              First name
            </label>
            <Input
              id='firstName'
              className='text-black max-w-[275px]'
              placeholder={'John'}
              value={firstName}
              onChange={e => updateFirstName(e.currentTarget.value)}
            />
          </div>
          <div className=''>
            <label className='w-[100px]' htmlFor='lastName'>
              Last name
            </label>
            <Input
              id='lastName'
              className='text-black max-w-[275px] mb-2'
              placeholder={'Doe'}
              value={lastName}
              onChange={e => updateLastName(e.currentTarget.value)}
            />
          </div>

          <Button type={'submit'}>Submit</Button>
        </form>

        {(!!firstName || !!lastName) && (
          <p className={''}>
            Your Name is{' '}
            <strong className={'text-orange-500'}>
              {firstName} {lastName}
            </strong>
          </p>
        )}
      </section>
    </>
  )
}

export default Person
