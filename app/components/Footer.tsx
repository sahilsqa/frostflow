import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Link href="/">
                <i className="fas fa-snowflake"></i>
                <span>FrostFlow</span>
              </Link>
            </div>
            <p>
              Professional HVAC services across the Greater Toronto Area. 
              Licensed, insured, and committed to your comfort.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services#heating">Heating Services</Link></li>
              <li><Link href="/services#cooling">Cooling Services</Link></li>
              <li><Link href="/services#ventilation">Ventilation</Link></li>
              <li><Link href="/services#maintenance">Maintenance Plans</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li><a href="tel:+14165551234">(416) 555-1234</a></li>
              <li><a href="mailto:info@frostflow.ca">info@frostflow.ca</a></li>
              <li>Greater Toronto Area</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} FrostFlow. All rights reserved. 
            Licensed HVAC contractor serving the GTA.
          </p>
        </div>
      </div>
    </footer>
  )
}