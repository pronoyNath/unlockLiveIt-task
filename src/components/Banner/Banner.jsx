import bannerImage from '../../assets/banner.png'
import bannerBG from '../../assets/bannerBG.png'
import e1 from '../../assets/e1.png'
import e2 from '../../assets/e2.png'
import e3 from '../../assets/e3.png'

const Banner = () => {
    return (
        <div className=''>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerBG})` }}>
                <div className="container mx-auto px-10">
                    <div className="">
                        <div className="hero">
                            <div className="flex flex-col lg:flex-row-reverse justify-between items-center">
                                <img src={bannerImage} className="max-w-xl" />
                                <div className='text-[#270A05] space-y-5'>
                                    <p className='font-lemonada font-bold'>WELCOME TO OUR</p>
                                    <h1 className="text-6xl font-bold font-bakidaHistory">Unlocklive</h1>
                                    <p className='font-bakidaHistory text-3xl'>Elevating Your Coffee Experience</p>
                                    <p className="py-6 font-Jost text-[#7d6c69]">Unlocklive  embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.</p>
                                    <div className='flex flex-col pb-10 lg:pb-0 md:flex-row gap-10'>
                                        <button className="btn hover:bg-[#884c38] bg-[#86371C] text-white font-light font-Jost">EXPLORE OUR MENU</button>
                                        <div>
                                            <div className="flex  gap-5 items-center justify-center">
                                                <div className="flex -space-x-4">
                                                    <img alt="" className="w-12 h-12  rounded-full " src={e1} />
                                                    <img alt="" className="w-12 h-12  rounded-full " src={e2} />
                                                    <img alt="" className="w-12 h-12  rounded-full " src={e3} />
                                                </div>
                                                <div>
                                                    <p className='font-Abril text-lg'>1200+</p>
                                                    <p className='font-Jost text-sm text-[#7d6c69]'>Tasty Variant Coffee</p>
                                                </div>
                                            </div>
                                        </div>
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