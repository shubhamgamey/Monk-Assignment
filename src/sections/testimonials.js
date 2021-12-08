import React from 'react';
import { Box } from 'theme-ui';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlockTitle from 'components/block-title';
import TestimonialsCard from 'components/cards/testimonial-card';
import testimonialsImage1 from 'assets/testimonial-1-1.png';
import testimonialsImage2 from 'assets/testimonial-1-2.png';
import testimonialsImage3 from 'assets/testimonial-1-3.png';
import testimonialsImage4 from 'assets/testimonial-1-4.png';
import testimonialsImage5 from 'assets/testimonial-1-5.png';
import testimonialsImage6 from 'assets/testimonial-1-6.png';

SwiperCore.use([Autoplay]);

const TESTIMONIALS_DATA = 
  [
    {
      image: testimonialsImage1,
      text:
        'I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. ',
      username: '@hello.mimmie',
      name: 'Minnie Horn',
    },
    {
      image: testimonialsImage2,
      text:
        'Many thanks for you kind and efficient service. I have already and will...',
      username: '@merryn.manley',
      name: 'Merryn Manley',
    },
 
    {
      image: testimonialsImage3,
      text:
        'I would just like to compliment Estelle Pestana. She has been most professional',
      name: 'Veona Watson',
    },
    {
      image: testimonialsImage4,
      text:
        'I have seldom experienced such an efficient help and support like from you! Thank you so much. ',
      username: '@hey.nku',
      name: 'Paseka Nku',
    },
 
    {
      image: testimonialsImage5,
      text:
        'Thank you for all your help. Your service was excellent and very FAST.',
      username: '@cherice.me',
      name: 'Cherice Justin',
    },
    {
      image: testimonialsImage6,
      text:
        'For our recent trip to S.A. I booked several accommodation thru SA Places.',
      username: '@myself.thais',
      name: 'Thais Carballal',
    },
 
    {
      image: testimonialsImage1,
      text:
        'I would like to take this oppertunity to thank SA Places for the great service rendered to us ',
      username: '@hello.mimmie',
      name: 'Minnie Horn',
    },
    
  
];

const Testimonials = () => {
  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 4000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.testimonials}>
      <BlockTitle
        title="Trusted by Thousands of Happy Customer"
        text="These are the stories of our customers who have joined us with great pleasure when using this crazy feature."
      />
      <Swiper {...testimonialCarousel}>
        {TESTIMONIALS_DATA.map(({ image, text, name, username }, index) => (
          <SwiperSlide key={index}>
           
              <TestimonialsCard
                image={image}
                text={text}
                name={name}
                key={index}
                username={username}
              />
            
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    backgroundColor: '#F4F4F6',
    pt: ['80px', null, null, null, '180px', null, '150px'],
    pb: ['60px', null, null, null, '80px', null, '120px'],
  },
};
