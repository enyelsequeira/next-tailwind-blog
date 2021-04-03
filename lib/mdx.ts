import fs from "fs";
import matter from 'gray-matter';
import path from "path";

// // import MDXComponents from

const root = process.cwd();

// export async function getFiles(type) {
//   return fs.readFileSync(path.join(root, 'data', type));
// }

// export async function getFileBySlug(type, slug) {
//   const source = slug
//     ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf-8')
//     : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf-8');

//     // content not context
//     const {data, content} = matter(source)
//     const mdxSource = await renderToString(content, {
//       components: MDXComponents,
      // mdxOptions:{
      //   remarkPlugins: [
      //     require("remark-autolink-headings"),
      //     require('remark-slug'),
      //     require("remark-code-titles"),
      //   ],
      //   rehypePlugins: [mdxPrism]
      // }
//     })

//     return {
//       mdxSource,
//       frontMatter:{
//         wordCount: content.split(/\s+/gu).length,
//         readingTime: readingTime(content),
//         slug: slug || null,
//         ...data
//       }
//     }
// }


export async function getAllFileFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, "data", type))
  console.log(files);

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "data", type, postSlug), 
      'utf-8'

    )
    const {data} = matter(source)
    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", "")
      },
      ...allPosts
    ]
  }, [])
  
}