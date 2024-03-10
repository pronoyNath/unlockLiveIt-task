import { useState } from "react";
import carousel01 from '../../assets/carousel01.png'
import carousel02 from '../../assets/carousel02.png'
import carousel03 from '../../assets/carousel03.png'
import horizontalLine from '../../assets/horizontalLine.svg'
import { IoArrowBackCircleOutline } from "react-icons/io5";


const NewRecipieCarousel = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [
        { img: carousel01, title: "Escape 1", des: [{ li1: "Pita bread or wraps" }, { li2: "Pita bread or wraps" }] },
        { img: carousel02, title: "Escape 2", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement." },
        { img: carousel03, title: "Escape 3", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement." },
        { img: carousel02, title: "Escape 4", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement." },
    ];
    const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
    const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);
    const isSmallScreen = window.innerWidth <= 768;

    return (
        <div className="bg-[#FFFAF2]">
            <div className="w-full  lg:h-[540px] xl:h-[580px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50  transform duration-1000 ease-linear z-50 overflow-hidden max-w-[2050px] ml-auto"
            >

                {/* text container here */}
                <div className="w-full lg:w-[40%] pl-10 px-4 left-0 lg:absolute drop-shadow-lg text-white rounded-lg">
                    <div className="space-y-3">
                        <div className="text-[#86371C] flex gap-2">
                            <img src={horizontalLine} alt="" />
                            <h3 className="font-lemonada font-normal ">New Recipes</h3>
                        </div>
                        <div className="space-y-3 ">
                            <h3 className="font-bakidaHistory text-5xl text-[#270A05] ">Taste Our New Recipe</h3>
                            <p className="text-[#53565c]">Malesuada cursus a tincidunt volutpat posuere lacinia. Congue malesuada lacus pharetra ut vel amet. Amet turpis suspendisse porttitor scelerisque amet dolor et. Nisi ac vitae tortor lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing eu sit ornare imperdiet viverra sit vel. </p>
                            <p className="text-[#53565c]">There are many variations of passages of Lorem Ipsum form any injected humour, or randomised words which don't look
                                slightly believable.</p>
                        </div>
                    </div>

                    <div className=" flex gap-3 z-50 mt-5">
                        {/* arrow left */}
                        <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                            <IoArrowBackCircleOutline className="text-[#270a05]  text-5xl" />

                        </button>
                        {/* arrow right */}
                        <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                            <IoArrowBackCircleOutline className="text-[#270a05] rotate-180 text-5xl" />
                        </button>
                    </div>

                </div>
                {/* slider container */}
                <div className="w-full lg:w-[60%] max-w-3xl ml-auto overflow-hidden  lg:absolute -right-5 lg:-right-16 z-50 px-4 py-10">
                    <div className="ease-linear duration-300 flex gap-4 items-center"
                        style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 98 : 200)}px)` }}>
                        {/* sliders */}
                        {sliders.map((slide, inx) => (

                            <div key={inx} className="position-relative group/darkish bg-cover h-[380px] min-w-[270px] drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-3xl" style={{ backgroundImage: `url(${slide.img})` }}>

                                <div className="w-full hidden group-hover/darkish:block h-full position-absolute top-0 left-0 bg-black opacity-60 rounded-3xl transition-opacity duration-300 text-white">
                                    <div className="h-full relative items-end">
                                        <ul className="absolute bottom-8  left-0 text-sm list-disc px-7">
                                            <li className="font-Jost">Pita bread or wraps</li>
                                            <li className="font-Jost">Toppings: tomatoes, tahini sauce, etc.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewRecipieCarousel;