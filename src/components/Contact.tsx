import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Download, CheckCircle, XCircle } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState<{
        show: boolean;
        message: string;
        type: 'success' | 'error';
    }>({ show: false, message: '', type: 'success' });
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        message: ''
    });

    const showNotification = (message: string, type: 'success' | 'error') => {
        setNotification({ show: true, message, type });
        setTimeout(() => {
            setNotification(prev => ({ ...prev, show: false }));
        }, 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!formRef.current) return;
        if (!import.meta.env.VITE_EMAILJS_SERVICE_ID ||
            !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
            !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
            throw new Error('Missing EmailJS configuration');
        }
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setFormData({
                from_name: '',
                reply_to: '',
                message: ''
            });

            showNotification('Message sent successfully!', 'success');
        } catch (error) {
            console.error('Error sending email:', error);
            showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 bg-gray-900 relative" id="contact">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold text-white text-center mb-12">Get In Touch</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="flex items-center space-x-4">
                                <div className="bg-indigo-500 p-3 rounded-lg">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">Email</h3>
                                    <p className="text-gray-300">vincentnw24@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="bg-indigo-500 p-3 rounded-lg">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">Phone</h3>
                                    <p className="text-gray-300">+1 (206) 532-9727</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="bg-indigo-500 p-3 rounded-lg">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">Location</h3>
                                    <p className="text-gray-300">Washington, USA</p>
                                </div>
                            </div>
                            <a
                                href="/resume.pdf"
                                download="resume.pdf"
                                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                            >
                                <Download className="w-5 h-5" />
                                <span>Download Resume</span>
                            </a>
                        </div>
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    name="from_name"
                                    value={formData.from_name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="reply_to"
                                    value={formData.reply_to}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
            {notification.show && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className={`fixed bottom-5 right-5 flex items-center space-x-2 px-6 py-3 rounded-lg shadow-lg ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                        }`}
                >
                    {notification.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                        <XCircle className="w-5 h-5 text-white" />
                    )}
                    <span className="text-white">{notification.message}</span>
                </motion.div>
            )}
        </section>
    );
}