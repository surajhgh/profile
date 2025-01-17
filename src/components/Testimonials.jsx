import React from 'react';

function Testimonials() {
  // Sample testimonials data
  const testimonials = [
    {
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg', // Example image
      rating: 5,
      comment: 'This service is amazing!',
      clientName: 'John Doe',
      clientTitle: 'CEO, Example Corp'
    },
    {
      profileImage: 'https://randomuser.me/api/portraits/women/2.jpg', // Example image
      rating: 4,
      comment: 'I couldn\'t be happier with the results.',
      clientName: 'Jane Smith',
      clientTitle: 'Marketing Head, Creative Inc.'
    },
    {
      profileImage: 'https://randomuser.me/api/portraits/men/3.jpg', // Example image
      rating: 5,
      comment: 'A game changer for our business.',
      clientName: 'Mike Johnson',
      clientTitle: 'Founder, TechHub'
    },
    {
      profileImage: 'https://randomuser.me/api/portraits/women/4.jpg', // Example image
      rating: 4,
      comment: 'Highly recommend this team.',
      clientName: 'Emily Davis',
      clientTitle: 'Director, Startup Co.'
    }
  ];

  return (
    <div className="testimonials-section bg-gradient-to-r from-[#f2f2f2] to-[#f7f9fb]">
      <div className="header text-center">
        <p className="text-blue-500 text-3xl">TESTIMONIALS</p>
        <p className="font-bold text-black">The Trust from Clients</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6 mt-6 ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-box p-4 bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-5xl bg-gradient-to-r from-[#8fe1c3] to-[#5085a5]"
          >
            <div className="profile-container flex flex-col items-center mb-4 ">
              <img
                src={testimonial.profileImage}
                alt={`${testimonial.clientName} profile`}
                className="w-24 h-24 rounded-full border-2 border-blue-500"
              />
              <div className="rating mt-2">
                {'★'.repeat(testimonial.rating)}{' '}
                {'☆'.repeat(5 - testimonial.rating)}
              </div>
            </div>

            <p className="comment text-center italic mb-2">{testimonial.comment}</p>
            <p className="client-name text-center font-semibold">{testimonial.clientName}</p>
            <p className="client-title text-center text-gray-500">{testimonial.clientTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
