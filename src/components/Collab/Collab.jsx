import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Collab() {
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const logos = [
    {
      alt: "Amazon",
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
    },
    {
      alt: "Google",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    },
    {
      alt: "Magnite",
      src: "https://iabtechlab.com/wp-content/uploads/2024/01/Magnite-logo-black.svg-1024x332.png"
    },
    {
      alt: "Sovrn",
      src: "https://adspace-tech.net/assets/images/sovrn.png"
    },
    {
      alt: "Outbrain",
      src: "https://adspace-tech.net/assets/images/outbrain.png"
    }
  ];

  return (
    <div className="mt-20 relative isolate px-6 bg-custom-gradient-7 pt-14 lg:px-8 ">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="py-24 pt-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-white flex justify-center "
            data-aos="fade-up"
          >
            Our Premium Partners
          </h2>
          <div className="mt-10" data-aos="fade-up">
            <Slider {...settings}>
              {logos.map((logo, index) => (
                <div
                  key={logo.alt}
                  className="flex justify-center items-center p-4 transform transition-transform duration-500 hover:scale-105"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <img
                    alt={logo.alt}
                    src={logo.src}
                    width={158}
                    height={48}
                    className="max-h-12 w-full object-contain transition-opacity duration-300 hover:opacity-80"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
