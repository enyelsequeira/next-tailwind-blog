import { gql, GraphQLClient } from 'graphql-request';

export const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`
export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
})


export const aboutMeInfo = gql`
    query getAboutMe($id: String!) {
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
  export const list = gql`
    query getList($id: String!){
      techStack(id: $id){
        stack
      }
    }
  `

export const v2={
  id : "3SU5R6yWlpjlxnRdFqmLX1"

}
 export const variable = {
    id: "4QR6ZgrSwDosobxFIDEeg3",
  }