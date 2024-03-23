import React from 'react'
import Image, { ImageProps } from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface BlurImageProps extends ImageProps {
  src: string | StaticImport
  alt: string
}

export const BlurImage = ({ src, alt, ...rest }: BlurImageProps) => {
  return (
    <>
      <div className='after:content after:shadow-highlight group relative mb-5 block w-full rounded-lg bg-slate-100 bg-cover after:pointer-events-none after:absolute after:inset-0 after:rounded-lg dark:bg-slate-800'>
        <Image
          className='w-full h-auto scale-100 transform rounded-lg bg-zinc-200 blur-0 duration-200 will-change-auto hover:brightness-90  dark:bg-zinc-200/[15%]'
          src={src}
          alt={alt}
          sizes='(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw'
          {...rest}
        />
      </div>
    </>
  )
}
