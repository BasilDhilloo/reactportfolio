import React from 'react'
import './testimonials.css'
import AVTR1 from './../../assets/avatar1.jpg'
import AVTR2 from './../../assets/avatar2.jpg'
import AVTR3 from './../../assets/avatar3.jpg'
import AVTR4 from './../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const testimonials = [
    {
        avatar: AVTR1,
        name: "Lorem ipsum.",
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rovavatarent dolorem dolores ut, enim perspiciatis.'
    },
    {
        avatar: AVTR2,
        name: "Lorem ipsum.",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rovavatarent dolorem dolores ut, enim perspiciatis."
    },
    {
        avatar: AVTR3,
        name: "Lorem ipsum.",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rovavatarent dolorem dolores ut, enim perspiciatis."
    },
    {
        avatar: AVTR4,
        name: "Lorem ipsum.",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rovavatarent dolorem dolores ut, enim perspiciatis."
    },
    {
        avatar: AVTR1,
        name: "Lorem ipsum.",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rovident dolorem dolores ut, enim perspiciatis."
    },
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
                modules={[Pagination, Navigation]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}>
                {testimonials.map(({ avatar, name, review }, index) => {
                    return (
                        <SwiperSlide key={index} className='testimonial'>
                            <div className="client__avatar">
                                <img src={avatar} alt="Avatar One" />
                            </div>
                            <h5>{name}</h5>
                            <small className='clients__review'>{review}</small>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials