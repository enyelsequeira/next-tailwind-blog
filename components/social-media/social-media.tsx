import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai"
import { paragraphClasses } from "../hero/hero"
const socialClasses = `flex-col flex p-4 font-body`

const socialList = ` flex flex-col md:grid md:grid-cols-cards justify-items-center gap-7 p-4`
const socialItem = `border-2 border-red-500 w-full flex self-center justify-center py-4 transform hover:scale-105 motion-reduce:transform-none transition duration-700 ease-in-out`
const socialLink = `flex justify-items-center text-2xl  w-full items-center justify-around`
const socialIcons = `self-center mx-4 text-4xl`




const Social = () => {
  return (
    <div className={socialClasses}>
      <h4 className="text-5xl">Social Media</h4>
      <p className={`${paragraphClasses} text-4xl`}>Follow for more content 😀</p>
      <ul className={socialList}>

        <a className={socialItem} href="" >
          <li className={socialLink}>
            <span className="flex justify-end w-3/6 md:w-4/12">
              Twitter

            </span>
            <span className=" flex justify-start w-4/12">
              <AiFillTwitterCircle className={socialIcons} />
            </span>
          </li>
        </a>

        <a href="" className={socialItem}>
          <li className={socialLink}>
            <span className="flex justify-end w-3/6 md:w-4/12">
              Instagram

            </span>
            <span className="flex justify-start w-4/12">
              <AiFillInstagram className={socialIcons} />
            </span>
          </li>
        </a>

        <a href="" className={socialItem}>
          <li className={socialLink}>
            <span className="flex justify-end w-3/6 md:w-4/12">

              Facebook
            </span>
            <span className="flex justify-start w-4/12">

              <AiFillFacebook className={socialIcons} />
            </span>
          </li>
        </a>

        <a href="" className={socialItem}>
          <li className={socialLink}>
            <span className="flex justify-end w-3/6 md:w-4/12">

              Github
            </span>
            <span className="flex justify-start w-4/12">
              <AiFillGithub className={socialIcons} />
            </span>
          </li>
        </a>

      </ul>

    </div>
  )
}

export default Social
