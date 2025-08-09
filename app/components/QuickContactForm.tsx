'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { quickContactSchema, QuickContactData } from '../lib/validation'
import { ContactResponse } from '../types/contact'

export default function QuickContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', message: string} | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<QuickContactData>({
    resolver: zodResolver(quickContactSchema)
  })

  const onSubmit = async (data: QuickContactData) => {
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/contact/quick', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result: ContactResponse = await response.json()

      if (result.success) {
        setSubmitMessage({
          type: 'success',
          message: result.message
        })
        reset()
      } else {
        setSubmitMessage({
          type: 'error',
          message: result.message
        })
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        message: 'Something went wrong. Please try again or call us at (416) 555-1234.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="quick-contact-card">
      <h3>Get Your Free Quote</h3>
      <p>Fill out this form and we'll contact you within 2 hours</p>
      
      {submitMessage && (
        <div className={`alert ${submitMessage.type === 'success' ? 'alert-success' : 'alert-error'}`}>
          {submitMessage.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="quick-contact-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Your Name"
            {...register('name')}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <div className="form-error">{errors.name.message}</div>}
        </div>
        
        <div className="form-group">
          <input
            type="tel"
            placeholder="Phone Number"
            {...register('phone')}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <div className="form-error">{errors.phone.message}</div>}
        </div>
        
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            {...register('email')}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <div className="form-error">{errors.email.message}</div>}
        </div>
        
        <div className="form-group">
          <select
            {...register('urgency')}
            className={errors.urgency ? 'error' : ''}
          >
            <option value="">Service Urgency</option>
            <option value="emergency">Emergency (Same Day)</option>
            <option value="urgent">Urgent (Within 24 hours)</option>
            <option value="standard">Standard (Within 3 days)</option>
            <option value="planning">Planning for Future</option>
          </select>
          {errors.urgency && <div className="form-error">{errors.urgency.message}</div>}
        </div>
        
        <button 
          type="submit" 
          className={`btn btn-primary btn-full ${isSubmitting ? 'loading' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Get Free Quote'}
        </button>
      </form>
      
      <style jsx>{`
        .quick-contact-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: var(--shadow);
        }
        
        .quick-contact-card h3 {
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        
        .quick-contact-card p {
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }
        
        .quick-contact-form .form-group {
          margin-bottom: 1rem;
        }
        
        .quick-contact-form input,
        .quick-contact-form select {
          width: 100%;
          padding: 0.875rem;
          border: 2px solid var(--border-color);
          border-radius: 8px;
          font-size: 1rem;
          font-family: inherit;
          transition: border-color 0.3s ease;
        }
        
        .quick-contact-form input:focus,
        .quick-contact-form select:focus {
          outline: none;
          border-color: var(--primary-color);
        }
        
        .quick-contact-form input.error,
        .quick-contact-form select.error {
          border-color: #dc2626;
        }
      `}</style>
    </div>
  )
}