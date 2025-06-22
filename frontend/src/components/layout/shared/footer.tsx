import { Briefcase, FileSignature, Shield, FileText, Image } from "lucide-react"
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom";
import { footerNavItems } from "@/constants/data";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Us */}
          <div>
            <h4 className="text-yellow-400 font-bold mb-4">About Us</h4>
            <ul className="space-y-2">
            {footerNavItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="flex items-center gap-2 text-white hover:text-yellow-300">
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-yellow-400 font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="flex items-center gap-2 text-white hover:text-yellow-300"><Briefcase size={18} />Consulting</Link></li>
              <li><Link to="/contact" className="flex items-center gap-2 text-white hover:text-yellow-300"><FileSignature size={18} />Get a Quote</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-yellow-400 font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link to="https://www.alignable.com/pueblo-co/honor-tech-llc-2" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yellow-300">
                  <img src="https://www.alignable.com/assets/badge/alignable-c2.png" alt="Alignable" className="h-6" />
                  Alignable
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/company/honor-tech-llc" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-yellow-300">
                  <FaLinkedin className="text-[#0077b5] h-6 w-6" />
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/profile.php?id=61571952063852" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-yellow-300">
                  <FaFacebook className="text-[#4267B2] h-6 w-6" />
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="https://x.com/HonortechLLC" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-yellow-300">
                  <FaXTwitter className="h-6 w-6" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 text-center text-sm text-gray-400">
          <p>© 2025 Honor Tech LLC. <br /> All rights reserved.</p>

          <ul className="mt-4 flex justify-center flex-wrap gap-6 text-sm text-white">
            <li><Link to="/privacy" className="flex items-center gap-1 hover:text-yellow-300"><Shield size={16} />Privacy Policy</Link></li>
            <li><Link to="/terms" className="flex items-center gap-1 hover:text-yellow-300"><FileText size={16} />Terms of Service</Link></li>
            <li><Link to="/imagecredits" className="flex items-center gap-1 hover:text-yellow-300"><Image size={16} />Image Credits</Link></li>
          </ul>
        </div>

        <hr className="mt-8 border-gray-700" />
      </div>
    </footer>
  )
}
