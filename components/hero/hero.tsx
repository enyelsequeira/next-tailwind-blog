import Image from 'next/image'
import React, { FC } from 'react'
import { techList } from '../../constants/constants.tsx'
const spanClasses: string = `text-red-600 font-bold uppercase text-xl`
export const buttonClasses: string = ` bg-button-light dark:bg-button-dark p-4 px-12 rounded-lg text-lg font-display font-bold text-words-light dark:text-words-dark my-4 lg:my-8`
export const paragraphClasses: string = `my-4 text-2xl leading-normal`


const Hero: FC = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row max-h-full max-w-full p-4  text-words-light dark:text-words-dark">
        <div className=" w-full lg:w-3/4 p-2 md:p-6 ">
          <p className={paragraphClasses}>Are you interested in reading and learning more about coding? then you have arrived at the right place <span className={`${spanClasses}`}>e.s.codes</span></p>
          <p className={paragraphClasses}>Providing blogs articles every other days on technologies, like <span className={`${spanClasses} `}>html</span>, <span className={`${spanClasses} `}>css</span>, <span className={`${spanClasses} `}>Javascript</span> <span className={`${spanClasses} `} >React</span>, <span>node</span> and more 😀!!</p>
          <button className={buttonClasses}>Get Started</button>
        </div>
        <div className="lg:w-3/5 md:w-2/3 md:self-center w-full border-2 flex p-4 my-4 lg:m-0" >
          <Image className="w-full" src="/hero-image.png" width={1200}
            height={700} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse max-h-full max-w-full p-4  text-words-light dark:text-words-dark">
        <div className=" w-full lg:w-3/4 p-2 md:p-6 ">
          <p className={paragraphClasses}> Here at <span className={spanClasses}>E.s.codes</span>We provide high quality content with real life examples that you will encounter on the job. Our list can be seen below.</p>
          <p className={paragraphClasses}>You can explore our blog and see if there's something for you, I guarantee that you will find something useful for your coding career.</p>
          <ul className="grid-cols-2 grid p-2 md:p-4">
            {techList.map((l)=> {
              return <li className="flex text-xl dark:text-red-600  content-center items-center" key={l.id}> <span className="mx-2 text-red-600 text-2xl dark:text-white" >{l.icon}</span>{l.name}</li>
            })}
          </ul>
        </div>
        <div className="lg:w-3/5 md:w-2/3 md:self-center w-full border-2 flex p-4 my-4 lg:m-0" >
          <Image className="w-full" src="/sub-hero.png" width={1200}
            height={900} />
        </div>
      </div>


    </>
  )
}

export default Hero
