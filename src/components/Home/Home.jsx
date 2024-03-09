import BannerCarousel from '../Banner/BannerCarousel/BannerCarousel';
import CoffeeMenu from '../CoffeeMenu/CoffeeMenu';
import Footer from '../Footer/Footer';
import IntroVideo from '../IntroVideo/IntroVideo';
import Navbar from '../Navbar/Navbar';
import NewRecipie from '../NewRecipie/NewRecipie';
import Showcase from '../Showcase/Showcase';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Navbar />
            <BannerCarousel />
            <IntroVideo />
            <WhyChooseUs />
            <CoffeeMenu />
            <NewRecipie />
            <Showcase />
            <Footer />
        </div>
    );
};

export default Home;