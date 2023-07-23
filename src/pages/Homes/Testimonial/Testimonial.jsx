
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import SectionTitle from '../../../component/SectionTitle';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [])
  return (
    <section>
      <SectionTitle
        heading={'Testimonial'}
        sunmHeading={'what our clients say'}></SectionTitle>
      <div className='my=-10 '>
        <Swiper
          pagination={{
            type: 'progressbar',
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >

          {
            reviews.map(review => <SwiperSlide
              key={review._id}>
              <div className='m-24 flex flex-col items-center'>
                <Rating
                  style={{ maxWidth: 180 }}
                  value={ review.rating}
                  readOnly
                />
                <img className='w-16 my-6' src="https://i.ibb.co/VwpDKMF/25672.png" alt="" />
                <p>{review.details}</p>
                <h3 className='text-orange-400 text-2xl'>{review.name}</h3>
              </div>
            </SwiperSlide>)
          }


        </Swiper>

      </div>
    </section>
  );
};

export default Testimonial;