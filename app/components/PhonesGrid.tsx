// app/components/PhonesGrid.tsx
import React from 'react';
import phones from '../data/Phones';

const PhonesGrid = () => {
    return (
        <section id="phones" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Phone Repair Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {phones.map((phone) => (
                        <div key={phone.id} className="bg-white p-6 rounded-lg shadow">
                            <img
                                src={phone.picture}
                                alt={phone.title}
                                className="w-full h-48 object-cover rounded mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{phone.title}</h3>
                            <p className="text-gray-600 mb-2">{phone.description}</p>
                            <p className="text-blue-600 font-bold">{phone.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PhonesGrid;
