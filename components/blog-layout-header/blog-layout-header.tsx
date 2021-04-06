import Image from 'next/image';
import React, { FC } from 'react';
import { BlogPost } from '../../types/types';


const BlogLayoutHeader: FC<BlogPost> = (props) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-5 md:p-6 md:mb-5 ">
      <div className="col-span-2 row-span-3" >
        <Image className="w-full border-4 border-black" width="600" height="400" src={props.image} alt={props.author} />
      </div>

      <div className="col-span-2 row-span-2 flex flex-col justify-around p-4 ">
        <div className="font-body">
          <p className="italic uppercase">{props.readingTime.text}</p>
          <p>Published: {props.publishedAt}</p>
        </div>
        <h1 className="text-3xl tracking-widest  text-body-dark dark:text-red-200 font-display my-2 md:m-0">{props.title}</h1>
        <div>
          <div className="flex items-center mb-2">
            <div className="h-10 w-10 rounded-full mr-2" >
              <Image className="rounded-full" width="70" height="70" src={props.authorImage} alt={props.author} />
            </div>
            <div className="font-body">
              <p className="capitalize">{props.author}</p>
              <p>{props.authorProfession}</p>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default BlogLayoutHeader
