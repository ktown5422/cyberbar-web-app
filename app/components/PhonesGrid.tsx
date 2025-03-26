
import React, { useState } from 'react';
import phones from '../data/Phones';

interface Phone {
    id: number;
    title: string;
    description: string;
    picture: string;
    price: string;
}

const PhoneCard = ({ phone }: { phone: Phone }) => {
    const [expanded, setExpanded] = useState(false);

    const sentenceLimit = 2;
    const sentences = phone.description.split(/(?<=\.)\s+/);
    const truncatedDescription =
        sentences.length > sentenceLimit
            ? sentences.slice(0, sentenceLimit).join(' ') + '...'
            : phone.description;

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <img
                src={phone.picture}
                alt={phone.title}
                className="w-full h-75 object-fill rounded mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{phone.title}</h3>
            <p className="text-gray-600 mb-2">
                {expanded ? phone.description : truncatedDescription}
            </p>
            {sentences.length > sentenceLimit && (
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-blue-600 font-bold"
                >
                    {expanded ? 'Show less' : 'Read more'}
                </button>
            )}
            <p className="text-blue-600 font-bold">{phone.price}</p>
        </div>
    );
};

const PhonesGrid = () => {
    return (
        <section id="phones" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Our Phone Repair Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {phones.map((phone) => (
                        <PhoneCard key={phone.id} phone={phone} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PhonesGrid;