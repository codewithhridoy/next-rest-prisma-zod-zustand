import React from 'react'
import Link from 'next/link'
import { BlurImage } from '@/v1/@core'
import Image from 'next/image'

const LinkClasses = 'border-b-2 border-blue-500 text-blue-500 hover:text-blue-700 hover:border-blue-700'

const Home = () => {
  return (
    <>
      <main className={'h-[100dvh]'}>
        <section id={'project-covers'} className={'flex justify-center gap-6 mt-4 lg:mt-6'}>
          <Link href={'#'} className={LinkClasses}>
            REST
          </Link>
          <Link href={'#'} className={LinkClasses}>
            Prisma
          </Link>
          <Link href={'#'} className={LinkClasses}>
            Zod
          </Link>
          <Link href={'#'} className={LinkClasses}>
            Zustand
          </Link>
          <Link href={'#'} className={LinkClasses}>
            Superbase
          </Link>
        </section>

        <div className={'container mx-auto grid grid-cols-5 gap-4 py-10'}>
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
              'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
