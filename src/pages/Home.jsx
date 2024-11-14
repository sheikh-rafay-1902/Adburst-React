import Navbar2 from '../components/Navbar/Navbar2';
import Banner from '../components/Banner/Banner';
import Highlight from '../components/Highlights/Highlight';
import Technical from '../components/Technical/Technical';
import About from '../components/About/About';
// import Partners from '../components/Partners/Partners';
import Footer from '../components/Footer/Footer';
import Collab from '../components/Collab/Collab';

const Home = () => {
    return (
        <div>
            <div className='z-100'>

            <Navbar2 />
            </div>
            <Banner />
            <Highlight />
            <Technical/>
            <About />

            <div className='-mt-20'>
            <Collab />
            </div>

            <Footer  />
        </div>
    );
};

export default Home;
