import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-2">
                        <h3 className="text-xl font-bold text-white mb-4">Vincent Wirawan</h3>
                        <p className="text-gray-400 mb-4">
                            A recent Computer Science & Software Engineering graduate from the University of Washington with a strong foundation in backend development and software engineering.
                            Proven track record through internships and projects, always eager to embrace new technologies and challenges.                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="mailto:vincentnw24@gmail.com"
                                    className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2"
                                >
                                    <Mail className="w-4 h-4" />
                                    Email
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/izyns"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2"
                                >
                                    <Github className="w-4 h-4" />
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/vnw/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {currentYear} Vincent Wirawan. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a
                                href="https://github.com/izyns"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-indigo-400 transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/vnw/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-indigo-400 transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:vincentnw24@gmail.com"
                                className="text-gray-400 hover:text-indigo-400 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}