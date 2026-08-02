import  { useState, useEffect, useRef } from 'react';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import logo from "../../assets/soft-origin-logo.png";
// Simple links — no dropdown
const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'Our Services', href: '#services' },
    { label: 'Our Projects', href: '#projects' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blogs', href: '#blogs' },
]

// About Us dropdown items — edit this array to change the menu
const ABOUT_DROPDOWN = [
    { label: 'About', href: '#about' },
    { label: 'Our Story', href: '#our-story' },
    { label: 'Mission & Vision', href: '#mission-vision' },
    { label: 'Management Board', href: '#management' },
    { label: 'Our Developers', href: '#developers' },
    { label: 'Testimonial', href: '#testimonial' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'FAQs', href: '#faqs' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close About dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (aboutRef.current && !aboutRef.current.contains(e.target)) {
                setAboutOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${
                scrolled ? 'shadow-md shadow-slate-900/5' : 'shadow-none'
            }`}
        >
            <div className="max-w-[1440PX] mx-auto px-6 lg:px-10">
                <div className="flex items-center justify-between h-28 py-4">
                    {/* Logo — replace src below with your own logo image */}
                    <a href="#home" className="flex items-center gap-2.5 shrink-0">
                        <img src={logo} alt="SoftOrigin" className="h-14 w-[200px]" />
                        
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-7">
                        {/* Home */}
                        <a
                            href="#home"
                            className="relative text-xl font-medium text-slate-600 hover:text-[#001E5F] transition-colors duration-200 group"
                        >
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#001E5F] transition-all duration-300 group-hover:w-full" />
                        </a>

                        {/* About Us — dropdown */}
                        <div className="relative" ref={aboutRef}>
                            <button
                                onClick={() => setAboutOpen(!aboutOpen)}
                                className="flex items-center gap-1 text-xl font-medium text-slate-600 hover:text-[#001E5F] transition-colors duration-200"
                                aria-expanded={aboutOpen}
                            >
                                About Us
                                <FiChevronDown
                                    size={15}
                                    className={`transition-transform duration-200 ${
                                        aboutOpen ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>

                            <div
                                className={`absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-xl shadow-slate-900/10 border border-slate-100 py-2 transition-all duration-200 origin-top ${
                                    aboutOpen
                                        ? 'opacity-100 scale-100 visible'
                                        : 'opacity-0 scale-95 invisible'
                                }`}
                            >
                                {ABOUT_DROPDOWN.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setAboutOpen(false)}
                                        className="block px-5 py-2.5 text-xl text-slate-600 hover:text-[#001E5F] hover:bg-slate-50 transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Remaining simple links */}
                        {NAV_LINKS.filter((l) => l.label !== 'Home').map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="relative text-xl font-medium text-slate-600 hover:text-[#001E5F] transition-colors duration-200 group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#001E5F] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden lg:block">
                        <a
                            href="#contact"
                            className="inline-flex uppercase items-center rounded-full bg-[#001E5F] text-white px-10 py-3 text-sm font-semibold hover:bg-[#00154a] transition-colors duration-200"
                        >
                           Contact now
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-[#001E5F] p-2"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <nav className="flex flex-col gap-1 px-6 pb-6 pt-2 bg-white border-t border-slate-100 overflow-y-auto">
                    <a
                        href="#home"
                        onClick={() => setIsOpen(false)}
                        className="text-slate-600 hover:text-[#001E5F] hover:bg-slate-50 rounded-lg px-3 py-3 text-sm font-medium transition-colors"
                    >
                        Home
                    </a>

                    {/* About Us — mobile accordion */}
                    <button
                        onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                        className="flex items-center justify-between text-slate-600 hover:text-[#001E5F] hover:bg-slate-50 rounded-lg px-3 py-3 text-sm font-medium transition-colors"
                    >
                        About Us
                        <FiChevronDown
                            size={15}
                            className={`transition-transform duration-200 ${
                                mobileAboutOpen ? 'rotate-180' : ''
                            }`}
                        />
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${
                            mobileAboutOpen ? 'max-h-96' : 'max-h-0'
                        }`}
                    >
                        <div className="flex flex-col pl-4 border-l-2 border-slate-100 ml-3">
                            {ABOUT_DROPDOWN.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-500 hover:text-[#001E5F] rounded-lg px-3 py-2.5 text-sm transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {NAV_LINKS.filter((l) => l.label !== 'Home').map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-slate-600 hover:text-[#001E5F] hover:bg-slate-50 rounded-lg px-3 py-3 text-sm font-medium transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="mt-2 inline-flex justify-center rounded-full bg-[#001E5F] text-white px-5 py-2.5 text-l font-semibold hover:bg-[#00154a] transition-colors"
                    >
                        Schedule a Call
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;