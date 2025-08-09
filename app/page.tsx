import Link from 'next/link'
import { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/home-hero.css'

export const metadata: Metadata = {
  title: 'FrostFlow - Professional HVAC Services in GTA | Toronto, Mississauga, Brampton',
  description: 'Professional HVAC services in Greater Toronto Area. Installation, repair, and maintenance of heating, cooling, and ventilation systems. Licensed and insured.',
}

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="floating-elements">
            <div className="floating-icon hvac-unit">
              <i className="fas fa-wind"></i>
            </div>
            <div className="floating-icon thermometer">
              <i className="fas fa-thermometer-half"></i>
            </div>
            <div className="floating-icon snowflake">
              <i className="fas fa-snowflake"></i>
            </div>
            <div className="floating-icon fire">
              <i className="fas fa-fire"></i>
            </div>
            <div className="floating-icon tools">
              <i className="fas fa-tools"></i>
            </div>
          </div>
          <div className="gradient-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <i className="fas fa-award"></i>
              <span>GTA's Trusted HVAC Experts</span>
            </div>
            <h1 className="hero-title">
              <span className="title-line">Professional HVAC</span>
              <span className="title-line highlight-line">
                <span className="highlight">Solutions</span> for Your
              </span>
              <span className="title-line">Perfect Climate</span>
            </h1>
            <p className="hero-description">
              Transform your space with expert heating, cooling, and ventilation services. 
              Serving residential and commercial properties across the Greater Toronto Area 
              with cutting-edge technology and unmatched expertise.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">2000+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Emergency Service</div>
              </div>
            </div>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">
                <i className="fas fa-calendar-alt"></i>
                Get Free Quote
              </Link>
              <a href="tel:+14165551234" className="btn btn-secondary">
                <i className="fas fa-phone"></i>
                (416) 555-1234
              </a>
            </div>
            <div className="hero-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="feature-content">
                  <span className="feature-title">Licensed & Insured</span>
                  <span className="feature-desc">Fully certified professionals</span>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="feature-content">
                  <span className="feature-title">24/7 Emergency</span>
                  <span className="feature-desc">Always available when you need us</span>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <div className="feature-content">
                  <span className="feature-title">Energy Efficient</span>
                  <span className="feature-desc">Eco-friendly solutions</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="climate-control-display">
              <div className="control-panel">
                <div className="temperature-display">
                  <div className="temp-reading">
                    <span className="temp-number">21°C</span>
                    <span className="temp-label">Current</span>
                  </div>
                  <div className="temp-controls">
                    <button className="temp-btn">+</button>
                    <button className="temp-btn">-</button>
                  </div>
                </div>
                <div className="system-status">
                  <div className="status-item heating">
                    <i className="fas fa-fire"></i>
                    <span>Heating</span>
                    <div className="status-indicator active"></div>
                  </div>
                  <div className="status-item cooling">
                    <i className="fas fa-snowflake"></i>
                    <span>Cooling</span>
                    <div className="status-indicator"></div>
                  </div>
                  <div className="status-item ventilation">
                    <i className="fas fa-wind"></i>
                    <span>Ventilation</span>
                    <div className="status-indicator active"></div>
                  </div>
                </div>
              </div>
              <div className="airflow-animation">
                <div className="air-particle"></div>
                <div className="air-particle"></div>
                <div className="air-particle"></div>
                <div className="air-particle"></div>
                <div className="air-particle"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our HVAC Services</h2>
            <p>Comprehensive heating, cooling, and ventilation solutions for your comfort</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-fire"></i>
              </div>
              <h3>Heating Services</h3>
              <p>
                Furnace installation, repair, and maintenance. Gas, electric, and oil 
                heating systems for optimal winter comfort.
              </p>
              <ul>
                <li>Furnace Installation & Replacement</li>
                <li>Boiler Services</li>
                <li>Heat Pump Systems</li>
                <li>Emergency Repairs</li>
              </ul>
              <Link href="/services#heating" className="btn btn-secondary btn-small">
                Learn More
              </Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-snowflake"></i>
              </div>
              <h3>Cooling Services</h3>
              <p>
                Air conditioning installation and repair to keep you cool during 
                hot Canadian summers.
              </p>
              <ul>
                <li>Central AC Installation</li>
                <li>Ductless Mini-Splits</li>
                <li>AC Repair & Maintenance</li>
                <li>Energy Efficiency Upgrades</li>
              </ul>
              <Link href="/services#cooling" className="btn btn-secondary btn-small">
                Learn More
              </Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-wind"></i>
              </div>
              <h3>Ventilation Services</h3>
              <p>
                Indoor air quality solutions including ductwork, ventilation, 
                and air purification systems.
              </p>
              <ul>
                <li>Ductwork Installation</li>
                <li>Air Quality Testing</li>
                <li>Ventilation Systems</li>
                <li>Filter Replacement</li>
              </ul>
              <Link href="/services#ventilation" className="btn btn-secondary btn-small">
                Learn More
              </Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>Maintenance Plans</h3>
              <p>
                Preventive maintenance programs to keep your HVAC system running 
                efficiently year-round.
              </p>
              <ul>
                <li>Annual Tune-ups</li>
                <li>Priority Service</li>
                <li>Discounted Repairs</li>
                <li>Extended Warranties</li>
              </ul>
              <Link href="/services#maintenance" className="btn btn-secondary btn-small">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="services-cta">
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
            <Link href="/portfolio" className="btn btn-secondary">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Trusted by over 2,000 satisfied customers across the GTA</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                "FrostFlow HVAC installed our new furnace last winter. Professional service, 
                fair pricing, and excellent follow-up. Highly recommended!"
              </p>
              <div className="testimonial-author">
                <h4>Sarah Chen</h4>
                <span>Mississauga, ON</span>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                "Emergency AC repair on a hot summer day. They came out within 2 hours 
                and had us back up and running. Outstanding service!"
              </p>
              <div className="testimonial-author">
                <h4>Mike Thompson</h4>
                <span>Toronto, ON</span>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                "Complete ductwork replacement for our office building. Clean, efficient 
                work with minimal disruption to our business operations."
              </p>
              <div className="testimonial-author">
                <h4>Jennifer Walsh</h4>
                <span>Brampton, ON</span>
              </div>
            </div>
          </div>
          
          <div className="testimonials-cta">
            <Link href="/portfolio" className="btn btn-primary">
              View More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Get Your Free Quote Today</h2>
            <p>Contact us for professional HVAC services in the GTA</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Call Us</h4>
                  <p><a href="tel:+14165551234">(416) 555-1234</a></p>
                  <small>24/7 Emergency Service</small>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email Us</h4>
                  <p><a href="mailto:info@frostflowhvac.ca">info@frostflowhvac.ca</a></p>
                  <small>We respond within 2 hours</small>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Service Area</h4>
                  <p>Greater Toronto Area</p>
                  <small>Toronto, Mississauga, Brampton & more</small>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>Quick Contact Form</h3>
              <p>Get a free quote in 2 hours or less</p>
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" name="name" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" name="phone" placeholder="Phone Number" required />
                  </div>
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <select name="service" required>
                    <option value="">Select Service</option>
                    <option value="heating">Heating Services</option>
                    <option value="cooling">Cooling Services</option>
                    <option value="ventilation">Ventilation Services</option>
                    <option value="maintenance">Maintenance Plan</option>
                    <option value="emergency">Emergency Repair</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea 
                    name="message" 
                    rows={5} 
                    placeholder="Tell us about your HVAC needs..."
                  ></textarea>
                </div>
                <Link href="/contact" className="btn btn-primary btn-full">
                  Get Detailed Quote
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}