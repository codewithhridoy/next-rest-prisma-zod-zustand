import React, { HTMLAttributes } from 'react'
import Link from 'next/link'
import { cn } from '@/v1.0/lib/utils'

interface PrimaryLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string
  className?: string
  children: React.ReactNode
}

export const PrimaryLink = ({ href, className, children, ...props }: PrimaryLinkProps) => {
  return (
    <>
      <Link
        href={href}
        className={cn('border-b-2 border-blue-500 text-blue-500 hover:text-blue-700 hover:border-blue-700', className)}
        {...props}
      >
        {children}
      </Link>
    </>
  )
}
