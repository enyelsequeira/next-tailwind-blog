import React, { FC, ReactNode } from 'react';
import { BlogPost } from "../../types/types";

interface Props {
  data: BlogPost
  children: ReactNode
}


const BlogLayout: FC<Props> = ({ data, children }) => {
  console.log(data);
  return (
    <div className="border-2 w-full border-red-700 ">
      <p>{data.title}</p>
      <div className="border-2 border-black m-auto prose prose-lg">
        {children}
      </div>
    </div>
  )
}

export default BlogLayout
