import React, { FC, ReactNode } from 'react';
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import BlogLayoutHeader from '../../components/blog-layout-header/blog-layout-header';
import { BlogPost } from "../../types/types";

interface Props {
  data: BlogPost
  children: ReactNode
}


const BlogLayout: FC<Props> = ({ data, children }) => {
  console.log({ data: data.authorImage });
  return (
    <div className="border-2 w-full p-2">
      <BlogLayoutHeader {...data} />
      <div className="flex flex-col md:flex-row flex-col-reverse">
        <div className="p-4 text-3xl flex items-center md:items-start md:flex-col">
          <p className="text-2xl my-2">Share</p>
          <a href={`https://twitter.com/share?text=${data.title} by: @E.S.Codes=${"enyelsequeira.com"}`}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Share on Twitter' >
            <AiFillTwitterSquare className="md:mb-4 mx-2 md:mx-0" />
          </a>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${'sitegoeshere'}`}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Share on LinkedIn'>
            <AiFillLinkedin />
          </a>
        </div>
        <div className="m-auto prose prose-sm md:prose-lg text-body-dark dark:text-white">
          {children}
        </div>
      </div>




    </div>
  )
}
export default BlogLayout
