import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp, faSkype } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer2 = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <footer className="bg-custom-gradient text-white py-12">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 px-6">
                {/* Logo and Social Icons */}
                <div className="text-center md:text-left" data-aos="fade-up">
                    <img
                        src="./Images/Logo 2.png"
                        alt="Company Logo"
                        className="w-28 h-28 rounded-full mx-auto md:mx-0 mb-4"
                    />
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a
                            href="https://www.linkedin.com/in/ad-burst-a2b621330/"
                            className="text-2xl hover:text-gray-300 transition"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a
                            href="https://api.whatsapp.com/send?phone=447724695771"
                            className="text-2xl hover:text-gray-300 transition"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                        <a
                            href="skype:live:.cid.e76b671530a947f2"
                            className="text-2xl hover:text-gray-300 transition"
                        >
                            <FontAwesomeIcon icon={faSkype} />
                        </a>
                    </div>
                </div>

                {/* Business Hours */}
                <div className="text-center md:text-left" data-aos="fade-up" data-aos-delay="100">
                    <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
                    <ul className="text-black-200 space-y-2">
                        <li>Mon - Fri: 09:00 am - 07:00 pm</li>
                        <li>Saturday: 10:00 am - 05:00 pm</li>
                        <li>Sunday: Closed</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="text-center md:text-left" data-aos="fade-up" data-aos-delay="200">
                    <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
                    <ul className="text-white-200 space-y-2">
                        <li>
                            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                            9 Rodgers Quay, Belfast, United Kingdom
                        </li>
                        <li>
                            <a href="mailto:contact@adburst.uk" className="hover:text-gray-300 transition">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                contact@adburst.uk
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info@adburst.uk" className="hover:text-gray-300 transition">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                info@adburst.uk
                            </a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhone} className="mr-2" />
                            +447724695771
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 text-center text-white-400 text-sm">
                © {new Date().getFullYear()} Ad Burst. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer2;
