import WhyChoosePic from '../../assets/whyChoose.png'
import horizontalLine from '../../assets/horizontalLine.svg'

const WhyChooseUs = () => {
    return (
        <div className='px-20 pt-40 pb-10'>
            <div className="hero min-h-screen">
                <div className="hero-content justify-between items-center flex-col lg:flex-row-reverse w-full">
                    <img src={WhyChoosePic} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='space-y-3 max-w-2xl'>
                        <div className='flex gap-2'>
                            <img src={horizontalLine} alt="" />
                            <p className='font-lemonada text-[#86371C] font-semibold'>Why Choose Us</p>
                        </div>
                        <h1 className="text-5xl font-bakidaHistory font-normal text-[#270A05]">Choosing Unlocklive, A Taste of Perfection</h1>
                        <p className="py-6 font-Jost text-[#7d6c69]">Unlocklive takes pride in the art of roasting, transforming raw coffee beans into a <br /> symphony of aromatic notes and rich flavors.</p>

                        <div className='text-[#270A05] flex justify-between'>
                            <div className='border rounded-xl border-[#d6d1cf] p-7 h-[130px] w-[190px] text-center'>
                                <h3 className='text-4xl font-bakidaHistory'>20+</h3>
                                <p className='font-Jost font-base'>Years Experience</p>
                            </div>
                            <div className='relative rotate-1 border rounded-xl border-[#d6d1cf] p-7 h-[130px] w-[190px] text-center'>
                                <h3 className='text-4xl font-bakidaHistory'>100+</h3>
                                <p className='font-Jost font-base'>Master Chefs</p>
                                <div className='absolute left-0 top-0 rotate-6 border border-[#d6d1cf] rounded-xl  p-7 h-[130px] w-[190px]'></div>
                            </div>
                            <div className='border rounded-xl border-[#d6d1cf] p-7 h-[130px] w-[190px] text-center'>
                                <h3 className='text-4xl font-bakidaHistory'>30+</h3>
                                <p className='font-Jost font-base'>Achievements</p>
                            </div>
                        </div>

                        <p className='py-6 font-Jost text-[#7d6c69]'>
                            Your choice to savor our coffee is an invitation to experience the epitome of craftsmanship, flavor, and dedication.
                        </p>

                        <button className="btn btn-outline hover:bg-[#86371C] hover:border-none text-[#86371C] outline-[#86371C]">Explore Our Menus</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;