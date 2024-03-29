import WhyChoosePic from '../../assets/whyChoose.png'
import horizontalLine from '../../assets/horizontalLine.svg'

const WhyChooseUs = () => {
    return (
        <div className='container mx-auto px-10 pt-32 pb-10'>
            <div className="hero  min-h-screen">
                <div className="flex  justify-between items-center flex-col lg:flex-row-reverse w-full">

                    <img src={WhyChoosePic} className="hover:scale-110 hover:shadow-2xl duration-300 ease-in-out max-w-xs md:max-w-md rounded-lg shadow-2xl mx-auto lg:mx-0 h-full mb-10 lg:mb-0" />

                    <div className='space-y-3 max-w-2xl'>
                        <div className='flex gap-2'>
                            <img src={horizontalLine} alt="" />
                            <p className='font-lemonada text-[#86371C] font-semibold'>Why Choose Us</p>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bakidaHistory font-normal text-[#270A05]">Choosing Unlocklive, A Taste of Perfection</h1>
                        <p className="py-6 font-Jost text-[#7d6c69]">Unlocklive takes pride in the art of roasting, transforming raw coffee beans into a <br /> symphony of aromatic notes and rich flavors.</p>

                        <div className='text-[#270A05] flex flex-col items-center gap-7 md:gap-0 md:flex-row justify-between'>
                            <div className='hover:rotate-3 hover:scale-110 duration-300 ease-in-out border rounded-xl border-[#d6d1cf] p-7 h-[130px] w-[190px] text-center'>
                                <h3 className='text-4xl font-bakidaHistory'>20+</h3>
                                <p className='font-Jost font-base'>Years Experience</p>
                            </div>
                            <div className='hover:rotate-3 hover:scale-110 duration-300 ease-in-out relative rotate-1 border rounded-xl border-[#d6d1cf] p-7 h-[130px] w-[190px] text-center'>
                                <h3 className='text-4xl font-bakidaHistory'>100+</h3>
                                <p className='font-Jost font-base'>Master Chefs</p>
                                <div className='hover:-rotate-6  duration-300 ease-in-out absolute left-0 top-0 rotate-6 border border-[#d6d1cf] rounded-xl  p-7 h-[130px] w-[190px]'></div>
                            </div>
                            <div className='hover:-rotate-3 hover:scale-110 duration-300 ease-in-out border rounded-xl border-[#d6d1cf] p-7 h-[130px] w-[190px] text-center'>
                                <h3 className='text-4xl font-bakidaHistory'>30+</h3>
                                <p className='font-Jost font-base'>Achievements</p>
                            </div>
                        </div>

                        <p className='py-6 font-Jost text-[#7d6c69]'>
                            Your choice to savor our coffee is an invitation to experience the epitome of craftsmanship, flavor, and dedication.
                        </p>

                        {/* <button className="btn btn-outline hover:bg-[#86371C] hover:border-none text-[#86371C] outline-[#86371C]">Explore Our Menus</button> */}

                        <button type="button" className="group rounded-lg  relative h-12 w-48 overflow-hidden border border-[#86371C] text-xl text-[#86371C] hover:text-white"><span className="bg-[#672f1d] ease-in absolute w-[57%]  -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-300 -z-10 skew-x-12"></span><span className="bg-[#86371C] ease-in absolute w-[55%]  translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-300 skew-x-12 -z-10"></span>Explore Our Menus</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;