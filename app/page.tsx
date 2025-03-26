// app/page.tsx
import Link from 'next/link';
import PhonesGrid from './components/PhonesGrid';
import Image from 'next/image';
import cyberbarImg from '../public/img/cyberbar.png';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Image src={cyberbarImg} alt="Cyber Bar" width={120} height={40} />
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="#features" className="text-gray-600 hover:text-gray-800">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#phones" className="text-gray-600 hover:text-gray-800">
                  Phones
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-gray-800">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="text-center py-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Welcome to Cyber Bar
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Your one-stop solution for iPhone screen replacement and web development services.
          </p>
          <Link
            href="/services"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Our Services
          </Link>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Fast Service</h4>
              <p className="text-gray-600">
                Quick turnaround on iPhone repairs and responsive web solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Quality Work</h4>
              <p className="text-gray-600">
                High-quality repair services and modern web development practices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h4>
              <p className="text-gray-600">
                Experienced professionals ready to tackle your technology challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Phones Grid Section */}
        <PhonesGrid />

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">Get in Touch</h3>
            <p className="text-center text-gray-600 mb-8">
              Have questions? Contact us for more details about our services.
            </p>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
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
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          &copy; {new Date().getFullYear()} Cyber Bar. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
