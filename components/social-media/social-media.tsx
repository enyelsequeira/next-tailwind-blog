import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai"
import { paragraphClasses } from "../hero/hero"
const socialClasses = `flex-col flex p-4`

const socialList = ` flex flex-col md:grid md:grid-cols-cards justify-items-center gap-7 p-4`
const socialItem = `border-2 border-red-500 w-full flex self-center justify-center py-4 transform hover:scale-105 motion-reduce:transform-none transition duration-700 ease-in-out`
const socialLink = `flex justify-items-center text-2xl`
const socialIcons = `self-center mx-4`

const Social = () => {
  return (
    <div className={`${socialClasses} font-body`}>
      <h4 className="text-5xl">Social Media</h4>
      <p className={`${paragraphClasses} text-4xl`}>Follow for more content 😀</p>
      <ul className={socialList}>

        <a className={socialItem} href="" >
          <li className={socialLink}>
            Twitter <AiFillTwitterCircle className={socialIcons} />
          </li>
        </a>

        <a href="" className={socialItem}>
          <li className={socialLink}>
            Instagram <AiFillInstagram className={socialIcons} />
          </li>
        </a>

        <a href="" className={socialItem}>
          <li className={socialLink}>
            Facebook   <AiFillFacebook className={socialIcons} />
          </li>
        </a>

        <a href="" className={socialItem}>
          <li className={socialLink}>
            Github <AiFillGithub className={socialIcons} />
          </li>
        </a>

      </ul>

    </div>
  )
}

export default Social
