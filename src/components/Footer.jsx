import { Link } from "react-router-dom";
import { Shield, Lock, CheckCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Social */}
          <div>
            <h3 className="text-xl font-playfair font-bold text-yellow-500 mb-4">
              Pandit Ashu Bahuguna
            </h3>
            <p className="text-gray-500 mb-4">
              Expert Vedic Astrologer with 35+ years of experience, serving 50,000+ satisfied clients.
            </p>
            <div className="flex gap-4">
              {/* Social icons remain the same */}
              <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">Facebook</a>
              <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">YouTube</a>
              <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">Instagram</a>
              <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/horoscope" className="hover:text-red-500 transition-colors">Daily Horoscope</Link></li>
              <li><Link to="/kundli-milan" className="hover:text-red-500 transition-colors">Kundli Milan</Link></li>
              <li><Link to="/calculators" className="hover:text-red-500 transition-colors">Calculators</Link></li>
              <li><Link to="/panchang" className="hover:text-red-500 transition-colors">Panchang</Link></li>
              <li><Link to="/eclipse" className="hover:text-red-500 transition-colors">Eclipse</Link></li>
              <li><Link to="/festivals" className="hover:text-red-500 transition-colors">Festivals</Link></li>
              <li><Link to="/shubh-muhurat" className="hover:text-red-500 transition-colors">Shubh Muhurat</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/name-correction" className="hover:text-red-500 transition-colors">Name Correction</Link></li>
              <li><Link to="/store" className="hover:text-red-500 transition-colors">Yantras & Products</Link></li>
              <li><Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Trust */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contact & Trust</h4>
            <ul className="space-y-3 mb-4 text-sm text-gray-500">
              <li>📞 +91 9760924411</li>
              <li className="text-xs break-all">📧 shriramjyotishsadan16@gmail.com</li>
            </ul>

            <div className="space-y-2 mb-4 text-xs">
              <div className="flex items-center gap-2"><Lock className="h-3 w-3 text-yellow-500"/> Private & Confidential</div>
              <div className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-yellow-500"/> Verified Astrologer</div>
              <div className="flex items-center gap-2"><Shield className="h-3 w-3 text-yellow-500"/> Secure Payments</div>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-gray-800">Download App</p>
              <div className="flex gap-2">
                <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" /></a>
                <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Pandit Ashu Bahuguna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
