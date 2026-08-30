import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white/80 py-20 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-3xl font-serif text-warm-white tracking-widest block mb-4">
              AURA
            </Link>
            <p className="text-sm font-light leading-relaxed mb-6">
              Premium event planning, design and experiences crafted around your vision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-champagne transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="hover:text-champagne transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="hover:text-champagne transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg text-warm-white mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><Link href="/" className="hover:text-champagne transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-champagne transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-champagne transition-colors">Services</Link></li>
              <li><Link href="/events" className="hover:text-champagne transition-colors">Portfolio</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg text-warm-white mb-6">Legal</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><Link href="#" className="hover:text-champagne transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-champagne transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-champagne transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg text-warm-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-champagne shrink-0 mt-0.5" />
                <span>123 Luxury Avenue<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-champagne shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-champagne shrink-0" />
                <span>hello@auraevents.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-12 border-t border-white/5">
          <p className="font-serif text-xl md:text-2xl text-warm-white tracking-widest mb-4">
            CRAFTING MOMENTS. CREATING MEMORIES.
          </p>
          <p className="text-xs font-light text-warm-white/40">
            &copy; {new Date().getFullYear()} Aura Event Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
