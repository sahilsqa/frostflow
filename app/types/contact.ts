export interface QuickContactForm {
  name: string
  phone: string
  email: string
  urgency: 'emergency' | 'urgent' | 'standard' | 'planning'
}

export interface DetailedContactForm {
  // Contact Information
  firstName: string
  lastName: string
  phone: string
  email: string
  
  // Project Details
  address?: string
  propertyType: 'single-family' | 'townhouse' | 'condo' | 'commercial-small' | 'commercial-large' | 'industrial'
  propertyAge?: 'new' | 'recent' | 'established' | 'older'
  
  // Services
  services: string[]
  
  // Additional Information
  timeline?: 'asap' | 'week' | 'month' | 'season' | 'planning'
  budget?: 'under-1000' | '1000-3000' | '3000-5000' | '5000-10000' | 'over-10000' | 'not-sure'
  message?: string
  
  // Contact Preferences
  contactMethod: 'phone' | 'text' | 'email'
  contactTime: 'morning' | 'afternoon' | 'evening' | 'anytime'
}

export interface ContactResponse {
  success: boolean
  message: string
  error?: string
}