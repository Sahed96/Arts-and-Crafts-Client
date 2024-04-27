import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation } from 'swiper/modules';



const Banner = () => {
    return (
        
        <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                autoplay={true}  
    >
      <SwiperSlide>
          <div data-aos="fade-up-right" className="image bg-no-repeat rounded-xl bg-center bg-cover max-w-3xl lg:max-w-full h-[600px] bg-[url(https://i.ibb.co/gjbbnk7/2.png)] ">
            <div className=' relative min-h-full left-48 top-56 rounded-xl'>
                <p className=' text-4xl'>Handy Mart</p>
                <p className=' text-7xl font-bold mt-3'>Art Products</p>
                <button className='btn bg-rose-300 mt-6'>Explore</button>
            </div>
          </div>
          </SwiperSlide>
      <SwiperSlide>
      <div data-aos="fade-up-left" className="image bg-no-repeat rounded-xl border-2 bg-center bg-cover max-w-3xl lg:max-w-full min-h-[600px] bg-[url(https://i.ibb.co/QnsctNt/3.png)] ">
            <div className=' relative min-h-full left-48 top-56 rounded-xl'>
                <p className=' text-4xl'>Handy Mart</p>
                <p className=' text-7xl font-bold mt-3'>Art Products</p>
                <button className='btn bg-rose-300 mt-6'>Explore</button>
            </div>
          </div>
          </SwiperSlide>
      <SwiperSlide>
      <div data-aos="fade-down-right" className="image bg-no-repeat rounded-xl bg-center bg-cover max-w-3xl lg:max-w-full min-h-[600px] bg-[url(https://i.ibb.co/xmWNn40/1.png)] ">
            <div className=' relative min-h-full left-48 top-56 rounded-xl'>
                <p className=' text-4xl'>Handy Mart</p>
                <p className=' text-7xl font-bold mt-3'>Art Products</p>
                <button className='btn bg-rose-300 mt-6'>Explore</button>
            </div>
          </div>
          </SwiperSlide>
    </Swiper>
    );
};

export default Banner;