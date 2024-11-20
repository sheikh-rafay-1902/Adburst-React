// Components/HeroSection.js
import React from 'react';
import { ReactTyped as Typed } from 'react-typed'; // Correct import

const HeroSection = () => {
    return (
        <section className="bg-gradient-9 text-white relative">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 text-center relative z-10">
                <h1
                    className="text-white text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-500 to-pink-500"
                    data-aos="fade-up"
                >
                    Welcome to Adburst
                </h1>
                <h2
                    className="text-white text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-500 to-pink-500"
                    data-aos="fade-up" // Animation for the subheading
                    data-aos-delay="100" // Delay for the subheading
                >
                    <Typed
                        strings={['Your Partner in Digital Marketing']}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                </h2>
                <p
                    className="text-white text-1xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-500 to-pink-500"
                    data-aos="fade-up" // Animation for the paragraph
                    data-aos-delay="200" // Delay for the paragraph
                >
                      <Typed
                        strings={[' We provide top-notch marketing to help grow your business online!']}
                        typeSpeed={20}
                        backSpeed={50}
                        loop
                    />
                   
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
