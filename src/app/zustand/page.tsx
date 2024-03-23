import { PrimaryLink } from '@/v1.0/components/ui'

const Zustand = () => {
  return (
    <div className='mt-6 flex justify-center gap-4'>
      <PrimaryLink href='/'>Back To Home</PrimaryLink>
      <PrimaryLink href='/zustand/person'>Person</PrimaryLink>
      <PrimaryLink href='/zustand/counter'>Counter</PrimaryLink>
    </div>
  )
}

export default Zustand
