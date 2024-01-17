import { NextResponse } from 'next/server'
import { HTTP_STATUS } from '@/v1/constants'

export function errorResponse(
  message: string,
  error: Error | unknown,
  code: number = HTTP_STATUS.INTERNAL_SERVER_ERROR
) {
  console.error(message, error)

  return NextResponse.json(
    {
      code,
      message,
      success: false,
      error: error instanceof Error ? error.message : 'Something went wrong!'
    },
    { status: code }
  )
}
