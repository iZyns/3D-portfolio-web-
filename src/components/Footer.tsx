import { Github, Linkedin, Mail, Code2, Heart, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
    { icon: Github, href: 'https://github.com/izyns', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/vnw', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vincentnw24@gmail.com', label: 'Email' }
];

const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-b from-[#030014] to-gray-900 border-t border-gray-800/50">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
            </div>

            <div className="container mx-auto px-4 py-16 relative">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <motion.div
                        className="col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className="flex items-center gap-2 mb-6"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-2xl font-bold text-white">
                                Vincent Wirawan
                            </h3>
                        </motion.div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            A recent Computer Science & Software Engineering graduate from the University of Washington with a strong foundation in backend development and software engineering.
                            Proven track record through internships and projects, always eager to embrace new technologies and challenges.
                        </p>
                        <div className="flex items-center gap-1 text-gray-400 text-sm">
                            <span>Made with</span>
                            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                            <span>and</span>
                            <Coffee className="w-4 h-4 text-amber-500" />
                        </div>
                    </motion.div>

                    {/* Quick Links Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {quickLinks.map((link, index) => (
                                <motion.li key={index} whileHover={{ x: 5 }}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="h-px w-4 bg-gray-700 group-hover:w-6 group-hover:bg-indigo-500 transition-all" />
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
                        <ul className="space-y-4">
                            {socialLinks.map((link, index) => (
                                <motion.li key={index} whileHover={{ x: 5 }}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-3 group"
                                    >
                                        <span className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-indigo-500/10 transition-colors">
                                            <link.icon className="w-4 h-4" />
                                        </span>
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    className="mt-16 pt-8 border-t border-gray-800/50"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Code2 className="w-4 h-4" />
                            <p>© {currentYear} Vincent Wirawan. All rights reserved.</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <link.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}