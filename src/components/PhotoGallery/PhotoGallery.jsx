import img1 from '../../assets/gallery1.png'
import img2 from '../../assets/gallery2.png'
import img3 from '../../assets/gallery3.png'
import img4 from '../../assets/gallery4.png'
import img5 from '../../assets/gallery5.png'

const PhotoGallery = () => {
    return (
        <div className=' container mx-auto px-7'>
            <div className='grid grid-cols-12 gap-5'>
                <div className='col-span-4'>
                    <img src={img1} alt="" className='w-full' />
                </div>
                <div className='col-span-8'>
                    <img src={img2} alt="" className='w-full' />
                </div>
                <div className='col-span-3'>
                    <img src={img3} alt="" className='w-full' />
                </div>
                <div className='col-span-5'>
                    <img src={img4} alt="" className='w-full' />
                </div>
                <div className='col-span-4'>
                    <img src={img5} alt="" className='w-full' />
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;