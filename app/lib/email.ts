import nodemailer from 'nodemailer'
import { QuickContactData, DetailedContactData } from './validation'

// Create transporter (you'll need to configure with actual email service)
const transporter = nodemailer.createTransport({
  // Gmail configuration (example)
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// Alternative configuration for other services
// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: parseInt(process.env.SMTP_PORT || '587'),
//   secure: false,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// })

export async function sendQuickContactEmail(data: QuickContactData) {
  const urgencyLabels = {
    emergency: 'EMERGENCY - Same Day',
    urgent: 'URGENT - Within 24 hours',
    standard: 'Standard - Within 3 days',
    planning: 'Planning for Future'
  }

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
        New Quick Contact Form Submission
      </h2>
      
      <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1f2937; margin-top: 0;">Contact Information</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Urgency:</strong> <span style="color: ${data.urgency === 'emergency' ? '#dc2626' : data.urgency === 'urgent' ? '#f59e0b' : '#16a34a'}; font-weight: bold;">${urgencyLabels[data.urgency]}</span></p>
      </div>
      
      <div style="background: #e2e8f0; padding: 15px; border-radius: 8px; margin-top: 20px;">
        <p style="margin: 0; font-size: 14px; color: #6b7280;">
          Submitted on: ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })} (EST)
        </p>
      </div>
    </div>
  `

  const textContent = `
    New Quick Contact Form Submission
    
    Contact Information:
    Name: ${data.name}
    Phone: ${data.phone}
    Email: ${data.email}
    Urgency: ${urgencyLabels[data.urgency]}
    
    Submitted on: ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })} (EST)
  `

  const mailOptions = {
    from: process.env.EMAIL_FROM || 'noreply@frostflow.ca',
    to: process.env.EMAIL_TO || 'info@frostflow.ca',
    subject: `${data.urgency === 'emergency' ? '🚨 EMERGENCY' : '📧'} New Contact Form - ${data.name}`,
    text: textContent,
    html: htmlContent,
  }

  await transporter.sendMail(mailOptions)
}

export async function sendDetailedContactEmail(data: DetailedContactData) {
  const propertyTypeLabels = {
    'single-family': 'Single Family Home',
    'townhouse': 'Townhouse',
    'condo': 'Condo/Apartment',
    'commercial-small': 'Small Business (under 5,000 sq ft)',
    'commercial-large': 'Large Commercial (over 5,000 sq ft)',
    'industrial': 'Industrial/Warehouse'
  }

  const propertyAgeLabels = {
    'new': 'Less than 5 years',
    'recent': '5-15 years',
    'established': '15-30 years',
    'older': 'More than 30 years'
  }

  const timelineLabels = {
    'asap': 'As soon as possible',
    'week': 'Within a week',
    'month': 'Within a month',
    'season': 'Before next season',
    'planning': 'Just planning ahead'
  }

  const budgetLabels = {
    'under-1000': 'Under $1,000',
    '1000-3000': '$1,000 - $3,000',
    '3000-5000': '$3,000 - $5,000',
    '5000-10000': '$5,000 - $10,000',
    'over-10000': 'Over $10,000',
    'not-sure': 'Not sure'
  }

  const contactMethodLabels = {
    'phone': 'Phone Call',
    'text': 'Text Message',
    'email': 'Email'
  }

  const contactTimeLabels = {
    'morning': 'Morning (8AM-12PM)',
    'afternoon': 'Afternoon (12PM-5PM)',
    'evening': 'Evening (5PM-8PM)',
    'anytime': 'Anytime'
  }

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
        New Detailed Quote Request
      </h2>
      
      <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1f2937; margin-top: 0;">Contact Information</h3>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        ${data.address ? `<p><strong>Address:</strong> ${data.address}</p>` : ''}
      </div>
      
      <div style="background: #e2e8f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1f2937; margin-top: 0;">Project Details</h3>
        <p><strong>Property Type:</strong> ${propertyTypeLabels[data.propertyType]}</p>
        ${data.propertyAge ? `<p><strong>Property Age:</strong> ${propertyAgeLabels[data.propertyAge]}</p>` : ''}
        <p><strong>Services Needed:</strong></p>
        <ul style="margin: 10px 0; padding-left: 20px;">
          ${data.services.map(service => `<li>${service}</li>`).join('')}
        </ul>
        ${data.timeline ? `<p><strong>Timeline:</strong> ${timelineLabels[data.timeline]}</p>` : ''}
        ${data.budget ? `<p><strong>Budget:</strong> ${budgetLabels[data.budget]}</p>` : ''}
      </div>
      
      ${data.message ? `
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">Additional Information</h3>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
      ` : ''}
      
      <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1f2937; margin-top: 0;">Contact Preferences</h3>
        <p><strong>Preferred Method:</strong> ${contactMethodLabels[data.contactMethod]}</p>
        <p><strong>Best Time:</strong> ${contactTimeLabels[data.contactTime]}</p>
      </div>
      
      <div style="background: #e2e8f0; padding: 15px; border-radius: 8px; margin-top: 20px;">
        <p style="margin: 0; font-size: 14px; color: #6b7280;">
          Submitted on: ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })} (EST)
        </p>
      </div>
    </div>
  `

  const textContent = `
    New Detailed Quote Request
    
    Contact Information:
    Name: ${data.firstName} ${data.lastName}
    Phone: ${data.phone}
    Email: ${data.email}
    ${data.address ? `Address: ${data.address}` : ''}
    
    Project Details:
    Property Type: ${propertyTypeLabels[data.propertyType]}
    ${data.propertyAge ? `Property Age: ${propertyAgeLabels[data.propertyAge]}` : ''}
    Services: ${data.services.join(', ')}
    ${data.timeline ? `Timeline: ${timelineLabels[data.timeline]}` : ''}
    ${data.budget ? `Budget: ${budgetLabels[data.budget]}` : ''}
    
    ${data.message ? `Additional Information:\n${data.message}\n` : ''}
    
    Contact Preferences:
    Method: ${contactMethodLabels[data.contactMethod]}
    Time: ${contactTimeLabels[data.contactTime]}
    
    Submitted on: ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })} (EST)
  `

  const mailOptions = {
    from: process.env.EMAIL_FROM || 'noreply@frostflow.ca',
    to: process.env.EMAIL_TO || 'info@frostflow.ca',
    subject: `📋 Detailed Quote Request - ${data.firstName} ${data.lastName}`,
    text: textContent,
    html: htmlContent,
  }

  await transporter.sendMail(mailOptions)
}