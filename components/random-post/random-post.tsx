import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { Posts } from '../../pages/blog';

const RandomPost: FC<Posts> = ({ posts }) => {
  return (
    <>
      <div className="my-6 p-2 shadow-personal" >
        {posts.slice(0, 1).map((p) => {
          return (
            <Link href={`/blog/${p.slug}`} key={p.slug}>
              <a className=" w-full grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="col-span-2" >
                  <Image src="/hero-image.png" width={1200}
                    height={700} />
                </div>

                <div className="p-4 col-span-2 font-body  ">
                  <h1 className="mt-1 font-black text-4xl font-display text-gray-900 dark:text-red-200 ">{p.title}</h1>
                  <p className="mt-4 uppercase text-gray-600 italic font-black text-xs dark:text-white ">{p.publishedAt}</p>
                  <p className="text-md mt-3 leading-relaxed text-gray-600 font-medium dark:text-white">{p.summary}</p>
                  <div className="uppercase flex-col my-3">
                    <h3 className="font-bold tracking-widest leading-loose font-display dark:text-red-200">Keywords</h3>
                    {p.keywords.map((c) => {
                      return (
                        <p key={c} className="dark:text-white">{c}</p>
                      )
                    })}
                  </div>
                </div>
              </a>
            </Link>
          )
        })}

      </div>


    </>
  )

}

export default RandomPost
