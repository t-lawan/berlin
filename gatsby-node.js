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
      allWordpressPage{
        edges {
          node {
            slug
            acf {
              template
              DE {
                content
                title
                description
                press_notice
                preview_information
                venue_description
                images_note
                opening_times {
                  opening_time_line
                }
                access_block {
                  access_line
                }
                address_info {
                  address_line
                }
              }
              EN {
                content
                title
                access_block {
                  access_line
                }
                description
                images_note
                opening_times {
                  opening_time_line
                }
                press_notice
                preview_information
                venue_description
                address_info {
                  address_line
                }
              }
              calendar_items {
                row_type
                start_date
              }
              contact_data {
                contact_data_line
              }
              contact_people {
                full_name
                position_de
                position_en
              }
              directions {
                directions_line
              }
              external_url
              google_map_venue_link
              press_images {
                image_group_download_label_de
                image_group_download_label_en
                photo_group_title_de
                photo_group_title_en
                press_row_type
                section_header_de
                section_header_en
              }
              press_releases {
                de_press_release_pdf
                date
                en_press_release_pdf
                title_of_press_release_in_de
                title_of_press_release_in_en
              }
              thumbnail_image
              funding {
                funding_type
                notice_de
                project_funding_list
                notice_en
                support_header_de
                support_header_en
              }
              team_block {
                position_title_de
                position_title_en
                section_title_de
                section_title_en
                team_block_type
              }
            }
          }
        }
      }
      allWordpressWpEvents {
        edges {
          node {
            id
            wordpress_id
            slug
            acf {
              DE {
                event_subtitle
                event_title
                full_description
                other_event_venue
                rsvp_note
                rsvp_required
                special_info_notice
              }
              EN {
                full_description
                event_title
                event_subtitle
                other_event_venue
                rsvp_note
                rsvp_required
                special_info_notice
              }
              dates {
                DE {
                  display_time
                }
                EN {
                  display_time
                }
                display_time_feed_de
                display_time_feed_en
                end_date
                start_date
              }
              event_is_free
              event_language
              event_limited_capacity
              other_event_language
              participants
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
      allWordpressWpVenue {
        edges {
          node {
            id
            wordpress_id
            slug
            acf {
              DE {
                access_info
                venue_name
              }
              google_map_link
              thumbnail_image
              venue_address {
                address_line
              }
              venue_city
              venue_plz
              venue_public_transit {
                transit_option
              }
              venue_tel
              venue_wheelchair_access
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
    allWordpressWpParticipants,
    allWordpressWpVenue
  } = result.data

  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const calendarTemplate = path.resolve(`./src/templates/calendar-template.js`)
  const practicalInformationTemplate = path.resolve(`./src/templates/practical-information.js`)
  const pressTemplate = path.resolve(`./src/templates/press.js`)

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
      case "practical_information":
        template = practicalInformationTemplate
        break
      case "press":
        template = pressTemplate
        break
      case "about":
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

  const venueTemplate = path.resolve(`./src/templates/venue.js`)
  
  allWordpressWpVenue.edges.forEach(edge => {
    languages.forEach((language) => {
      let path = language === "en" ? `/venue/${edge.node.slug}` : `/${language}/venue/${edge.node.slug}`
      createPage({
        path: path,
        component: slash(venueTemplate),
        context: {...edge.node, language: language}
      })
    })
  })
}
