import React, { useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import emailjs from '@emailjs/browser';
import Loading from './components/Loading';

const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    return (
        <div className="bg-gray-900 min-h-screen">
            <Navbar />
            <Suspense fallback={<Loading />}>
                <Hero />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;