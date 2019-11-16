/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const slash = require(`slash`)

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//   type wordpress__PAGEAcf implements Node @dontInfer {
//     team_block: wordpress__PAGEAcfTeamBlock
//     press_images: wordpress__PAGEAcfPress_images
//   }
//     type wordpress__PAGEAcfPress_images implements Node @dontInfer{
//       press_row_type: String
//       section_header_en: String
//     }
//     type wordpress__PAGEAcfTeamBlockBlock_names implements Node @dontInfer{
//       full_name: String
//     }
//     type wordpress__PAGEAcfTeamBlock implements Node @dontInfer{
//       block_names: wordpress__PAGEAcfTeamBlockBlock_names
//     }
//   `
//   createTypes(typeDefs)
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            wordpress_id
            slug
            children {
              id
            }
            parent_element {
              slug
            }
            acf {
              DE_row {
                description
                german_page_slug
              }
              DE {
                access_block {
                  access_line
                }
                address_info {
                  address_line
                }
                content
                images_note
                opening_times {
                  opening_time_line
                }
                press_notice
                preview_information
                title
                venue_description
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
              funding {
                funding_type
                logo_block {
                  wordpress_id
                }
                logo_upload
                notice_de
                notice_en
                project_funding_list
                support_header_de
                support_header_en
              }
              external_url
              google_map_venue_link
              press_email
              press_releases {
                date
                de_press_release_pdf
                en_press_release_pdf
                title_of_press_release_in_de
                title_of_press_release_in_en
              }
              team_block {
                position_title_de
                position_title_en
                section_title_de
                section_title_en
                team_block_type
                block_names {
                  full_name
                }
              }
              press_images {
                image_group_download_label_de
                image_group_download_label_en
                photo_group_title_de
                photo_group_title_en
                press_row_type
                section_header_de
                section_header_en
                images {
                  wordpress_id
                  acf {
                    caption_de
                    caption_en
                    external_url
                  }
                }
              }
              thumbnail_image
              template
              EN {
                content
                access_block {
                  access_line
                }
                address_info {
                  address_line
                }
                images_note
                opening_times {
                  opening_time_line
                }
                preview_information
                press_notice
                title
                venue_description
              }
              EN_row {
                description
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
              event_venue_selection {
                wordpress_id
              }
              DE {
                event_subtitle
                event_title
                full_description
                other_event_venue
                rsvp_note
                rsvp_required
                special_info_notice
                event_newsfeed_subtitle
                event_sub_subtitle
              }
              EN {
                full_description
                event_title
                event_subtitle
                other_event_venue
                rsvp_note
                rsvp_required
                special_info_notice
                event_newsfeed_subtitle
                event_sub_subtitle
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
              thumbnail_image
              participants
              template
              exp_number
            }
          }
        }
      }
      allWordpressWpResources {
        edges {
          node {
            wordpress_id
            slug
            acf {
              mp3_file_upload
              mp3_file_upload_label
              caption_de
              caption_en
              external_url
              resource_description
              resource_type
              resource_year
              resource_year_de
              subtitle
              resource_image
              resource_type
              title
              thumbnail_image
              text_based_resource {
                document_download_label
                document_language
                # document_upload
                free_text_entry
              }
              floating_resource
              image_gallery {
                alt_text
                wordpress_id
                acf {
                  caption_de
                  caption_en
                  external_url
                }
                media_type
              }
              publisher
              publisher_external_url
              resource_author
              resource_external_url
              resource_label
              resource_external_url_label
              resource_label_de
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
              exhibition_floorplan
              active_exhibition
              use_gallery_images
              exhibition_participants
              exhibition_venue {
                wordpress_id
              }
              exp_number
              start_date
              DE {
                description
                subtitle
                title
                participant_list
                participant_list_label
                exp_dates_header
                exp_title_header
                exp_title_header_mobile
              }
              EN {
                description
                subtitle
                title
                participant_list
                participant_list_label
                exp_dates_header
                exp_title_header
                exp_title_header_mobile
              }
              end_date
              exp_number
              start_date
              caption_de
              caption_en
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
              is_artist_in_exhibition
              lastname
              participant_group
              personal_website
              related_resources
              EN {
                project_description
                short_bio
              }
              participant_venue
              DE {
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
    allWordpressWpVenue,
    allWordpressWpResources,
  } = result.data

  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const calendarTemplate = path.resolve(`./src/templates/calendar-template.js`)
  const practicalInformationTemplate = path.resolve(
    `./src/templates/practical-information.js`
  )
  const pressTemplate = path.resolve(`./src/templates/press.js`)
  const aboutTemplate = path.resolve(`./src/templates/about.js`)
  const pressImagesTemplate = path.resolve(`./src/templates/press-images.js`)
  const languages = ["en", "de"]

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
        template = aboutTemplate
        break
      case "press_images":
        template = pressImagesTemplate;
        break;
      default:
        template = pageTemplate
    }

    if (edge.node.parent_element && edge.node.parent_element.slug === "about") {
      template = aboutTemplate
    }
    // Create pages for both EN and DE
    languages.forEach(language => {
      let path;
      if(edge.node.parent_element && edge.node.parent_element.slug === "about") {
        path =
        language === "en"
          ? `/about/${edge.node.slug}`
          : `/${language}/about/${edge.node.acf.DE_row.german_page_slug}`;
        edge.node.slug = (language === "en") ? `/about/${edge.node.slug}` : `/uber/${edge.node.acf.DE_row.german_page_slug}`;
      } else {
        path =
        language === "en"
          ? `/${edge.node.slug}`
          : `/${language}/${edge.node.slug}`;
      }

      createPage({
        path: path,
        component: slash(template),
        context: { ...edge.node, language: language },
      })
    })
  })

  const eventTemplate = path.resolve(`./src/templates/event.js`)

  allWordpressWpEvents.edges.forEach(edge => {
    languages.forEach(language => {
      let path =
        language === "en"
          ? `/event/${edge.node.slug}`
          : `/${language}/event/${edge.node.slug}`
      createPage({
        path: path,
        component: slash(eventTemplate),
        context: { ...edge.node, language: language },
      })
    })
  })

  const exhibitionTemplate = path.resolve(`./src/templates/exhibition.js`)

  allWordpressWpExhibitions.edges.forEach(edge => {
    languages.forEach(language => {
      let path =
        language === "en"
          ? `/exhibition/${edge.node.slug}`
          : `/${language}/exhibition/${edge.node.slug}`

      createPage({
        path: path,
        component: slash(exhibitionTemplate),
        context: { ...edge.node, language: language },
      })
    })
  })

  const participantTemplate = path.resolve(`./src/templates/participant.js`)

  allWordpressWpParticipants.edges.forEach(edge => {
    languages.forEach(language => {
      let path =
        language === "en"
          ? `/participant/${edge.node.slug}`
          : `/${language}/participant/${edge.node.slug}`
      createPage({
        path: path,
        component: slash(participantTemplate),
        context: { ...edge.node, language: language },
      })
    })
  })

  const resourcesTemplate = path.resolve(`./src/templates/resource.js`)

  allWordpressWpResources.edges.forEach(edge => {
    languages.forEach(language => {
      let path =
        language === "en"
          ? `/resource/${edge.node.slug}`
          : `/${language}/resource/${edge.node.slug}`
      createPage({
        path: path,
        component: slash(resourcesTemplate),
        context: { ...edge.node, language: language },
      })
    })
  })

  const venueTemplate = path.resolve(`./src/templates/venue.js`)

  allWordpressWpVenue.edges.forEach(edge => {
    languages.forEach(language => {
      let path =
        language === "en"
          ? `/venue/${edge.node.slug}`
          : `/${language}/venue/${edge.node.slug}`
      createPage({
        path: path,
        component: slash(venueTemplate),
        context: { ...edge.node, language: language },
      })
    })
  })
}
