import { NextRequest, NextResponse } from 'next/server'
import { detailedContactSchema } from '@/app/lib/validation'
import { sendDetailedContactEmail } from '@/app/lib/email'
import { ContactResponse } from '@/app/types/contact'

export async function POST(request: NextRequest): Promise<NextResponse<ContactResponse>> {
  try {
    const body = await request.json()
    
    // Validate the request data
    const validatedData = detailedContactSchema.parse(body)
    
    // Send email
    await sendDetailedContactEmail(validatedData)
    
    return NextResponse.json({
      success: true,
      message: 'Thank you for your detailed request! We\'ll contact you within 2 hours during business hours with a comprehensive quote.'
    })
    
  } catch (error: any) {
    console.error('Detailed contact form error:', error)
    
    // Handle validation errors
    if (error.name === 'ZodError') {
      const errorMessage = error.errors.map((err: any) => err.message).join(', ')
      return NextResponse.json({
        success: false,
        message: 'Please check your form data and try again.',
        error: errorMessage
      }, { status: 400 })
    }
    
    // Handle email sending errors
    if (error.code === 'EAUTH' || error.code === 'ECONNECTION') {
      return NextResponse.json({
        success: false,
        message: 'Unable to send message at this time. Please call us directly at (416) 555-1234.',
        error: 'Email service unavailable'
      }, { status: 503 })
    }
    
    // Generic error response
    return NextResponse.json({
      success: false,
      message: 'Something went wrong. Please try again or call us at (416) 555-1234.',
      error: 'Internal server error'
    }, { status: 500 })
  }
}