import { z } from 'zod'

const phoneRegex = /^[\+]?[1]?[\s\-\.]?\(?[0-9]{3}\)?[\s\-\.]?[0-9]{3}[\s\-\.]?[0-9]{4}$/

export const quickContactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  phone: z.string().regex(phoneRegex, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  urgency: z.enum(['emergency', 'urgent', 'standard', 'planning'], {
    errorMap: () => ({ message: 'Please select service urgency' })
  })
})

export const detailedContactSchema = z.object({
  // Contact Information
  firstName: z.string().min(2, 'First name must be at least 2 characters').max(50, 'First name must be less than 50 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters').max(50, 'Last name must be less than 50 characters'),
  phone: z.string().regex(phoneRegex, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  
  // Project Details
  address: z.string().max(200, 'Address must be less than 200 characters').optional(),
  propertyType: z.enum(['single-family', 'townhouse', 'condo', 'commercial-small', 'commercial-large', 'industrial'], {
    errorMap: () => ({ message: 'Please select property type' })
  }),
  propertyAge: z.enum(['new', 'recent', 'established', 'older']).optional(),
  
  // Services
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  
  // Additional Information
  timeline: z.enum(['asap', 'week', 'month', 'season', 'planning']).optional(),
  budget: z.enum(['under-1000', '1000-3000', '3000-5000', '5000-10000', 'over-10000', 'not-sure']).optional(),
  message: z.string().max(1000, 'Message must be less than 1000 characters').optional(),
  
  // Contact Preferences
  contactMethod: z.enum(['phone', 'text', 'email'], {
    errorMap: () => ({ message: 'Please select contact method' })
  }),
  contactTime: z.enum(['morning', 'afternoon', 'evening', 'anytime'], {
    errorMap: () => ({ message: 'Please select best time to contact' })
  })
})

export type QuickContactData = z.infer<typeof quickContactSchema>
export type DetailedContactData = z.infer<typeof detailedContactSchema>