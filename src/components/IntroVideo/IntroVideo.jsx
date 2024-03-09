import vdoIcon from '../../assets/vdoIcon.svg'
import palyBG from '../../assets/playBG.png'
import downArrow from '../../assets/down arrow.png'

const IntroVideo = () => {
    const videoList = [
        {
            id: "1",
            title: "Our Opening Hours",
            date: "Mon - Sat: 07:00 - 18:00",
            place: "Only Sun: 09:00 - 14:00"
        },
        {
            id: "2",
            title: "Our Live Location",
            date: "848 A 28TH ST, Brooklyn ",
            place: "New York, UK"

        },
        {
            id: "3",
            title: "Our Opening Hours",
            date: "+1 318-254-6849",
            place: "+1 452-754-6579"
        },
    ]
    return (
        <div className='bg-[#FFFAF2] w-full  text-[#270A05]'>
            <div className='flex h-[230px] gap-28 container mx-auto'>
                <div className=''>
                    <div className='relative'>
                        <img src={palyBG} alt="" className='h-[300px] w-[300px]' />
                        <div className='absolute top-0 p-5'>
                            <img src={downArrow} alt="" className='mb-5' />
                            <div className='flex gap-2 items-center justify-center'>
                                <img src={vdoIcon} alt="" />
                                <h3 className='text-white text-lg font-Abril font-light'>Play Intro Video</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex-1 flex justify-between w-full items-center'>
                    {
                        videoList.map(play =>
                            <div key={play.id} className={`${play?.id == '2' && "border-x text-center"} ${play?.id == "1" && 'text-left pl-0'} ${play?.id == "3" && 'text-right pr-0'} px-20`}>
                                <h3 className='font-Abril font-light text-lg mb-7'>{play?.title}</h3>
                                <div>
                                    <p className='font-Jost text-[#270A05]'>{play?.date}</p>
                                    <p className='font-Jost text-[#270A05]'>{play?.place}</p>
                                </div>
                            </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default IntroVideo;