import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Post } from '../../pages/blog';


interface Props {
  post: Post
}
const BlogCards: FC<Props> = ({ post }) => {
  // console.log(post, "hellos");

  return (
    <div className="rounded-lg">
      <Link href={`/blog/${post.slug}`}>
        <a className="cursor-pointer md:p-2 flex flex-col bg-gray-50 dark:bg-words-light rounded-lg ">

          <div>
            <Image src={post.image} width={1200}
              height={700} />
          </div>

          <div className="p-4 font-body leading-relaxed">
            <h3 className="font-semibold font-display text-xl tracking-wide uppercase">
              {post.title}
            </h3>
            <div className="flex w-full justify-between my-4">
              <p>
                {post.publishedAt}
              </p>
              <div className="flex w-2/4 justify-around">
                <span>Author:</span>
                <p className="font-display capitalize">{post.author}</p>
              </div>

            </div>
            <p>
              {post.summary}
            </p>

            <div className="my-2 flex flex-col justify-between">
              <p className="font-display text-lg font-thin">Keywords:</p>
              <div className="flex justify-evenly">
                {post.keywords.map((k: string) => {
                  return <p className="">{`${k}`}</p>
                })}
              </div>
            </div>
            <Link href={`/blog/${post.slug}`}>
              <a className="bg-red-400 p-2 mx-auto my-4 w-max hover:bg-blue-400 text-white font-bold flex items-center rounded" >
                <span className="mr-1" >Read More</span>
                <AiOutlineDoubleRight />
              </a>
            </Link>
          </div>
        </a>

      </Link>


    </div>

  )
}

export default BlogCards
