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
      allWordpressWpArticle {
        edges {
          node {
            id
            wordpress_id
            slug
            template
            acf {
              attachments {
                image
                related_documents
              }
              de {
                content
                title
              }
              en {
                content
                title
              }
              experience {
                label
                value
              }
              related_articles
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }
  const { allWordpressPage, allWordpressWpArticle } = result.data;

  const pageTemplate = path.resolve(`./src/templates/page.js`);

  allWordpressPage.edges.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component: slash(pageTemplate),
      context: edge.node,
    });
  });

  allWordpressWpArticle.edges.forEach(edge => {
    createPage({
      path: "/article/" +  edge.node.slug,
      component: slash(pageTemplate),
      context: edge.node
    });
  });
}
