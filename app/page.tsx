// app/page.tsx
"use client"
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import PhonesGrid from './components/PhonesGrid';
import ProjectsSection from './components/ProjectsSection';
import cyberbarImg from '../public/img/cyberbar.png';
import React from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom }
  })
};

export default function HomePage() {
  const testimonials = [
    {
      id: 1,
      text: "Cyber Bar's service was outstanding. The repair was fast and the quality exceeded my expectations!",
      author: "John Doe",
    },
    {
      id: 2,
      text: "I love the modern design and the attention to detail. Highly recommended!",
      author: "Jane Smith",
    },
    {
      id: 3,
      text: "Exceptional experience from start to finish. The team truly knows their stuff.",
      author: "Alice Johnson",
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 transition-colors duration-500">
      {/* Header */}
      <motion.header
        className="sticky top-0 z-50 bg-white shadow-lg transition-colors duration-500"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={0.2}
      >
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <Image src={cyberbarImg} alt="Cyber Bar" width={120} height={40} />
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="#features" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#phones" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Phones
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <motion.section
          className="relative text-center py-32 bg-gradient-to-r from-blue-600 to-purple-700 overflow-hidden"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          {/* Parallax Background */}
          <div className="absolute inset-0 bg-fixed bg-center bg-cover opacity-30" style={{ backgroundImage: "url('/img/hero-bg.jpg')" }}></div>
          <div className="relative container mx-auto px-6">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
              Welcome to Cyber Bar
            </h2>
            <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto drop-shadow-md">
              Your one-stop solution for iPhone screen replacement and web development services.
            </p>
            <Link
              href="/services"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300"
            >
              Our Services
            </Link>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          id="features"
          className="py-20 bg-gray-100"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          <div className="container mx-auto px-6">
            <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-lg shadow-lg transition-transform"
              >
                <h4 className="text-2xl font-semibold text-gray-900 mb-3">Fast Service</h4>
                <p className="text-gray-600">
                  Quick turnaround on iPhone repairs and responsive web solutions.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-lg shadow-lg transition-transform"
              >
                <h4 className="text-2xl font-semibold text-gray-900 mb-3">Quality Work</h4>
                <p className="text-gray-600">
                  High-quality repair services and modern web development practices.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-lg shadow-lg transition-transform"
              >
                <h4 className="text-2xl font-semibold text-gray-900 mb-3">Expert Team</h4>
                <p className="text-gray-600">
                  Experienced professionals ready to tackle your technology challenges.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Phones Grid Section */}
        <motion.section
          id="phones"
          className="py-20 bg-gray-50"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1.0}
        >
          <div className="container mx-auto px-6">
            <PhonesGrid />
          </div>
        </motion.section>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Testimonials Section */}
        <motion.section
          id="testimonials"
          className="py-20 bg-white"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
        >
          <div className="container mx-auto px-6">
            <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">Testimonials</h3>
            <div className="relative max-w-xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[currentTestimonial].id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-xl text-gray-700 italic mb-4">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    - {testimonials[currentTestimonial].author}
                  </p>
                </motion.div>
              </AnimatePresence>
              <div className="flex justify-between mt-6">
                <button
                  onClick={prevTestimonial}
                  className="text-gray-600 hover:text-gray-900"
                  aria-label="Previous testimonial"
                >
                  &larr;
                </button>
                <button
                  onClick={nextTestimonial}
                  className="text-gray-600 hover:text-gray-900"
                  aria-label="Next testimonial"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-20 bg-blue-50"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1.2}
        >
          <div className="container mx-auto px-6">
            <h3 className="text-4xl font-bold text-gray-900 text-center mb-6">Get in Touch</h3>
            <p className="text-center text-gray-600 mb-10">
              Have questions? Contact us for more details about our services.
            </p>
            <div className="max-w-md mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full border-gray-300 text-gray-900 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full border-gray-300 text-gray-900 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full border-gray-300 text-gray-900 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        className="bg-white py-8"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={1.4}
      >
        <div className="container mx-auto px-6 text-center text-gray-600">
          &copy; {new Date().getFullYear()} Cyber Bar. All rights reserved.
        </div>
      </motion.footer>
    </div>
  );
}

