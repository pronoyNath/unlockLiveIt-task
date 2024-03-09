import footer from '../../assets/footer.png'
import footerLogo from '../../assets/footerLogo.png'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=''>
            <div className="hero" style={{ backgroundImage: `url(${footer})` }}>
                <div className="hero-overlay bg-[#270A05] bg-opacity-[24%] p-4"></div>
                <div className="footer items-center text-center text-neutral-content px-40 p-4">
                    <div>
                        <img src={footerLogo} alt="" />
                    </div>
                    <div className='flex gap-6 justify-center mx-auto'>
                        <h3>Terms</h3>
                        <h3>Privacy</h3>
                        <h3>Cookies</h3>
                    </div>
                    <div className='text-white text-xl flex w-full justify-end gap-6 h-full items-center'>
                        <div className='p-2 border border-[#55504f] rounded-full'>
                            <FaFacebookF className='text-white rounded-full' />
                        </div>
                        <div className='p-2 border border-[#55504f] rounded-full'>
                            <FaLinkedinIn className='' />
                        </div>
                        <div className='p-2 border border-[#55504f] rounded-full'>
                            <FaTwitter className='' />
                        </div>
                    </div>
                </div>
            </div>







        </div>
    );
};

export default Footer;
