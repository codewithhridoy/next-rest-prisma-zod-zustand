import { NextResponse, NextRequest } from 'next/server'
import { prisma } from '@/v1/lib'
import { HTTP_STATUS } from '@/v1/constants'
import { errorResponse } from '@/v1/handlers'

export async function POST(request: NextRequest) {
  try {
    const { content } = await request.json()

    const note = await prisma.notes.create({
      data: { content }
    })

    return NextResponse.json(
      {
        code: HTTP_STATUS.CREATED,
        success: true,
        message: 'Note Created Successfully!',
        data: note
      },
      { status: HTTP_STATUS.CREATED }
    )
  } catch (error) {
    return errorResponse('Error creating note', error)
  }
}

export async function GET() {
  try {
    const notes = await prisma.notes.findMany()

    return NextResponse.json(
      {
        code: HTTP_STATUS.OK,
        success: true,
        message: 'Notes fetched successfully.',
        data: notes
      },
      { status: HTTP_STATUS.OK }
    )
  } catch (error) {
    return errorResponse('Error fetching notes', error)
  }
}
