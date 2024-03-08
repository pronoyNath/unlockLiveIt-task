import bannerImage from '../../assets/banner.png'
import bannerBG from '../../assets/bannerBG.png'

const Banner = () => {
    return (
        <div>
            {/* <div className="hero min-h-[500px] ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImage} className="max-w-lg" />
                    <div>
                        <p>WELCOME TO OUR</p>
                        <h1 className="text-5xl font-bold">Unlocklive</h1>
                        <p>Elevating Your Coffee Experience</p>
                        <p className="py-6">Unlocklive  embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.</p>
                        <div>
                            <button className="btn btn-primary">EXPLORE OUR MENU</button>
                            <p>xxxxx</p>
                        </div>
                    </div>
                </div>
            </div> */}



            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerBG})` }}>
                <div className="hero-content ">
                    <div className="">
                        <div className="hero">
                            <div className="hero-content flex-col lg:flex-row-reverse items-center">
                                <img src={bannerImage} className="max-w-xl" />
                                <div className='text-[#270A05] space-y-5'>
                                    <p className='font-lemonada font-bold'>WELCOME TO OUR</p>
                                    <h1 className="text-6xl font-bold font-bakidaHistory">Unlocklive</h1>
                                    <p className='font-bakidaHistory text-3xl'>Elevating Your Coffee Experience</p>
                                    <p className="py-6 font-Jost font-light">Unlocklive  embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional <br /> coffee experience that transcends the ordinary.</p>
                                    <div>
                                        <button className="btn btn-primary font-semibold font-Jost">EXPLORE OUR MENU</button>
                                        <p>xxxxx</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;