import Link from 'next/link'
import React from 'react'

const titleClasses = `font-display font-bold`
const listItemClasses = "font-body font-light cursor-pointer"

const Footer = () => {
  return (
    <div className="flex flex-col mt-5">
      <div className="flex flex-col flex-wrap lg:grid lg:grid-col-4 gap-4 ">
        <ul className="flex flex-wrap justify-between p-2 lg:px-20">

          <div className="my-2">
            <p className={titleClasses}>About</p>
            <Link href="/about/#about">
            <li className={listItemClasses}>story</li>
            </Link>
            <Link href="/about/#stack">
            <li className={listItemClasses}>Stack</li>
            </Link>
            
            <Link href="/about/#testimonials">
            <li className={listItemClasses}>Testimonials</li>
            </Link>
          
          </div>

    
          <div className="my-2">
            <p className={titleClasses}>Projects</p>
            <Link href="/">
            <li className={listItemClasses}>TBD</li>
            </Link>
            <Link href="/">
            <li className={listItemClasses}>TBD</li>
            </Link>
            <Link href="/">
            <li className={listItemClasses}>TBD</li>
            </Link>
            
          </div>

          <div className="my-2">
            <p className={titleClasses}>Contact</p>
            <Link href="/contact">
            <li className={listItemClasses}>Email</li>
            </Link>
            
            
          </div>

          <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
            <div className="text-red-light mb-2">Newsletter</div>
            <p className="text-grey-darker leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consectetur. </p>
            <div className="mt-4 flex">
              <input type="text" className="p-2 border border-grey-light round text-grey-dark text-sm h-auto" placeholder="Your email address" />
              <button className="border-2 bg-indigo-400 rounded-sm h-auto text-xs p-3 ml-3">Subscribe</button>
            </div>
          </div>
        </ul>
      </div>
      <p className="uppercase font-display font-extrabold text-center my-6">   &copy; E.S.CODES. All rights reserved {new Date().getFullYear()}{' '} </p>


    </div>
  )
}

export default Footer
