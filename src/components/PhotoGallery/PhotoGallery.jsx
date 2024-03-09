import img1 from '../../assets/gallery1.png'
import img2 from '../../assets/gallery2.png'
import img3 from '../../assets/gallery3.png'
import img4 from '../../assets/gallery4.png'
import img5 from '../../assets/gallery5.png'

const PhotoGallery = () => {
    return (
        <div className='px-24'>
            <div className='grid grid-cols-12 gap-5'>
                <div className='col-span-4'>
                    <img src={img1} alt="" />
                </div>
                <div className='col-span-8'>
                    <img src={img2} alt="" />
                </div>
                <div className='col-span-3'>
                    <img src={img3} alt="" />
                </div>
                <div className='col-span-5'>
                    <img src={img4} alt="" />
                </div>
                <div className='col-span-4'>
                    <img src={img5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;