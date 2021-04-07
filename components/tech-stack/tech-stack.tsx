import Image from 'next/image';
import React, { FC } from 'react';


interface Props {
  techStack:{
    stack: string[]
  }
}
const TechStack:FC<Props> = ({techStack: {stack}}) => {
  return (
    <>
    <h1 className="text-3xl text-center col-span-4 my-8 font-display">Tech Stack</h1>
    <div className=" col-start-1 col-end-3 md:p-6 grid grid-cols-2 md:grid-cols-2 gap-2 lg:grid-cols-3 md:gap-4">
     {stack.map((l)=> {
       return <li className="list-none text-center border-black md:w-min px-2 md:px-6 py-2 h-auto bg-gray-50 text-body-dark bg-gradient-to-r from-nav-light to-red-100 font-body rounded-md flex justify-center self-center" key={l}>{l}</li>
     })}
    </div>
    <div className="col-start-3 col-end-5 my-4 md:my-0 p-2">
      <Image src="/stack.png" width="700" height="500" alt="tech-stack" />
    </div>
    </>
  )
}

export default TechStack


