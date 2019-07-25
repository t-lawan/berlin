/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            type
            title
            content
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const allWordpressPage = result.data.allWordpressPage;
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  allWordpressPage.edges.forEach(edge => {
      createPage({
          path: edge.node.slug,
          component: slash(pageTemplate),
          context: edge.node
      });
  });
}
