import horizontalLeft from '../../assets/horizontalLine.svg'
import menu1 from '../../assets/menu1.png'
import menu2 from '../../assets/menu2.png'
import menu3 from '../../assets/menu3.png'
import menu4 from '../../assets/menu4.png'
import menuOutline from '../../assets/menuOutline.svg'
import moneyOutline from '../../assets/outlineTk.svg'


const CoffeeMenu = () => {

    const order = [
        {
            id: '1',
            image: menu1,
            title: 'Double Espresso x2',
            subTitle: 'There are many variations of passages Lorem Ipsum form',
            money: '$10'

        },
        {
            id: '2',
            image: menu2,
            title: 'Hazelnut Heaven Latte',
            subTitle: 'There are many variations of passages Lorem Ipsum form',
            money: '$10'

        },
        {
            id: '3',
            image: menu3,
            title: 'Salted Caramel Cold Brew',
            subTitle: 'There are many variations of passages Lorem Ipsum form',
            money: '$10'

        },
        {
            id: '4',
            image: menu4,
            title: 'Coconut Cream Delight (Summer)',
            subTitle: 'There are many variations of passages Lorem Ipsum form',
            money: '$10'

        },
    ]

    return (
        <div className='pb-10 px-10 container mx-auto'>
            <div className='mx-auto w-full space-y-3'>
                <div className='flex gap-2 justify-center'>
                    <img src={horizontalLeft} alt="" />
                    <h2 className='text-[#86371C] font-lemonada font-normal'>Coffee Menu</h2>
                    <img src={horizontalLeft} className='rotate-180' alt="" />
                </div>
                <h3 className='text-[#270A05] font-bakidaHistory text-3xl text-center '>Unlocklive Coffee Menu</h3>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 py-10 pt-20'>

                {
                    order.map(menu =>
                        <div key={menu?.id} className='hover:scale-105 ease-in-out duration-300 hover:rotate-1 flex justify-between items-center border rounded-xl border-[#d6d1cf] p-7'>
                            <div className='flex items-center gap-5'>
                                <div className='relative'>
                                    <img src={menuOutline} className='' alt="" />
                                    <div className='absolute top-2 right-2 left-2'>
                                        <img src={menu?.image} alt="" className={`${menu?.id === "3" && "rounded-full"}`} />
                                    </div>
                                </div>

                                <div>
                                    <h3 className='text-[#270A05] font-Abril text-lg font-normal'>{menu?.title}</h3>
                                    <p className='font-Jost text-[#7d6c69] font-normal'>There are many variations of passages Lorem Ipsum form</p>
                                </div>
                            </div>
                            <div>
                                <div className='relative'>
                                    <img src={moneyOutline} className='' alt="" />
                                    <div className='flex justify-center items-center  absolute top-1 bottom-3 right-0 left-1 bg-[#86371C] w-[26px] h-[26px] md:w-[51px] md:h-[51px] rounded-full'>
                                        <p className='text-xs md:text-lg text-white'>$10</p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            <div className='text-center '>
                <button type="button" className="group rounded-lg  relative h-12 w-40 overflow-hidden border border-[#86371C] text-xl text-[#86371C] hover:text-white"><span className="bg-[#672f1d] ease-in absolute w-[57%]  -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-300 -z-10 skew-x-12"></span><span className="bg-[#86371C] ease-in absolute w-[55%]  translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-300 skew-x-12 -z-10"></span>View All Menu</button>


            </div>
        </div>
    );
};

export default CoffeeMenu;