'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { detailedContactSchema, DetailedContactData } from '../lib/validation'
import { ContactResponse } from '../types/contact'

export default function DetailedContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', message: string} | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<DetailedContactData>({
    resolver: zodResolver(detailedContactSchema),
    defaultValues: {
      services: [],
      contactMethod: 'phone',
      contactTime: 'anytime'
    }
  })

  const onSubmit = async (data: DetailedContactData) => {
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/contact/detailed', {
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
        // Scroll to top of form to show success message
        document.querySelector('.detailed-contact-form')?.scrollIntoView({ behavior: 'smooth' })
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
    <div className="detailed-contact-form">
      {submitMessage && (
        <div className={`alert ${submitMessage.type === 'success' ? 'alert-success' : 'alert-error'}`}>
          {submitMessage.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-section">
          <h3>Contact Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                {...register('firstName')}
                className={errors.firstName ? 'error' : ''}
              />
              {errors.firstName && <div className="form-error">{errors.firstName.message}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                {...register('lastName')}
                className={errors.lastName ? 'error' : ''}
              />
              {errors.lastName && <div className="form-error">{errors.lastName.message}</div>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                {...register('phone')}
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <div className="form-error">{errors.phone.message}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <div className="form-error">{errors.email.message}</div>}
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Project Details</h3>
          <div className="form-group">
            <label htmlFor="address">Property Address</label>
            <input
              type="text"
              id="address"
              {...register('address')}
              placeholder="Street address, City, Province"
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="propertyType">Property Type *</label>
              <select
                id="propertyType"
                {...register('propertyType')}
                className={errors.propertyType ? 'error' : ''}
              >
                <option value="">Select property type</option>
                <option value="single-family">Single Family Home</option>
                <option value="townhouse">Townhouse</option>
                <option value="condo">Condo/Apartment</option>
                <option value="commercial-small">Small Business (under 5,000 sq ft)</option>
                <option value="commercial-large">Large Commercial (over 5,000 sq ft)</option>
                <option value="industrial">Industrial/Warehouse</option>
              </select>
              {errors.propertyType && <div className="form-error">{errors.propertyType.message}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="propertyAge">Property Age</label>
              <select id="propertyAge" {...register('propertyAge')}>
                <option value="">Select age range</option>
                <option value="new">Less than 5 years</option>
                <option value="recent">5-15 years</option>
                <option value="established">15-30 years</option>
                <option value="older">More than 30 years</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Service Needed</h3>
          <div className="service-checkboxes">
            <div className="checkbox-group">
              <h4>Heating Services</h4>
              <label className="checkbox-label">
                <input type="checkbox" {...register('services')} value="Furnace Installation/Replacement" />
                <span className="checkmark"></span>
                Furnace Installation/Replacement
              </label>
              <label className="checkbox-label">
                <input type="checkbox" {...register('services')} value="Furnace Repair" />
                <span className="checkmark"></span>
                Furnace Repair
              </label>
              <label className="checkbox-label">
                <input type="checkbox" {...register('services')} value="Boiler Service" />
                <span className="checkmark"></span>
                Boiler Service
              </label>
              <label className="checkbox-label">
                <input type="checkbox" {...register('services')} value="Heat Pump Installation" />
                <span className="checkmark"></span>
                Heat Pump Installation
              </label>
            </div>
            
            <div className="checkbox-group">
              <h4>Cooling Services</h4>
              <label className="checkbox-label">
                <input type="checkbox" {...register('services')} value="Central AC Installation" />
                <span className="checkmark"></span>
                Central AC Installation
              </label>
              <label className="checkbox-label">
                <input type="checkbox" {...register('services')} value="AC Repair/Maintenance" />
                <span className="checkmark"></span>
                AC Repair/Maintenance
              </label>
              <label className="checkbox-label">
                <input type="checkbox" {...register('services')} value="Ductless Mini-Split" />
                <span className="checkmark"></span>
                Ductless Mini-Split
              </label>
            </div>
            
            <div className="checkbox-group">
              <h4>Other Services</h4>
              <label className="checkbox-label">
                <input type="checkbox" {...register('services')} value="Ductwork Installation/Repair" />
                <span className="checkmark"></span>
                Ductwork Installation/Repair
              </label>
              <label className="checkbox-label">
                <input type="checkbox" {...register('services')} value="Ventilation Systems" />
                <span className="checkmark"></span>
                Ventilation Systems
              </label>
              <label className="checkbox-label">
                <input type="checkbox" {...register('services')} value="Maintenance Plan" />
                <span className="checkmark"></span>
                Maintenance Plan
              </label>
              <label className="checkbox-label">
                <input type="checkbox" {...register('services')} value="Indoor Air Quality" />
                <span className="checkmark"></span>
                Indoor Air Quality
              </label>
            </div>
          </div>
          {errors.services && <div className="form-error">{errors.services.message}</div>}
        </div>

        <div className="form-section">
          <h3>Additional Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="timeline">Preferred Timeline</label>
              <select id="timeline" {...register('timeline')}>
                <option value="">Select timeline</option>
                <option value="asap">As soon as possible</option>
                <option value="week">Within a week</option>
                <option value="month">Within a month</option>
                <option value="season">Before next season</option>
                <option value="planning">Just planning ahead</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="budget">Estimated Budget</label>
              <select id="budget" {...register('budget')}>
                <option value="">Select budget range</option>
                <option value="under-1000">Under $1,000</option>
                <option value="1000-3000">$1,000 - $3,000</option>
                <option value="3000-5000">$3,000 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="over-10000">Over $10,000</option>
                <option value="not-sure">Not sure</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Tell us more about your project</label>
            <textarea
              id="message"
              {...register('message')}
              rows={5}
              placeholder="Describe your HVAC needs, current issues, or any specific requirements..."
              className={errors.message ? 'error' : ''}
            />
            {errors.message && <div className="form-error">{errors.message.message}</div>}
          </div>
        </div>

        <div className="form-section">
          <h3>Contact Preferences</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contactMethod">Preferred Contact Method</label>
              <select
                id="contactMethod"
                {...register('contactMethod')}
                className={errors.contactMethod ? 'error' : ''}
              >
                <option value="phone">Phone Call</option>
                <option value="text">Text Message</option>
                <option value="email">Email</option>
              </select>
              {errors.contactMethod && <div className="form-error">{errors.contactMethod.message}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="contactTime">Best Time to Contact</label>
              <select
                id="contactTime"
                {...register('contactTime')}
                className={errors.contactTime ? 'error' : ''}
              >
                <option value="morning">Morning (8AM-12PM)</option>
                <option value="afternoon">Afternoon (12PM-5PM)</option>
                <option value="evening">Evening (5PM-8PM)</option>
                <option value="anytime">Anytime</option>
              </select>
              {errors.contactTime && <div className="form-error">{errors.contactTime.message}</div>}
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          className={`btn btn-primary btn-large ${isSubmitting ? 'loading' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Detailed Quote Request'}
        </button>
      </form>
      
      <style jsx>{`
        .detailed-contact-form {
          background: white;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: var(--shadow);
        }
        
        .form-section {
          margin-bottom: 2.5rem;
        }
        
        .form-section:last-of-type {
          margin-bottom: 0;
        }
        
        .form-section h3 {
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          border-bottom: 2px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        
        .service-checkboxes {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .checkbox-group h4 {
          margin-bottom: 1rem;
          color: var(--text-primary);
          font-size: 1.125rem;
        }
        
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 6px;
          transition: background-color 0.3s ease;
        }
        
        .checkbox-label:hover {
          background-color: var(--background-light);
        }
        
        .checkbox-label input[type="checkbox"] {
          display: none;
        }
        
        .checkmark {
          width: 20px;
          height: 20px;
          border: 2px solid var(--border-color);
          border-radius: 4px;
          position: relative;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        
        .checkbox-label input[type="checkbox"]:checked + .checkmark {
          background-color: var(--primary-color);
          border-color: var(--primary-color);
        }
        
        .checkbox-label input[type="checkbox"]:checked + .checkmark::after {
          content: '✓';
          position: absolute;
          color: white;
          font-size: 14px;
          font-weight: bold;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        .form-group input.error,
        .form-group select.error,
        .form-group textarea.error {
          border-color: #dc2626;
        }
        
        @media (max-width: 768px) {
          .form-row,
          .service-checkboxes {
            grid-template-columns: 1fr;
          }
          
          .detailed-contact-form {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  )
}