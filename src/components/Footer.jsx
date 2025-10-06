import { Link } from "react-router-dom";
import { Shield, Lock, CheckCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-playfair font-bold text-primary mb-4">
              Pandit Ashu Bahuguna
            </h3>
            <p className="text-muted-foreground mb-4">
              Expert Vedic Astrologer with 35+ years of experience, serving 50,000+ satisfied clients.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/PanditAshuBahuguna" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com/@AstroAshuPandit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/panditashubahuguna" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/panditashubahuguna" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold    mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/horoscope" className="text-muted-foreground hover:text-primary transition-colors">
                  Daily Horoscope
                </Link>
              </li>
              <li>
                <Link to="/kundli-milan" className="text-muted-foreground hover:text-primary transition-colors">
                  Kundli Milan
                </Link>
              </li>
              <li>
                <Link to="/calculators" className="text-muted-foreground hover:text-primary transition-colors">
                  Calculators
                </Link>
              </li>
              <li>
                <Link to="/panchang" className="text-muted-foreground hover:text-primary transition-colors">
                  Panchang
                </Link>
              </li>
              <li>
                <Link to="/eclipse" className="text-muted-foreground hover:text-primary transition-colors">
                  Eclipse
                </Link>
              </li>
              <li>
                <Link to="/festivals" className="text-muted-foreground hover:text-primary transition-colors">
                  Festivals
                </Link>
              </li>
              <li>
                <Link to="/shubh-muhurat" className="text-muted-foreground hover:text-primary transition-colors">
                  Shubh Muhurat
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold    mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/name-correction" className="text-muted-foreground hover:text-primary transition-colors">
                  Name Correction
                </Link>
              </li>
              <li>
                <Link to="/store" className="text-muted-foreground hover:text-primary transition-colors">
                  Yantras & Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold    mb-4">Contact & Trust</h4>
            <ul className="space-y-3 mb-4 text-sm">
              <li className="text-muted-foreground">📞 +91 9760924411</li>
              <li className="text-muted-foreground text-xs break-all">📧 shriramjyotishsadan16@gmail.com</li>
            </ul>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-xs">
                <Lock className="h-3 w-3 text-primary" />
                <span className="text-muted-foreground">Private & Confidential</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <CheckCircle className="h-3 w-3 text-primary" />
                <span className="text-muted-foreground">Verified Astrologer</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Shield className="h-3 w-3 text-primary" />
                <span className="text-muted-foreground">Secure Payments</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-xs font-semibold   ">Download App</p>
              <div className="flex gap-2">
                <a href="#" className="inline-block">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
                </a>
                <a href="#" className="inline-block">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Pandit Ashu Bahuguna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;