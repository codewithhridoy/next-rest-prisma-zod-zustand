import Link from 'next/link'

const Zustand = () => {
  return (
    <div className='mt-6 flex justify-center gap-4'>
      <Link href='/'>Back To Home</Link>
      <Link href='/zustand/person'>Person</Link>
      <Link href='/zustand/counter'>Counter</Link>
    </div>
  )
}

export default Zustand
