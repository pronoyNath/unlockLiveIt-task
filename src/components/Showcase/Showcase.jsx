import line from '../../assets/Line.png'
import PhotoGallery from '../PhotoGallery/PhotoGallery';

const Showcase = () => {
    const tabs = [{ tab: "All" }, { tab: "Burger" }, { tab: "Drinks" }, { tab: "Pizza" }, { tab: "Dinner" }, { tab: "Lunch" }, { tab: "Cookies" }, { tab: "Bakery" }]
    return (
        <div className='pt-20 pb-10 px-10 container mx-auto'>
            <div className='mx-auto w-full space-y-3'>
                <div className='w-full mx-auto text-center space-y-2'>
                    {/* <img src={horizontalLeft} alt="" /> */}
                    <h2 className='text-[#86371C] font-lemonada font-normal'>Showcase</h2>
                    <img src={line} className='h-[2px] w-[10%] mx-auto' alt="" />
                </div>
                <h3 className='text-[#270A05] font-bakidaHistory text-3xl text-center '>Our Chefs New Creations</h3>
                <p className='max-w-xl mx-auto text-center'>
                    Behold the extraordinary creations born from the synergy of our users' ingenuity and the transformative power of AI, a testament to boundless innovation.
                </p>
            </div>
            <div className='flex gap-3 md:gap-7 flex-wrap justify-center my-10'>
                {
                    tabs.map(tab =>
                        <div key={tab?.tab} className={`${tab?.tab == "All" && 'border text-[#86371C] bg-[#fbf9f8] border-[#86371C]'} hover:scale-125  px-5 py-3 font-Jost rounded-full  font-semibold`}>
                            {tab?.tab}
                        </div>)
                }
            </div>
            <PhotoGallery />
        </div>
    );
};

export default Showcase;