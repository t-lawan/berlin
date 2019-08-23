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
            slug
            acf {
              template
              DE {
                content
                title
              }
              EN {
                content
                title
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }
  const { allWordpressPage, allWordpressWpEvents } = result.data

  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const calendarTemplate = path.resolve(`./src/templates/calendar-template.js`)

  allWordpressPage.edges.forEach(edge => {
    let template
    switch (edge.node.acf.template) {
      case "calendar":
        template = calendarTemplate
        break
      case "default":
        template = pageTemplate
        break
      default:
        template = pageTemplate
    }
    createPage({
      path: edge.node.slug,
      component: slash(template),
      context: edge.node,
    })
  })

  const eventTemplate = path.resolve(`./src/templates/event.js`)
  allWordpressWpEvents.edges.forEach(edge => {
    createPage({
      path: "/event/" + edge.node.slug,
      component: slash(eventTemplate),
      context: edge.node,
    })
  })
}
