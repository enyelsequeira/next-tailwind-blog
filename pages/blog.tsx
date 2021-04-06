import React, { FC, useState } from 'react';
import { VscLoading } from "react-icons/vsc";
import BlogCard from '../components/blog-cards/blog-cards';
import { paragraphClasses } from '../components/hero/hero';
import RandomPost from '../components/random-post/random-post';
import SearchInput from '../components/search-input/search-input';
import { getAllFileFrontMatter } from '../lib/mdx';


export interface Post {
  publishedAt: string,
  summary: string,
  title: string,
  slug: string,
  image: string,
  author: string
  id?: number
  keywords: string[]
}

export interface Posts {
  posts: Post[]
}



const Blog: FC<Posts> = ({ posts }) => {
  console.log(posts, "posts");
  const [visible, setVisible] = useState(3)
  const [searchValue, setSearchValue] = useState("")

  const onLoadMoreClick = () => {
    setVisible(v => v + 1)
  }


  // figure out how to stop rendering the random post
  const filteredBlogPosts = posts.sort((a, b) => Number(new Date(b.publishedAt)) - Number(a.publishedAt)).filter((frontMatter) => frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))

  console.log(posts[Math.floor(Math.random() * posts.length)]);
  const randomPost = [Math.floor(Math.random() * posts.length)]
  // // could try to slice the first one an pass it arround
  // console.log({random: randomPost.slice(0)});
  // const test = posts.slice(0, 1)
  // console.log({test: test})


  return (

    <div className="border-blue-300 p-4" >
      <p className="text-4xl text-center my-3 font-display font-bold uppercase">Blog posts {posts.length}</p>
      <SearchInput setSearchValue={setSearchValue} />

      {!filteredBlogPosts.length && <p className={`${paragraphClasses} text-red-900  dark:text-yellow-200 text-center`}>sorry you search for ${searchValue} has no result</p>}

      {randomPost && <RandomPost posts={posts} />}
      {/* // {randomPost.title} */}
      <div className="p-2 md:p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {filteredBlogPosts.slice(0, visible).map((data: Post) => {
          console.log(data);
          return (<BlogCard key={data.title} post={data} />)
        })}
      </div>

      <button className="dark:bg-white dark:text-black bg-black  hover:bg-grey text-white font-bold py-2 px-4 rounded flex items-center mx-auto my-3" onClick={onLoadMoreClick}>
        <VscLoading className="w-4 h-4 mr-2" />
        <span>Load More</span>
      </button>

    </div>
  )
}

export default Blog


export async function getStaticProps() {
  const posts = await getAllFileFrontMatter("posts")
  return { props: { posts } }
}

{/* <input type="text" onChange={(e) => setSearchValue(e.target.value)}/> */ }
{/* {posts.map((data) => {
       return <BlogCard blogData={data} />
     })} */}


    //  <div className="border-2 border-red-200 w-full my-8 p-3" >
    //  <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
    //    <a href="post.html" className="flex flex-wrap no-underline hover:no-underline">
    //      <div className="w-full md:w-2/3 rounded-t sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg">	
    //        <img src="https://source.unsplash.com/collection/494263/800x600" className="h-full w-full shadow"/>
    //      </div>

    //      <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
    //        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
    //          <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">GETTING STARTED</p>
    //          <div className="w-full font-bold text-xl text-gray-900 px-6">👋 Welcome fellow Tailwind CSS and Ghost fan</div>
    //          <p className="text-gray-800 font-serif text-base px-6 mb-5">
    //            This starter template is an attempt to replicate the default Ghost theme "Casper" using Tailwind CSS and vanilla Javascript.
    //          </p>
    //        </div>

    //        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
    //          <div className="flex items-center justify-between">
    //            <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author"/>
    //            <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
    //          </div>
    //        </div>
    //      </div>

    //    </a>
    //  </div>
    // </div>