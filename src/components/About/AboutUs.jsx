// Components/AboutUs.js
import React from 'react';
import { FaRegLightbulb, FaHandshake, FaChartLine, FaStar, FaUsers } from 'react-icons/fa';

function AboutUs() {
  return (
    <section className=" py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl "  style={{ backgroundColor: 'rgba(207, 217, 229, 0.7)' }}>
        <h2
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-500 to-pink-500"
          data-aos="fade-up"
        >
          About Adburst

        </h2>
        <p
          className="mb-8 text-lg text-gray-700"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          At Adburst, we are passionate about creating innovative advertising strategies that help businesses shine in today’s dynamic marketplace. Our team of creative thinkers and marketing experts is dedicated to delivering personalized solutions that amplify your brand's reach and impact. We build strong, trust-based partnerships with our clients, focusing on transparency and exceptional service.


        </p>

        <h3
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-500 to-pink-500"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our Mission
        </h3>
        <p
          className="mb-4 text-gray-600"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          To craft compelling advertising campaigns that connect brands with their audience, driving growth and delivering meaningful results.

        </p>

        <h3
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-500 to-pink-500"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Our Vision
        </h3>
        <p
          className="mb-4 text-gray-600"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          To be a global leader in advertising, inspiring brands worldwide with innovative solutions that transform ideas into success stories.

        </p>

        <h3
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-500 to-pink-500"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Our Values
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-gray-600">
          {[
            { icon: <FaRegLightbulb className="text-3xl mr-2 text-blue-500" />, label: 'Innovation' },
            { icon: <FaHandshake className="text-3xl mr-2 text-green-500" />, label: 'Integrity' },
            { icon: <FaChartLine className="text-3xl mr-2 text-yellow-500" />, label: 'Collaboration' },
            { icon: <FaStar className="text-3xl mr-2 text-purple-500" />, label: 'Excellence' },
            { icon: <FaUsers className="text-3xl mr-2 text-red-500" />, label: 'Customer Focus' },
          ].map((value, index) => (
            <li
              key={index}
              className="flex items-center transition-transform transform hover:scale-110" // Hover effect
              data-aos="fade-up"
              data-aos-delay={700 + index * 100}
            >
              {value.icon}
              <span>{value.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutUs;
