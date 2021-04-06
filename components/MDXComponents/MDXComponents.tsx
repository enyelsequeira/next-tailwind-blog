import Image from 'next/image';
import React from 'react';



const MDXComponents = {
  h1: (props) => <h1 className="text-red-300" {...props} />,
  h2: (props) => <h2 {...props} />,
  img: (props) => {
    return (
      <div className="border-red-400 p-2 rounded-xl">
        {props.src && <Image className="rounded-xl" width="700" height="600" src={props.src} alt={props.alt} layout="responsive"/>}
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