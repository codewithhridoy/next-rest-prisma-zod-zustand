import React from 'react'
import Link from 'next/link'
import { LoadingImage } from '@/v1/@core'

import halftoneImg from '/public/assets/images/halftone-background-with-circles.jpg'

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
      </main>
    </>
  )
}

export default Home
