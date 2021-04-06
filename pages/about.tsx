import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { gql, GraphQLClient } from 'graphql-request';
import React from 'react';


const Bold = ({ children }) => <p>{children}</p>;

const Text = ({ children }) => <p >{children}</p>;




const About = ({ data }) => {
  console.log("data from top", data);
  const options ={

    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) =>{
        return(
          <div>
            <p className="text-red-900">{children}</p>
          </div>
        )
      },
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-red-600 text-5xl">{children}</h1>,
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        // const img = data.links.assets.block.find(i => i.sys.id === node.data.target.sys.id)
        const test = data.aboutHero.aboutMe.links.assets.block[0].url;
        console.log(node, { node: node });
        return <img className="border-4 col-start-2 row-start-1" src={test} />
      }

    },
    renderText: text => {
      return text
        .split("\n")
        .map(i => [i, <br />])
        .flat();
    }




  }


  return (
    <div className="border-4 border-red-300 grid grid-cols-2">
      {/* {data.node.description && renderRichText(data.node.description)} */}
      {data && documentToReactComponents(data.aboutHero.aboutMe.json, options)}
    </div>
  )

}

export default About


export async function getStaticProps() {

  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  })

  const query = gql`
    query getMovie($id: String!) {
      aboutHero(id: $id) {
        title
        aboutMe{
          json
          links{
        assets{
          block{
            url
            title
          }
        }
      }
        }
      }
    }
  `

  const variable = {
    id: "4QR6ZgrSwDosobxFIDEeg3"
  }
  const data = await graphQLClient.request(query, variable)
  console.log({ datingmy: data.aboutHero.aboutMe });

  return {
    props: {
      data
    }
  }
}



