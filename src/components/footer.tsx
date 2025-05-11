import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 rounded-t-[32px] mt-12 py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
        {/* Bloc branding */}
        <div className="flex flex-col items-start gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.webp"
              alt="GetPawtrait"
              width={128}
              height={128}
              className="w-14 h-14 rounded-lg"
            />
            <span className="font-black text-lg text-[#140F23]">GetPawtrait</span>
          </Link>
          <span className="text-sm text-gray-500 mt-2">French Support Team 🇫🇷<br />We're here to help!</span>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-8 md:gap-12">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 text-base">Navigation</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="#services" className="hover:text-[#5F1CFC] transition">Services</Link></li>
              <li><Link href="#customers" className="hover:text-[#5F1CFC] transition">Customers</Link></li>
              <li><Link href="#pricing" className="hover:text-[#5F1CFC] transition">Pricing</Link></li>
              <li><Link href="#company" className="hover:text-[#5F1CFC] transition">Company</Link></li>
              <li><Link href="#how-it-works" className="hover:text-[#5F1CFC] transition">How it works</Link></li>
              <li><Link href="/faq" className="hover:text-[#5F1CFC] transition">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 text-base">Resources</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/blog" className="hover:text-[#5F1CFC] transition">Blog</Link></li>
              <li><Link href="/newsletter" className="hover:text-[#5F1CFC] transition">Newsletter</Link></li>
              <li><Link href="/freebies" className="hover:text-[#5F1CFC] transition">Freebies</Link></li>
              <li><Link href="#work" className="hover:text-[#5F1CFC] transition">Our Work</Link></li>
            </ul>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-gray-900 mb-2 text-base">Follow us</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="hover:text-[#5F1CFC] transition">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M22 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 12.03 9.03c0 .352.04.695.116 1.022C8.728 9.89 5.8 8.3 3.785 5.98a4.48 4.48 0 0 0-.606 2.254c0 1.555.792 2.93 2.002 3.736a4.48 4.48 0 0 1-2.03-.56v.057a4.48 4.48 0 0 0 3.6 4.393c-.193.053-.397.08-.607.08-.148 0-.292-.014-.432-.04a4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.07a12.7 12.7 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.77 0-.195-.004-.39-.013-.583A9.1 9.1 0 0 0 24 4.59a8.98 8.98 0 0 1-2.6.713Z" fill="currentColor"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#5F1CFC] transition">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#5F1CFC] transition">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M7 10v4m0 0v4m0-4h.01M17 14v-2a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2m0 0v4m0-4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} FastFrame. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
