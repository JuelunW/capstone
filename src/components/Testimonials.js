import React from 'react';

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center">
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 m-4">
            <p className="text-gray-700 mb-4">"This service has changed my life! Highly recommend."</p>
            <p className="font-bold">John Doe</p>
          </div>
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 m-4">
            <p className="text-gray-700 mb-4">"Amazing experience, will definitely use again."</p>
            <p className="font-bold">Jane Smith</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;