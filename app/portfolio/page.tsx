import { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/portfolio.css'

export const metadata: Metadata = {
  title: 'HVAC Portfolio | Our Work & Customer Reviews | FrostFlow GTA',
  description: 'See our professional HVAC installation and repair work across GTA. Customer testimonials and project showcases. 2000+ satisfied customers.',
}

export default function PortfolioPage() {
  return (
    <>
      <Header />
      
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb-list">
              <li><a href="/">Home</a></li>
              <li className="active">Portfolio</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Portfolio Hero */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="portfolio-hero-content">
            <h1>Our Work & Customer Reviews</h1>
            <p className="lead">
              Explore our portfolio of successful HVAC installations and see what our 
              2000+ satisfied customers have to say about our services across the GTA.
            </p>
            <div className="portfolio-stats">
              <div className="stat">
                <h3>2000+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>98%</h3>
                <p>Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="project-gallery">
        <div className="container">
          <div className="section-header">
            <h2>Recent Projects</h2>
            <p>Quality HVAC installations and repairs across the Greater Toronto Area</p>
          </div>
          
          <div className="project-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <i className="fas fa-fire"></i>
                  <span>Heating System</span>
                </div>
              </div>
              <div className="project-content">
                <h3>High-Efficiency Furnace Installation</h3>
                <p className="project-location">Toronto, ON</p>
                <p className="project-description">
                  Complete furnace replacement with high-efficiency model. Improved energy 
                  efficiency by 30% and reduced heating costs for this 2-story family home.
                </p>
                <div className="project-details">
                  <span className="project-type">Residential</span>
                  <span className="project-service">Heating Installation</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <i className="fas fa-snowflake"></i>
                  <span>Central AC</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Central Air Conditioning System</h3>
                <p className="project-location">Mississauga, ON</p>
                <p className="project-description">
                  New central AC installation with smart thermostat integration. 
                  Provides consistent cooling throughout the entire 3,000 sq ft home.
                </p>
                <div className="project-details">
                  <span className="project-type">Residential</span>
                  <span className="project-service">Cooling Installation</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <i className="fas fa-building"></i>
                  <span>Commercial HVAC</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Commercial HVAC Overhaul</h3>
                <p className="project-location">Brampton, ON</p>
                <p className="project-description">
                  Complete HVAC system replacement for 10,000 sq ft office building. 
                  Energy-efficient design with zoned climate control.
                </p>
                <div className="project-details">
                  <span className="project-type">Commercial</span>
                  <span className="project-service">Full System</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <i className="fas fa-wind"></i>
                  <span>Ductwork</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Complete Ductwork Replacement</h3>
                <p className="project-location">Richmond Hill, ON</p>
                <p className="project-description">
                  Full ductwork system replacement with improved insulation and air sealing. 
                  Enhanced airflow and energy efficiency throughout the home.
                </p>
                <div className="project-details">
                  <span className="project-type">Residential</span>
                  <span className="project-service">Ventilation</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <i className="fas fa-thermometer-half"></i>
                  <span>Heat Pump</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Heat Pump Installation</h3>
                <p className="project-location">Vaughan, ON</p>
                <p className="project-description">
                  Energy-efficient heat pump system providing both heating and cooling. 
                  Eco-friendly solution with significant cost savings.
                </p>
                <div className="project-details">
                  <span className="project-type">Residential</span>
                  <span className="project-service">Heat Pump</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <i className="fas fa-tools"></i>
                  <span>Emergency Repair</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Emergency Furnace Repair</h3>
                <p className="project-location">Oakville, ON</p>
                <p className="project-description">
                  24-hour emergency service for furnace breakdown during winter storm. 
                  Quick diagnosis and repair restored heat within 3 hours.
                </p>
                <div className="project-details">
                  <span className="project-type">Emergency</span>
                  <span className="project-service">Repair Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="customer-testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Trusted by over 2,000 satisfied customers across the GTA</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="customer-info">
                  <h4>Sarah Chen</h4>
                  <span>Mississauga, ON</span>
                </div>
                <div className="testimonial-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p>
                "FrostFlow HVAC installed our new furnace last winter. Professional service, 
                fair pricing, and excellent follow-up. The team was clean, efficient, and 
                explained everything clearly. Highly recommended!"
              </p>
              <div className="testimonial-service">Furnace Installation</div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="customer-info">
                  <h4>Mike Thompson</h4>
                  <span>Toronto, ON</span>
                </div>
                <div className="testimonial-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p>
                "Emergency AC repair on a hot summer day. They came out within 2 hours and 
                had us back up and running. Outstanding service! The technician was 
                knowledgeable and fixed the issue quickly."
              </p>
              <div className="testimonial-service">Emergency AC Repair</div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="customer-info">
                  <h4>Jennifer Walsh</h4>
                  <span>Brampton, ON</span>
                </div>
                <div className="testimonial-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p>
                "Complete ductwork replacement for our office building. Clean, efficient work 
                with minimal disruption to our business operations. The project was completed 
                on time and within budget."
              </p>
              <div className="testimonial-service">Commercial Ductwork</div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="customer-info">
                  <h4>David Kumar</h4>
                  <span>Markham, ON</span>
                </div>
                <div className="testimonial-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p>
                "Annual maintenance plan has saved us money and headaches. Our system runs 
                more efficiently, and we get priority service. The technicians are always 
                professional and thorough."
              </p>
              <div className="testimonial-service">Maintenance Plan</div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="customer-info">
                  <h4>Lisa Rodriguez</h4>
                  <span>Richmond Hill, ON</span>
                </div>
                <div className="testimonial-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p>
                "Heat pump installation was seamless. The team explained all the benefits and 
                helped us choose the right system. Our energy bills have dropped significantly, 
                and the house is more comfortable."
              </p>
              <div className="testimonial-service">Heat Pump Installation</div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="customer-info">
                  <h4>Robert Johnson</h4>
                  <span>Vaughan, ON</span>
                </div>
                <div className="testimonial-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p>
                "Central air installation exceeded our expectations. The quote was 
                competitive, the work was done on schedule, and the system works perfectly. 
                Great communication throughout the process."
              </p>
              <div className="testimonial-service">Central AC Installation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="portfolio-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join Our Satisfied Customers?</h2>
            <p>Get a free quote for your HVAC project today and experience the FrostFlow difference.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Free Quote</a>
              <a href="tel:+14165551234" className="btn btn-secondary">
                <i className="fas fa-phone"></i>
                Call: (416) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}