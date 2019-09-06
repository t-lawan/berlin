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
      allWordpressWpEvents {
        edges {
          node {
            id
            slug
            acf {
              DE {
                display_time
                event_subtitle
                event_title
                full_description
                other_event_venue
                rsvp_note
                rsvp_required
                short_calendar_description
                special_info_notice
              }
              EN {
                display_time
                full_description
                event_title
                event_subtitle
                other_event_venue
                rsvp_note
                rsvp_required
                short_calendar_description
                special_info_notice
              }
              end_date
              event_is_free
              event_language
              event_limited_capacity
              other_event_language
              participants
              start_date
              start_time
              template
            }
          }
        }
      }
      allWordpressWpExhibitions {
        edges {
          node {
            id
            wordpress_id
            slug
            acf {
              DE {
                description
                subtitle
                title
              }
              EN {
                description
                subtitle
                title
              }
              end_date
              exp_number
              start_date
            }
          }
        }
      }
      allWordpressWpParticipants {
        edges {
          node {
            wordpress_id
            slug
            acf {
              exp_number
              firstname
              image_gallery
              is_artist_in_exhibition
              lastname
              participant_group
              personal_website
              related_resources
              EN {
                group_bios
                project_description
                short_bio
              }
              participant_venue
              DE {
                group_bios
                project_description
                short_bio
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
  const {
    allWordpressPage,
    allWordpressWpEvents,
    allWordpressWpExhibitions,
    allWordpressWpParticipants
  } = result.data

  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const calendarTemplate = path.resolve(`./src/templates/calendar-template.js`)
  const languages = ['en', 'de'];

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
    // Create pages for both EN and DE
    languages.forEach((language) => {
      let path = language === "en" ? `/${edge.node.slug}` : `/${language}/${edge.node.slug}`
      createPage({
        path: path,
        component: slash(template),
        context: edge.node,
      })
    })


  })

  const eventTemplate = path.resolve(`./src/templates/event.js`)
  
  allWordpressWpEvents.edges.forEach(edge => {
    languages.forEach((language) => {
      let path = language === "en" ? `/event/${edge.node.slug}` : `/${language}/event/${edge.node.slug}`
      createPage({
        path: path,
        component: slash(eventTemplate),
        context: edge.node,
      })
    })
  })

  const exhibitionTemplate = path.resolve(`./src/templates/exhibition.js`)
  
  allWordpressWpExhibitions.edges.forEach(edge => {

    languages.forEach((language) => {
      let path = language === "en" ? `/exhibition/${edge.node.slug}` : `/${language}/exhibition/${edge.node.slug}`

      createPage({
        path: path,
        component: slash(exhibitionTemplate),
        context: edge.node,
      })
    })

  })

  const participantTemplate = path.resolve(`./src/templates/participant.js`)
  
  allWordpressWpParticipants.edges.forEach(edge => {
    languages.forEach((language) => {
      let path = language === "en" ? `/participant/${edge.node.slug}` : `/${language}/participant/${edge.node.slug}`
      createPage({
        path: path,
        component: slash(participantTemplate),
        context: {...edge.node, language: language}
      })
    })
  })
}
