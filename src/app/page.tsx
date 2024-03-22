import React from 'react'
import { BlurImage, PrimaryLink } from '@/v1/components/ui'

const Home = () => {
  return (
    <>
      <main className={'h-[100dvh]'}>
        <section id={'project-covers'} className={'flex justify-center gap-6 mt-4 lg:mt-6'}>
          <PrimaryLink href={'#'}>REST</PrimaryLink>
          <PrimaryLink href={'#'}>Prisma</PrimaryLink>
          <PrimaryLink href={'#'}>Zod</PrimaryLink>
          <PrimaryLink href={'/zustand'}>Zustand</PrimaryLink>
          <PrimaryLink href={'#'}>Superbase</PrimaryLink>
        </section>

        <div className={'px-4 container mx-auto grid lg:grid-cols-4 gap-4 py-10'}>
          <BlurImage
            src={
              'https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
            alt={'Pexel Image'}
            width={600}
            height={600}
          />

          <BlurImage
            src={
              'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
            alt={'Pexel Image'}
            width={600}
            height={600}
          />
          <BlurImage
            src={
              'https://images.pexels.com/photos/775203/pexels-photo-775203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
            alt={'Pexel Image'}
            width={600}
            height={600}
          />
          <BlurImage
            src={
              'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
            alt={'Pexel Image'}
            width={600}
            height={600}
          />
        </div>
      </main>
    </>
  )
}

export default Home
