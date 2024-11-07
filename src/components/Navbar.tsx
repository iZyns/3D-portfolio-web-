import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { name: 'about', label: 'About' },
    { name: 'projects', label: 'Projects' },
    { name: 'contact', label: 'Contact' }
];

const socialLinks = [
    { icon: Github, href: 'https://github.com/izyns', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/vnw', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vincentnw24@gmail.com', label: 'Email' }
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = navItems.map(item => ({
                id: item.name,
                element: document.getElementById(item.name)
            }));

            const currentSection = sections.find(section => {
                if (section.element) {
                    const rect = section.element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            setActiveSection(currentSection ? currentSection.id : '');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-gray-900/95 backdrop-blur-md py-4 border-b border-gray-800/50 shadow-lg'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="px-8 lg:px-16 mx-auto max-w-[1920px]">
                <div className="flex justify-between items-center">
                    <motion.a
                        href="#"
                        className="text-3xl font-bold text-white relative group pl-4"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        V<span className="text-indigo-400 mx-1 font-light transition-colors group-hover:text-white">/</span>W
                        <motion.div
                            className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-lg"
                            whileHover={{ scale: 1.2 }}
                        />
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-12 pr-4">
                        <div className="flex space-x-12">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.name)}
                                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${activeSection === item.name
                                        ? 'text-white'
                                        : 'text-gray-300 hover:text-white'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.label}
                                    {activeSection === item.name && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"
                                            initial={false}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-6 pl-12 border-l border-gray-700">
                            {socialLinks.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <item.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50"
                        >
                            <div className="flex flex-col space-y-4 p-6">
                                {navItems.map((item) => (
                                    <motion.button
                                        key={item.name}
                                        onClick={() => scrollToSection(item.name)}
                                        className={`text-left px-4 py-2 rounded-lg transition-colors ${activeSection === item.name
                                            ? 'bg-white/10 text-white'
                                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                            }`}
                                        whileHover={{ x: 10 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                                <div className="flex space-x-4 px-4 pt-4 border-t border-gray-800">
                                    {socialLinks.map((item, index) => (
                                        <motion.a
                                            key={index}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <item.icon size={20} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}