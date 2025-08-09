import { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/about.css'

export const metadata: Metadata = {
  title: 'About FrostFlow | 15+ Years Serving GTA | Licensed HVAC Experts',
  description: 'Learn about FrostFlow - 15+ years of professional HVAC services in GTA. Licensed, insured technicians. 2000+ satisfied customers. Energy-efficient solutions.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb-list">
              <li><a href="/">Home</a></li>
              <li className="active">About</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About FrostFlow</h1>
            <p className="lead">
              Serving the Greater Toronto Area for over 15 years with professional 
              HVAC solutions. We understand the unique climate challenges of Southern 
              Ontario and deliver comfort solutions you can trust.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <h3>2000+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="hero-stat">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className="hero-stat">
                <h3>24/7</h3>
                <p>Emergency Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                FrostFlow was founded in 2008 with a simple mission: to provide 
                reliable, professional HVAC services to families and businesses across 
                the Greater Toronto Area. What started as a small local business has 
                grown into one of the most trusted HVAC companies in the region.
              </p>
              <p>
                Our founder, with over 20 years of experience in the HVAC industry, 
                recognized the need for a company that truly cared about customer 
                satisfaction and quality workmanship. This vision continues to drive 
                everything we do today.
              </p>
              <p>
                We've built our reputation on honest service, fair pricing, and 
                exceptional results. Every member of our team is committed to 
                exceeding your expectations and ensuring your complete satisfaction.
              </p>
            </div>
            <div className="story-features">
              <div className="feature">
                <i className="fas fa-award"></i>
                <h4>Award-Winning Service</h4>
                <p>Recognized for excellence in HVAC services and customer satisfaction</p>
              </div>
              <div className="feature">
                <i className="fas fa-users"></i>
                <h4>Expert Team</h4>
                <p>Certified technicians with ongoing training and industry expertise</p>
              </div>
              <div className="feature">
                <i className="fas fa-handshake"></i>
                <h4>Customer First</h4>
                <p>Your comfort and satisfaction are our top priorities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose FrostFlow HVAC</h2>
            <p>What sets us apart from other HVAC contractors in the GTA</p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Licensed & Insured</h3>
              <p>
                Fully licensed HVAC technicians with comprehensive insurance coverage. 
                All work is guaranteed and meets provincial standards and regulations.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Energy Efficient Solutions</h3>
              <p>
                Eco-friendly HVAC solutions that reduce your carbon footprint and 
                energy bills. We specialize in high-efficiency systems and green technologies.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>24/7 Emergency Service</h3>
              <p>
                HVAC emergencies don't wait for business hours. Our emergency service 
                team is available around the clock to restore your comfort quickly.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>Quality Workmanship</h3>
              <p>
                Every installation and repair is performed to the highest standards. 
                We use premium materials and proven techniques for lasting results.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h3>Fair & Transparent Pricing</h3>
              <p>
                No hidden fees or surprise charges. We provide detailed quotes upfront 
                and stick to our pricing with no pressure sales tactics.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>Exceptional Support</h3>
              <p>
                From initial consultation to post-installation support, we're here 
                for you. Our customer service team ensures your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-areas">
        <div className="container">
          <div className="areas-content">
            <div className="areas-text">
              <h2>Serving the Greater Toronto Area</h2>
              <p>
                We're proud to serve residential and commercial customers across 
                the GTA. Our local expertise means we understand the unique climate 
                challenges and building codes of each community we serve.
              </p>
              <p>
                Whether you're in the heart of Toronto or the surrounding suburbs, 
                our team is ready to provide professional HVAC services for your 
                home or business.
              </p>
              <div className="contact-cta">
                <h3>Ready to Experience the FrostFlow Difference?</h3>
                <div className="cta-buttons">
                  <a href="/contact" className="btn btn-primary">Get Free Quote</a>
                  <a href="tel:+14165551234" className="btn btn-secondary">
                    <i className="fas fa-phone"></i>
                    Call: (416) 555-1234
                  </a>
                </div>
              </div>
            </div>
            <div className="areas-map">
              <h3>Our Service Areas Include:</h3>
              <div className="areas-grid">
                <div className="area-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Toronto</span>
                </div>
                <div className="area-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Mississauga</span>
                </div>
                <div className="area-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Brampton</span>
                </div>
                <div className="area-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Markham</span>
                </div>
                <div className="area-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Richmond Hill</span>
                </div>
                <div className="area-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Vaughan</span>
                </div>
                <div className="area-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Oakville</span>
                </div>
                <div className="area-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Burlington</span>
                </div>
                <div className="area-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Etobicoke</span>
                </div>
                <div className="area-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>North York</span>
                </div>
                <div className="area-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Scarborough</span>
                </div>
                <div className="area-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>York Region</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="company-values">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Integrity</h3>
              <p>
                We believe in honest, transparent business practices. You can trust 
                us to provide accurate assessments and fair pricing every time.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Excellence</h3>
              <p>
                We strive for perfection in every job, using the best materials 
                and latest techniques to deliver outstanding results.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Customer Focus</h3>
              <p>
                Your satisfaction is our success. We listen to your needs and 
                provide solutions that exceed your expectations.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <h3>Sustainability</h3>
              <p>
                We're committed to environmentally responsible practices and 
                energy-efficient solutions that benefit both you and the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}