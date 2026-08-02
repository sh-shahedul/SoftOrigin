
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaFacebookF, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhoneAlt 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Top Accent Line */}
      <div className="h-1 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700" />

      {/* Main Footer Content */}
      <div className="mx-auto max-w-[1440px] px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-4xl font-bold text-white">
             
              Soft<span className='text-blue-700'>Origin</span>
             
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              We craft high-performance, scalable web applications and enterprise software solutions tailored to your business needs.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: <FaGithub />, link: 'https://github.com/sh-shahedul' },
                { icon: <FaLinkedinIn />, link: '#' },
                { icon: <FaTwitter />, link: '#' },
                { icon: <FaFacebookF />, link: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80 text-slate-300 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-md hover:shadow-blue-600/20"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-white tracking-wider uppercase font-mono">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', path: '#' },
                { name: 'About Us', path: '#' },
                { name: 'Projects', path: '/projects' },
                { name: 'Services', path: '#' },
                { name: 'Contact', path: '#' },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className="inline-block transition-colors duration-200 hover:text-blue-400 hover:translate-x-1 transform"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-white tracking-wider uppercase font-mono">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-500 shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500 shrink-0" />
                <a href="mailto:contact@softorigin.com" className="hover:text-blue-400 transition-colors">
                  shahedulhoque2003@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-500 shrink-0" />
                <a href="tel:+880123456789" className="hover:text-blue-400 transition-colors">
                  +880 1700-000000
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-white tracking-wider uppercase font-mono">
              Newsletter
            </h3>
            <p className="mb-4 text-sm text-slate-400">
              Subscribe to our newsletter to receive the latest news and project updates.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25 active:scale-[0.98]"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} SoftOrigin. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;