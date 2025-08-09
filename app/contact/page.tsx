import { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import QuickContactForm from '../components/QuickContactForm'
import DetailedContactForm from '../components/DetailedContactForm'
import '../styles/contact.css'

export const metadata: Metadata = {
  title: 'Contact FrostFlow | Get Free Quote | GTA HVAC Services',
  description: 'Contact FrostFlow for professional HVAC services in GTA. Get your free quote today! Call (416) 555-1234 or fill out our contact form for heating, cooling, and ventilation services.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb-list">
              <li><a href="/">Home</a></li>
              <li className="active">Contact</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <div className="contact-hero-text">
              <h1>Contact FrostFlow</h1>
              <p className="lead">
                Ready to improve your home or business comfort? Get in touch with our HVAC 
                experts for a free consultation and quote. We're here to help with all your 
                heating, cooling, and ventilation needs.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="method-info">
                    <h3>Call Us</h3>
                    <p><a href="tel:+14165551234">(416) 555-1234</a></p>
                    <span>24/7 Emergency Service Available</span>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="method-info">
                    <h3>Email Us</h3>
                    <p><a href="mailto:info@frostflow.ca">info@frostflow.ca</a></p>
                    <span>We respond within 2 hours</span>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="method-info">
                    <h3>Business Hours</h3>
                    <p>Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM</p>
                    <span>Emergency service available 24/7</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-hero-form">
              <QuickContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-content">
            <div className="contact-info-detailed">
              <h2>Get Detailed Quote</h2>
              <p>
                For the most accurate quote, please provide detailed information about 
                your HVAC needs using the form below.
              </p>
              
              <div className="contact-info-grid">
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>Service Areas</h4>
                    <p>
                      Greater Toronto Area including Toronto, Mississauga, Brampton, 
                      Markham, Richmond Hill, Vaughan, Oakville, Burlington, and surrounding areas.
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-tools"></i>
                  <div>
                    <h4>Services Offered</h4>
                    <p>
                      Heating systems, cooling systems, ventilation, ductwork, maintenance plans, 
                      emergency repairs, and indoor air quality solutions.
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-shield-alt"></i>
                  <div>
                    <h4>Licensed & Insured</h4>
                    <p>
                      Fully licensed HVAC contractors with comprehensive insurance coverage 
                      for your protection and peace of mind.
                    </p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-award"></i>
                  <div>
                    <h4>Satisfaction Guarantee</h4>
                    <p>
                      100% satisfaction guarantee on all our services. If you're not happy, 
                      we'll make it right.
                    </p>
                  </div>
                </div>
              </div>

              <div className="emergency-contact">
                <div className="emergency-card">
                  <i className="fas fa-exclamation-triangle"></i>
                  <div>
                    <h3>Emergency Service</h3>
                    <p>HVAC emergency? Don't wait - call us now for immediate assistance.</p>
                    <a href="tel:+14165551234" className="emergency-btn">
                      <i className="fas fa-phone"></i>
                      (416) 555-1234
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="detailed-contact-form">
              <DetailedContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}