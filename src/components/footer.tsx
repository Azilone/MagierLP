import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 rounded-t-[32px] mt-12 px-4 sm:px-8 lg:px-16 pt-10 md:pt-12 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* 3-column layout for desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-8 md:pb-10 border-b border-gray-100">
          {/* Branding & Social */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <Link href="/" className="flex flex-col items-center md:items-start gap-2 group">
              <Image src="/images/logo.webp" alt="GetPawtrait" width={56} height={56} className="w-14 h-14 rounded-lg transition-transform duration-300 group-hover:scale-105" />
              <span className="font-black text-lg text-text-primary group-hover:text-accent transition-colors">GetPawtrait</span>
            </Link>
            <span className="text-sm text-gray-500 text-center md:text-left">French Support Team 🇫🇷<br />We're here to help!</span>
            <div className="mt-2">
              <span className="block text-sm text-gray-700 mb-2">Follow us</span>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-accent transition"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 12.03 9.03c0 .352.04.695.116 1.022C8.728 9.89 5.8 8.3 3.785 5.98a4.48 4.48 0 0 0-.606 2.254c0 1.555.792 2.93 2.002 3.736a4.48 4.48 0 0 1-2.03-.56v.057a4.48 4.48 0 0 0 3.6 4.393c-.193.053-.397.08-.607.08-.148 0-.292-.014-.432-.04a4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.07a12.7 12.7 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.77 0-.195-.004-.39-.013-.583A9.1 9.1 0 0 0 24 4.59a8.98 8.98 0 0 1-2.6.713Z" /></svg></a>
                <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-accent transition"><svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg></a>
                <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-accent transition"><svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 10v4m0 0v4m0-4h.01M17 14v-2a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2m0 0v4m0-4h.01" strokeLinecap="round"/></svg></a>
              </div>
            </div>
          </div>

          {/* Navigation & Resources */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 text-sm justify-center">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-base uppercase tracking-wide">Navigation</h4>
              <ul className="space-y-2">
                <li><Link href="#services" className="text-gray-600 hover:text-accent transition">Services</Link></li>
                <li><Link href="#customers" className="text-gray-600 hover:text-accent transition">Customers</Link></li>
                <li><Link href="#pricing" className="text-gray-600 hover:text-accent transition">Pricing</Link></li>
                <li><Link href="#company" className="text-gray-600 hover:text-accent transition">Company</Link></li>
                <li><Link href="#how-it-works" className="text-gray-600 hover:text-accent transition">How it works</Link></li>
                <li><Link href="/faq" className="text-gray-600 hover:text-accent transition">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-base uppercase tracking-wide">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-gray-600 hover:text-accent transition">Blog</Link></li>
                <li><Link href="/newsletter" className="text-gray-600 hover:text-accent transition">Newsletter</Link></li>
                <li><Link href="/freebies" className="text-gray-600 hover:text-accent transition">Freebies</Link></li>
                <li><Link href="#work" className="text-gray-600 hover:text-accent transition">Our Work</Link></li>
              </ul>
            </div>
          </div>

          {/* Shipping & Payment Info */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div>
              <span className="font-semibold text-base text-gray-800 uppercase tracking-wide">Tracked Shipping Available</span>
              <div className="flex items-center justify-center md:justify-end gap-3 mt-3">
                <Image src="/images/brand/Logo UPS.svg" alt="UPS" width={32} height={16} />
                <Image src="/images/brand/FedEx Express.svg" alt="FedEx" width={32} height={16} />
                <Image src="/images/brand/Logo USPS.svg" alt="USPS" width={32} height={16} />
              </div>
            </div>
            <div>
              <span className="font-semibold text-base text-gray-800 uppercase tracking-wide">Secure Payment</span>
              <div className="flex items-center justify-center md:justify-end gap-3 mt-3">
                <Image src="/images/brand/Logo Visa Inc.svg" alt="VISA from Visa Inc." width={28} height={16} />
                <Image src="/images/brand/Logo Mastercard.svg" alt="MasterCard from Mastercard" width={28} height={16} />
                <Image src="/images/brand/American Express Icon.svg" alt="American Express from American Express" width={28} height={16} />
                <Image src="/images/brand/SVG Paypal.svg" alt="PayPal from PayPal" width={28} height={16} />
                <Image src="/images/brand/Logo Apple Pay.svg" alt="Apple Pay from Apple" width={28} height={16} />
              </div>
            </div>
            <div className="mt-2 flex flex-col items-center md:items-end gap-2">
              <Image src="/images/brand/usa.svg" alt="USA Flag" width={36} height={24} />
              <span className="font-semibold text-xs text-gray-700">Printed in USA</span>
            </div>
          </div>
        </div>
        {/* Copyright row */}
        <div className="pt-8 md:pt-10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} GetPawtrait. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;