import Navbar2 from '../components/Navbar/Navbar2';
import Banner from '../components/Banner/Banner';
import Highlight from '../components/Highlights/Highlight';
import Technical from '../components/Technical/Technical';
import About from '../components/About/About';
// import Partners from '../components/Partners/Partners';
import Footer2 from '../components/Footer/Footer2';
import Collab from '../components/Collab/Collab';
import Background from '../components/Background/Background';
import AboutUs from '../components/About/AboutUs';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';


const Home = () => {
    return (
        <div className='bg-custom-gradient-8'>
            <div className='z-100 '>
            <Navbar2 />
            </div>
            <HeroSection/>
            {/* <Banner /> */}
            <Background/>
            <Highlight />
            <Background/>
            <Technical/>
            <Background/>
            <AboutUs/>
            <About />
            <Background/>

            <div className='-mt-20'>
            <Collab />
            </div>
            <Background/>
            <Footer  />
            
        </div>
    );
};

export default Home;
