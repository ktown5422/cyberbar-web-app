"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import cyberbarImg from '../../public/img/cyberbar.png';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: custom }
    })
};

export default function HeaderSection() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "#features", label: "Features" },
        { href: "#phones", label: "Phones" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <motion.header
            className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200 transition-all duration-300"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
        >
            <div className="container mx-auto px-8 py-6 flex justify-between items-center">
                <Image src={cyberbarImg} alt="Cyber Bar" width={140} height={45} />
                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-8 text-lg">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="group relative inline-block text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* Mobile Hamburger Menu */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label="Toggle Menu"
                        className="focus:outline-none"
                    >
                        <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Navigation Menu */}
            {isOpen && (
                <nav className="md:hidden border-t border-gray-200">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="group relative inline-block text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </motion.header>
    );
}
