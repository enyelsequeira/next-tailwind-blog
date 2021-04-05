import React from 'react';



const MDXComponents = {
  h1: (props) => <h1 className="prose prose-indigo" {...props}/>,
  h2: (props) => <h2 {...props} />,

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