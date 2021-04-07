import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col flex-wrap lg:grid lg:grid-col-4 gap-4 ">
        <ul className="flex flex-wrap justify-between p-2 lg:px-20">

          <div className="my-2">
            <p className="font-display font-bold">Title</p>
            <li className="font-body font-light">story</li>
            <li className="font-body font-light">stack</li>
            <li className="font-body font-light">Testimonials</li>
          </div>

          <div className="my-2">
            <p className="font-display font-bold">Title</p>
            <li className="font-body font-light">story</li>
            <li className="font-body font-light">stack</li>
            <li className="font-body font-light">Testimonials</li>
          </div>

          <div className="my-2">
            <p className="font-display font-bold">Title</p>
            <li className="font-body font-light">story</li>
            <li className="font-body font-light">stack</li>
            <li className="font-body font-light">Testimonials</li>
          </div>

          <div className="my-2">
            <p className="font-display font-bold">Title</p>
            <li className="font-body font-light">story</li>
            <li className="font-body font-light">stack</li>
            <li className="font-body font-light">Testimonials</li>
          </div>
        </ul>
      </div>
      <p className="uppercase font-display font-extrabold text-center my-4">  All rights reserved E.S.codes © {new Date().getFullYear()}{' '} </p>

    </div>
  )
}

export default Footer
