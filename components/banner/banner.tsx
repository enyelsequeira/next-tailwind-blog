import React from 'react'
import { buttonClasses } from '../hero/hero'

const Banner = () => {
  return (
    <div className="border-black border my-8 mx-auto md:w-full lg:w-4/5 shadow-personal flex-col lg:flex lg:flex-row justify-around p-4 md:p-8 ">
      <div className="self-center font-body">
        <h3 className="uppercase text-2xl leading-relaxed md:text-center "> Subscribe now to get special features</h3>
        <p className="uppercase leading-relaxed md:text-center">subscribe and start learning</p>
      </div>
     <button className={`${buttonClasses} px-20 py-6 uppercase md:self-center justify-self-center flex mx-auto focus:ring focus:shadow md:transform md:hover:scale-105 md:motion-reduce:transform-none transition duration-700 ease-in-out  md:hover:-translate-y-6`}> Subscribe now</button>
    </div>
  )
}

export default Banner
