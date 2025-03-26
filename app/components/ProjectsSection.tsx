// components/ProjectsSection.tsx
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: custom }
    })
};

const projects = [
    {
        id: 1,
        title: "Demo Website",
        description:
            "A demo website showcasing our design and development expertise. It features modern UI/UX, responsive design, and interactive elements.",
        image: "/img/demo-project.jpg", // ensure this image is in your public/img folder
        link: "/demo" // update with your demo project's URL
    },
    {
        id: 2,
        title: "E-commerce Store",
        description:
            "An e-commerce store built with React, Next.js, and Tailwind CSS. It includes features like product search, cart management, and checkout.",
        image: "/img/ecommerce-project.jpg", // ensure this image is in your public/img folder
        link: "/ecommerce" // update with your e-commerce project's URL
    },
    {
        id: 3,
        title: "Blog Website",
        description:
            "A blog website built with Gatsby, GraphQL, and styled-components. It includes features like blog post search, categories, and comments.",
        image: "/img/blog-project.jpg", // ensure this image is in your public/img folder
        link: "/blog" // update with your blog project's URL
    }
];

export default function ProjectsSection() {
    return (
        <motion.section
            id="projects"
            className="py-20 bg-white"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
        >
            <div className="container mx-auto px-6">
                <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">
                    Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-100 p-8 rounded-lg shadow-lg transition-transform"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="rounded mb-4"
                            />
                            <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                                {project.title}
                            </h4>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <Link href={project.link} className="text-blue-600 font-semibold hover:underline">
                                View Project
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
