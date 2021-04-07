import React, { FC } from 'react';
import { Testimonial } from "../../utils/constants/testimonials";

interface Props{
  testimonial: Testimonial
}

const TestimonialCards:FC<Props> = ({testimonial}) => {
  return (
    <div className="row-start-2 p-2 h-60 md:h-60 lg:h-card cursor-pointer my-4 flex flex-col shadow-2xl rounded-lg text-justify bg-body-dark dark:bg-white font-body border border-gray-400  hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-300 shadow-personal text-words-dark dark:text-body-dark">
      <p className="text-base self-center m-auto">{testimonial.testimonial}</p>
      <div className="flex flex-row self-end justify-items-center items-center mt-auto">
        <p className="mr-2">{testimonial.name}</p>
        {testimonial.icon}
      </div>


    </div>
  )
}

export default TestimonialCards