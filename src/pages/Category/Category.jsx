
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../component/SectionTitle';

const Category = () => {
  return (
   <section>
    <SectionTitle
    sunmHeading={'From 11.00 AM to 10.00 PM'}
    heading={'order online'}>      
    </SectionTitle>
     <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-20"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className='text-4xl -mt-20 text-white text-center'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} alt="" />
        <h3 className='text-4xl -mt-20 text-white text-center'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className='text-4xl -mt-20 text-white text-center'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className='text-4xl -mt-20 text-white text-center'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} alt="" />
        <h3 className='text-4xl -mt-20 text-white text-center'>Salads</h3>
        </SwiperSlide>
        
      </Swiper>
   </section>
  );
};

export default Category;