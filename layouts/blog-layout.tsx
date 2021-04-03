import React, { FC, ReactNode } from 'react';
import { BlogPost } from "../types/types";

interface Props{
  data: BlogPost
  children: ReactNode
}


const BlogLayout:FC<Props> = ({data, children}) => {
  return (
    <>
   <p>{data.title}</p>
   {children}
   </>
  )
}

export default BlogLayout
