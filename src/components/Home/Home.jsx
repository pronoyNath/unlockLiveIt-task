import Banner from '../Banner/Banner';
import IntroVideo from '../IntroVideo/IntroVideo';
import Navbar from '../Navbar/Navbar';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <IntroVideo />
            <WhyChooseUs />
        </div>
    );
};

export default Home;