import Link from 'next/link';
import React from 'react';

const BlogCard = ({ blogData }) => {
  console.log({blogData: blogData});
  return (
    <>
    <Link href={`blog/${blogData.slug}`}>

      <p>{blogData.title}</p>
      {/* <p>{format(parseISO(blogData.publishedAt), "MMMM dd, yyyy")}</p> */}

    </Link>
    </>
  )
}

export default BlogCard
