import Banner from '../Banner/Banner';
import CoffeeMenu from '../CoffeeMenu/CoffeeMenu';
import IntroVideo from '../IntroVideo/IntroVideo';
import Navbar from '../Navbar/Navbar';
import NewRecipie from '../NewRecipie/NewRecipie';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <IntroVideo />
            <WhyChooseUs />
            <CoffeeMenu />
            <NewRecipie />
            <PhotoGallery/>
        </div>
    );
};

export default Home;