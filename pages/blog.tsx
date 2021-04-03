import React, { FC, useState } from 'react';
import BlogCard from '../components/blog-post/blog-post';
import { getAllFileFrontMatter } from '../lib/mdx';
import { BlogPost } from '../types/types';


interface Posts{
  posts: BlogPost[]
}

const Blog:FC<Posts> =  ({posts}) => {

  const [searchValue, setSearchValue] = useState("")

  const filteredBlogPosts = posts.sort((a,b) => Number(new Date(b.publishedAt)) - Number(a.publishedAt)).filter((frontMatter) => frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div>
      <input type="text" onChange={(e) => setSearchValue(e.target.value)}/>

      Blog (${posts.length}) post
    {!filteredBlogPosts.length && "no post found 😭"}
    {filteredBlogPosts.map((data) => <BlogCard key={data.title} blogData={data} />) }
     {/* {posts.map((data) => {
       return <BlogCard blogData={data} />
     })} */}

   
    </div>
  )
}

export default Blog


export async function getStaticProps(){
  const posts = await getAllFileFrontMatter("posts")
  return {props: {posts}}
}