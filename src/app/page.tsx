import React from 'react'
import { PrimaryLink } from '@/v1.0/components/ui'

const Home = () => {
  return (
    <>
      <main className={'h-[100dvh]'}>
        <section id={'project-covers'} className={'flex justify-center gap-6 mt-4 lg:mt-6'}>
          {/*<PrimaryLink href={'#'}>REST</PrimaryLink>*/}
          {/*<PrimaryLink href={'#'}>Prisma</PrimaryLink>*/}
          {/*<PrimaryLink href={'#'}>Zod</PrimaryLink>*/}
          <PrimaryLink href={'/zustand'}>Zustand</PrimaryLink>
        </section>
      </main>
    </>
  )
}

export default Home
