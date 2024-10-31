import { motion } from 'framer-motion';
import { Code2, Server, AppWindow } from 'lucide-react';
import { useState } from 'react';

export default function About() {
    const [activeTab, setActiveTab] = useState('education');

    return (
        <section className="py-20 bg-gray-900" id="about">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
                    <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
                        <img
                            src="/file.jpg"
                            alt="Profile"
                            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover object-top"
                        />
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            I'm a Computer Science & Software Engineering graduate from the University of Washington, passionate about building innovative web applications. I specialize in backend development, with hands-on experience in software engineering through internship.
                            From developing full stack web application to implementing AI solutions, I combine technical expertise with creative problem-solving to build impactful applications.</p>
                        <div className="mb-12">
                            <div className="flex justify-center space-x-4 mb-8">
                                <button
                                    className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === 'education'
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                        }`}
                                    onClick={() => setActiveTab('education')}
                                >
                                    Education
                                </button>
                                <button
                                    className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === 'experience'
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                        }`}
                                    onClick={() => setActiveTab('experience')}
                                >
                                    Experience
                                </button>
                            </div>

                            <div className="text-left">
                                {activeTab === 'education' && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                        className="space-y-6"
                                    >
                                        <div className="bg-gray-700 p-6 rounded-lg">
                                            <h3 className="text-xl font-semibold text-white mb-2">
                                                Bachelor of Computer Science & Software Engineering
                                            </h3>
                                            <p className="text-indigo-400 mb-2">University of Washington</p>
                                            <p className="text-gray-300">2022 - 2024</p>
                                        </div>
                                        <div className="bg-gray-700 p-6 rounded-lg">
                                            <h3 className="text-xl font-semibold text-white mb-2">
                                                Associate of Science
                                            </h3>
                                            <p className="text-indigo-400 mb-2">Edmonds College</p>
                                            <p className="text-gray-300">2020 - 2022</p>
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 'experience' && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                        className="space-y-6"
                                    >
                                        <div className="bg-gray-700 p-6 rounded-lg">
                                            <h3 className="text-xl font-semibold text-white mb-2">
                                                Software Engineer Intern
                                            </h3>
                                            <p className="text-indigo-400 mb-2">Indocyber Global Teknologi</p>
                                            <p className="text-gray-300 mb-2">2024</p>
                                            <p className="text-gray-300">
                                                Collaborated with a team of 15 developers to build and develop a financial document processing software.
                                            </p>
                                        </div><div className="bg-gray-700 p-6 rounded-lg">
                                            <h3 className="text-xl font-semibold text-white mb-2">
                                                Hackathon
                                            </h3>
                                            <p className="text-indigo-400 mb-2">UCLA</p>
                                            <p className="text-gray-300 mb-2">2023</p>
                                            <p className="text-gray-300">
                                                Created a platform for global collaboration in education, including a virtual study environment with chatrooms, file/resource sharing, and project collaboration to make education accessible to everyone, regardless of location or socioeconomic status
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-gray-700 rounded-lg">
                                <AppWindow className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-2">Frontend</h3>
                                <p className="text-gray-300">React, Tailwind CSS</p>
                            </div>
                            <div className="p-6 bg-gray-700 rounded-lg">
                                <Server className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-2">Backend</h3>
                                <p className="text-gray-300">Node.js, Express, MongoDB</p>
                            </div>
                            <div className="p-6 bg-gray-700 rounded-lg">
                                <Code2 className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-2">Languages</h3>
                                <p className="text-gray-300">C++, Java, Javascript, Python</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
