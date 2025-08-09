import { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import QuickContactForm from '../components/QuickContactForm'
import '../styles/services.css'

export const metadata: Metadata = {
  title: 'HVAC Services GTA | Heating, Cooling & Ventilation | FrostFlow',
  description: 'Professional HVAC services in Greater Toronto Area. Heating, cooling, ventilation, maintenance plans. Licensed technicians. Free quotes. Call (416) 555-1234.',
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb-list">
              <li><a href="/">Home</a></li>
              <li className="active">Services</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Services Hero */}
      <section className="services-hero">
        <div className="services-hero-background">
          <div className="floating-services">
            <div className="service-icon heating-icon">
              <i className="fas fa-fire"></i>
            </div>
            <div className="service-icon cooling-icon">
              <i className="fas fa-snowflake"></i>
            </div>
            <div className="service-icon ventilation-icon">
              <i className="fas fa-wind"></i>
            </div>
            <div className="service-icon maintenance-icon">
              <i className="fas fa-tools"></i>
            </div>
          </div>
          <div className="animated-grid">
            <div className="grid-line horizontal line-1"></div>
            <div className="grid-line horizontal line-2"></div>
            <div className="grid-line vertical line-3"></div>
            <div className="grid-line vertical line-4"></div>
          </div>
          <div className="gradient-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="container">
          <div className="services-hero-content">
            <div className="services-hero-text">
              <div className="services-badge">
                <i className="fas fa-cog"></i>
                <span>Complete HVAC Solutions</span>
              </div>
              <h1>
                <span className="hero-line">Professional HVAC</span>
                <span className="hero-line highlight-text">
                  <span className="highlight-gradient">Services</span> That
                </span>
                <span className="hero-line">Keep You Comfortable</span>
              </h1>
              <p className="lead">
                Experience the perfect climate year-round with our comprehensive heating, 
                cooling, and ventilation solutions. From installation to maintenance, 
                we deliver excellence across the Greater Toronto Area.
              </p>
              <div className="services-features-grid">
                <div className="service-feature">
                  <div className="feature-icon-wrapper">
                    <i className="fas fa-fire"></i>
                  </div>
                  <div className="feature-text">
                    <h3>Heating Systems</h3>
                    <p>Furnaces, heat pumps, boilers</p>
                  </div>
                </div>
                <div className="service-feature">
                  <div className="feature-icon-wrapper">
                    <i className="fas fa-snowflake"></i>
                  </div>
                  <div className="feature-text">
                    <h3>Cooling Solutions</h3>
                    <p>Central AC, mini-splits, chillers</p>
                  </div>
                </div>
                <div className="service-feature">
                  <div className="feature-icon-wrapper">
                    <i className="fas fa-wind"></i>
                  </div>
                  <div className="feature-text">
                    <h3>Ventilation</h3>
                    <p>Ductwork, air quality, HRV/ERV</p>
                  </div>
                </div>
                <div className="service-feature">
                  <div className="feature-icon-wrapper">
                    <i className="fas fa-tools"></i>
                  </div>
                  <div className="feature-text">
                    <h3>Maintenance</h3>
                    <p>Annual plans, repairs, tune-ups</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-hero-form">
              <div className="form-wrapper">
                <div className="form-header">
                  <h3>Get Your Free Quote</h3>
                  <p>Quick response within 2 hours</p>
                </div>
                <QuickContactForm />
                <div className="form-benefits">
                  <div className="benefit-item">
                    <i className="fas fa-check-circle"></i>
                    <span>No obligation quote</span>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Licensed & insured</span>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Same day service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="main-services">
        <div className="container">
          <div className="services-grid">
            {/* Heating Services */}
            <div className="service-detailed" id="heating">
              <div className="service-header">
                <div className="service-icon">
                  <i className="fas fa-fire"></i>
                </div>
                <div>
                  <h2>Heating Services</h2>
                  <p>Keep your home warm during harsh Canadian winters with our reliable heating solutions.</p>
                </div>
              </div>
              <div className="service-content">
                <div className="service-features">
                  <div className="feature-list">
                    <h3>Our Heating Services Include:</h3>
                    <ul>
                      <li><i className="fas fa-check"></i>Furnace Installation & Replacement</li>
                      <li><i className="fas fa-check"></i>Heat Pump Systems</li>
                      <li><i className="fas fa-check"></i>Boiler Service & Repair</li>
                      <li><i className="fas fa-check"></i>Ductless Heating Systems</li>
                      <li><i className="fas fa-check"></i>Thermostat Installation</li>
                      <li><i className="fas fa-check"></i>Emergency Heating Repairs</li>
                    </ul>
                  </div>
                  <div className="service-benefits">
                    <h3>Why Choose Our Heating Services:</h3>
                    <div className="benefits-grid">
                      <div className="benefit">
                        <i className="fas fa-shield-alt"></i>
                        <h4>Licensed & Insured</h4>
                        <p>Certified technicians with full insurance coverage</p>
                      </div>
                      <div className="benefit">
                        <i className="fas fa-leaf"></i>
                        <h4>Energy Efficient</h4>
                        <p>High-efficiency systems that save on energy bills</p>
                      </div>
                      <div className="benefit">
                        <i className="fas fa-clock"></i>
                        <h4>24/7 Emergency</h4>
                        <p>Round-the-clock emergency heating repairs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cooling Services */}
            <div className="service-detailed" id="cooling">
              <div className="service-header">
                <div className="service-icon">
                  <i className="fas fa-snowflake"></i>
                </div>
                <div>
                  <h2>Cooling Services</h2>
                  <p>Stay comfortable during hot summers with our professional air conditioning services.</p>
                </div>
              </div>
              <div className="service-content">
                <div className="service-features">
                  <div className="feature-list">
                    <h3>Our Cooling Services Include:</h3>
                    <ul>
                      <li><i className="fas fa-check"></i>Central AC Installation</li>
                      <li><i className="fas fa-check"></i>Ductless Mini-Split Systems</li>
                      <li><i className="fas fa-check"></i>AC Repair & Maintenance</li>
                      <li><i className="fas fa-check"></i>Energy Efficiency Upgrades</li>
                      <li><i className="fas fa-check"></i>Smart Thermostat Integration</li>
                      <li><i className="fas fa-check"></i>Commercial HVAC Solutions</li>
                    </ul>
                  </div>
                  <div className="service-benefits">
                    <h3>Cooling System Benefits:</h3>
                    <div className="benefits-grid">
                      <div className="benefit">
                        <i className="fas fa-thermometer-half"></i>
                        <h4>Perfect Temperature</h4>
                        <p>Consistent cooling throughout your space</p>
                      </div>
                      <div className="benefit">
                        <i className="fas fa-dollar-sign"></i>
                        <h4>Cost Savings</h4>
                        <p>Energy-efficient systems reduce utility costs</p>
                      </div>
                      <div className="benefit">
                        <i className="fas fa-tools"></i>
                        <h4>Expert Installation</h4>
                        <p>Professional installation with warranty</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ventilation Services */}
            <div className="service-detailed" id="ventilation">
              <div className="service-header">
                <div className="service-icon">
                  <i className="fas fa-wind"></i>
                </div>
                <div>
                  <h2>Ventilation Services</h2>
                  <p>Improve your indoor air quality with our comprehensive ventilation solutions.</p>
                </div>
              </div>
              <div className="service-content">
                <div className="service-features">
                  <div className="feature-list">
                    <h3>Our Ventilation Services Include:</h3>
                    <ul>
                      <li><i className="fas fa-check"></i>Ductwork Installation & Repair</li>
                      <li><i className="fas fa-check"></i>Air Quality Testing</li>
                      <li><i className="fas fa-check"></i>Ventilation System Design</li>
                      <li><i className="fas fa-check"></i>Air Filter Replacement</li>
                      <li><i className="fas fa-check"></i>Exhaust Fan Installation</li>
                      <li><i className="fas fa-check"></i>HRV/ERV Systems</li>
                    </ul>
                  </div>
                  <div className="service-benefits">
                    <h3>Ventilation Benefits:</h3>
                    <div className="benefits-grid">
                      <div className="benefit">
                        <i className="fas fa-lungs"></i>
                        <h4>Better Air Quality</h4>
                        <p>Remove pollutants and improve indoor air</p>
                      </div>
                      <div className="benefit">
                        <i className="fas fa-heartbeat"></i>
                        <h4>Health Benefits</h4>
                        <p>Reduce allergens and improve respiratory health</p>
                      </div>
                      <div className="benefit">
                        <i className="fas fa-home"></i>
                        <h4>Comfort Enhancement</h4>
                        <p>Maintain optimal humidity and air circulation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Maintenance Plans */}
            <div className="service-detailed" id="maintenance">
              <div className="service-header">
                <div className="service-icon">
                  <i className="fas fa-tools"></i>
                </div>
                <div>
                  <h2>Maintenance Plans</h2>
                  <p>Keep your HVAC system running efficiently with our preventive maintenance programs.</p>
                </div>
              </div>
              <div className="service-content">
                <div className="service-features">
                  <div className="feature-list">
                    <h3>Maintenance Plan Includes:</h3>
                    <ul>
                      <li><i className="fas fa-check"></i>Annual System Tune-ups</li>
                      <li><i className="fas fa-check"></i>Priority Service Scheduling</li>
                      <li><i className="fas fa-check"></i>Discounted Repairs (15% off)</li>
                      <li><i className="fas fa-check"></i>Extended Equipment Warranties</li>
                      <li><i className="fas fa-check"></i>Filter Replacement Reminders</li>
                      <li><i className="fas fa-check"></i>Energy Efficiency Reports</li>
                    </ul>
                  </div>
                  <div className="maintenance-plans">
                    <h3>Choose Your Plan:</h3>
                    <div className="plans-grid">
                      <div className="plan-card">
                        <h4>Basic Plan</h4>
                        <div className="plan-price">$149<span>/year</span></div>
                        <ul>
                          <li>1 Annual Tune-up</li>
                          <li>10% Repair Discount</li>
                          <li>Priority Scheduling</li>
                        </ul>
                      </div>
                      <div className="plan-card featured">
                        <h4>Premium Plan</h4>
                        <div className="plan-price">$249<span>/year</span></div>
                        <ul>
                          <li>2 Annual Tune-ups</li>
                          <li>15% Repair Discount</li>
                          <li>Priority Scheduling</li>
                          <li>Filter Replacements</li>
                        </ul>
                        <div className="plan-badge">Most Popular</div>
                      </div>
                      <div className="plan-card">
                        <h4>Commercial Plan</h4>
                        <div className="plan-price">Custom<span>/quote</span></div>
                        <ul>
                          <li>Quarterly Inspections</li>
                          <li>20% Repair Discount</li>
                          <li>24/7 Emergency Service</li>
                          <li>Custom Solutions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-areas">
        <div className="container">
          <h2>Service Areas Across the GTA</h2>
          <p>We proudly serve residential and commercial customers throughout the Greater Toronto Area:</p>
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today for a free consultation and quote on your HVAC needs.</p>
            <div className="cta-buttons">
              <a href="tel:+14165551234" className="btn btn-primary">
                <i className="fas fa-phone"></i>
                Call Now: (416) 555-1234
              </a>
              <a href="/contact" className="btn btn-secondary">
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}