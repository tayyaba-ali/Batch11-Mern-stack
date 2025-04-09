import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Banner1 from '../assets/images/banner-1.jpg';
import Banner2 from '../assets/images/banner-2.jpg';
import Banner3 from '../assets/images/banner-3.jpg';
import 'swiper/css';

const Hero = () => {
	return (
		<Swiper
			className='mySwiper h-[80vh] w-full'
			modules={[Autoplay]}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			loop={true}
			speed={1000}>
			{/* First Slide with Content */}
			<SwiperSlide>
				<div className='hero h-full w-full flex items-center justify-center'>
					<img
						src={Banner1} // Use the first banner image
						className='w-full h-full object-cover'
						alt='Banner 1'
					/>
				</div>
			</SwiperSlide>

			{/* Image Slides */}
			{[Banner2, Banner3].map((banner, index) => (
				<SwiperSlide key={index}>
					<div className='h-full w-full flex items-center justify-center'>
						<img src={banner} className='w-full h-full object-cover' alt={`Banner ${index + 2}`} />
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Hero;
