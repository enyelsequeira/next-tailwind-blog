import Image from 'next/image';
import React from 'react';



const MDXComponents = {
  h1: (props) => <h1 className="text-red-300" {...props} />,
  h2: (props) => <h2 {...props} />,
  img: (props) => {
    return (
      <div className="p-2 rounded-xl">
        {props.src && <Image className="rounded-xl" width="500" height="300" src={props.src} alt={props.alt} layout="responsive"/>}
      </div>
    )
  }, 


}
export default MDXComponents

// pre: ({ children: { props } }) => {
//   if (props.mdxType === 'code') {
//     console.log(props, "my props for code")
//     console.log(props.children, "test");
//     return (
//       <>
//       <code {...props} />

// </>
//     );
//   }
// },