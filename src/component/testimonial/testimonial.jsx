import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpeg";
import AVTR2 from "../../assets/avatar2.webp";
import AVTR3 from "../../assets/avatar3.webp";
import AVTR4 from "../../assets/avatar4.jpeg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Monkey D Luffy",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus obcaecati cum suscipit praesentium, pariatur voluptate quos vero deserunt est nam corporis modi nulla, voluptatem blanditiis quasi ullam sint repellat veritatis.",
  },
  {
    avatar: AVTR2,
    name: "Roronoa Zoro",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus obcaecati cum suscipit praesentium, pariatur voluptate quos vero deserunt est nam corporis modi nulla, voluptatem blanditiis quasi ullam sint repellat veritatis.",
  },
  {
    avatar: AVTR3,
    name: "Vinsmoke Sanji",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus obcaecati cum suscipit praesentium, pariatur voluptate quos vero deserunt est nam corporis modi nulla, voluptatem blanditiis quasi ullam sint repellat veritatis.",
  },
  {
    avatar: AVTR4,
    name: "Nami",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus obcaecati cum suscipit praesentium, pariatur voluptate quos vero deserunt est nam corporis modi nulla, voluptatem blanditiis quasi ullam sint repellat veritatis.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
