import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import { Convert } from "../../utility/convert"
import * as actionTypes from "../../store/action"
import { CalendarModel } from "../../models/CalendarModel"
import { NavbarModel, NavbarTitleConfig } from "../../models/NavbarModel"
import moment from "moment"
import { DateManager } from "../../utility/date"
const State = props => {
  if (!props.isLoaded) {
    const data = useStaticQuery(
      graphql`
        {
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
                  related_resources {
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
                  other_event_language
                  other_event_language_de
                  event_limited_capacity
                  other_event_language
                  thumbnail_image
                  # participants
                  template
                  exp_number
                  embed_video_in_event
                }
              }
            }
          }
          allWordpressWpExhibitions {
            edges {
              node {
                wordpress_id
                slug
                acf {
                  active_exhibition
                  exp_open_days {
                    friday
                    monday
                    saturday
                    sunday
                    thursday
                    tuesday
                    wednesday
                  }
                  use_gallery_images
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
                    exp_bb11_right_header
                    promotional_sticker_for_homepage
                    promotional_sticker_url
                    external_link_url
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
                    exp_bb11_right_header
                    promotional_sticker_for_homepage
                    promotional_sticker_url
                    external_link_url
                  }
                  end_date
                  exp_number
                  start_date
                  caption_de
                  caption_en
                  exp_animation
                  temporary_exp_page
                  exhibition_image_gallery {
                    acf {
                      caption_de
                      caption_en
                    }
                    wordpress_id
                    alt_text
                    media_type
                  }
                  temp_exp_graphic_de
                  temp_exp_graphic_en
                  exceptional_exp_closed_dates {
                    end_close_date
                    start_close_date
                  }
                  exhibition_floorplan
                }
              }
            }
          }
          allWordpressWpDocumentation {
            edges {
              node {
                wordpress_id
                slug
                acf {
                  DE {
                    description
                    doc_credits
                    subtitle
                    title
                    social_media_description
                    document_type_label
                  }
                  EN {
                    description
                    doc_credits
                    subtitle
                    title
                    social_media_description
                    document_type_label
                  }
                  documentation_type
                  event_relation {
                    wordpress_id
                  }
                  exp_number
                  language
                  mp3_upload
                  video
                  image_gallery {
                    acf {
                      caption_de
                      caption_en
                      external_url
                    }
                    alt_text
                    wordpress_id
                    media_type
                  }
                  thumbnail_image
                  documentation_not_attached_to_event
                  unlist_document_on_media_overview
                }
              }
            }
          }
          allWordpressWpNews {
            edges {
              node {
                wordpress_id
                slug
                acf {
                  DE {
                    news_subtitle
                    news_title
                    news_text
                  }
                  EN {
                    news_subtitle
                    news_text
                    news_title
                  }
                  dates {
                    start_date
                  }
                  exp_number
                  news_item_is_unlinked
                  show_in_news_feed
                  thumbnail_image
                  display_date
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
                  EN {
                    project_description
                    participant_group_members
                    participant_group_name
                    participant_venue
                    participant_video_caption
                    short_bio
                    works_list
                    group_bios {
                      biography
                      full_name
                    }
                  }
                  DE {
                    project_description
                    short_bio
                    participant_group_members
                    participant_group_name
                    participant_venue
                    participant_video_caption
                    works_list
                    group_bios {
                      biography
                      full_name
                    }
                  }
                  sorting_name
                  participant_video
                  social_media_image
                  related_documentation {
                    wordpress_id
                  }
                  related_resources {
                    wordpress_id
                  }
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
                  resource_author_de
                  resource_url
                  video
                }
                resource_genre
              }
            }
          }
          allWordpressWpApiMenusMenusItems(
            filter: { slug: { eq: "navbar-menu" } }
          ) {
            edges {
              node {
                items {
                  object_slug
                  title
                }
                slug
              }
            }
          }
          allWordpressWpMedia {
            edges {
              node {
                wordpress_id
                mime_type
                source_url
                acf {
                  caption_de
                  caption_en
                  external_url
                }
                slug
                localFile {
                  publicURL
                }
              }
            }
          }
          allWordpressWpPublications {
            edges {
              node {
                wordpress_id
                slug
                acf {
                  DE {
                    description
                    publisher
                    subtitle
                    title
                  }
                  EN {
                    description
                    publisher
                    subtitle
                    title
                  }
                  exp_number
                  isbn
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
                  social_media_image
                }
                date
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
                  english {
                    access_info
                    venue_name
                    venue_description
                    opening_hours {
                      hours
                    }
                  }
                  deutsch {
                    access_info
                    venue_name
                    venue_description
                    opening_hours {
                      hours
                    }
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
                date
              }
            }
          }
          allWordpressWpResourceGenre {
            edges {
              node {
                wordpress_id
                slug
                name
              }
            }
          }
          allWordpressPage {
            edges {
              node {
                slug
                acf {
                  DE_row {
                    german_page_slug
                  }
                }
                parent_element {
                  slug
                }
                wordpress_id
              }
            }
          }
        }
      `
    )

    // let pages = Convert.toModelArray(data.allWordpressPage, Convert.toPageModel)

    let events = Convert.toModelArray(
      data.allWordpressWpEvents,
      Convert.toEventModel
    )
    // Sort dates
    events = events.sort((a, b) => {
      return moment(a.dates[0].start_date).diff(moment(b.dates[0].start_date))
    })

    let news = Convert.toModelArray(
      data.allWordpressWpNews,
      Convert.toNewsModel
    )
    // let news = generateNewsArticles(20)

    let exhibitions = Convert.toModelArray(
      data.allWordpressWpExhibitions,
      Convert.toExhibitionModel
    )

    let resourceGenres = Convert.toModelArray(
      data.allWordpressWpResourceGenre,
      Convert.toResourceGenreModel
    )

    let publications = Convert.toModelArray(
      data.allWordpressWpPublications,
      Convert.toPublicationModel
    )

    publications = publications.sort((a, b) => {
      return DateManager.secondsBetween(a.date, b.date)
    })

    let calendarItems = Convert.eventsToCalendarItemArray(events)
    calendarItems = [
      ...calendarItems,
      ...Convert.exhibitionsToCalendarItemArray(exhibitions),
    ]
    let calendar = CalendarModel.createCalendar(calendarItems)

    let participants = Convert.toModelArray(
      data.allWordpressWpParticipants,
      Convert.toParticipantModel
    )

    let resources = Convert.toModelArray(
      data.allWordpressWpResources,
      Convert.toResourceModel
    )

    let documentation = Convert.toModelArray(
      data.allWordpressWpDocumentation,
      Convert.toDocumentationModel
    )

    let venues = Convert.toModelArray(
      data.allWordpressWpVenue,
      Convert.toVenueModel
    )
    venues = venues.sort((a, b) => {
      return DateManager.secondsBetween(a.date, b.date)
    })

    let documents = Convert.toModelArray(
      data.allWordpressWpMedia,
      Convert.toDocumentModel
    )
    let topNavbarItems = [
      new NavbarModel(
        "calendar",
        "calendar",
        "kalender",
        false,
        true,
        true,
        true
      ),
      new NavbarModel(
        "c-o-exrotaprint",
        "c/o exrotaprint",
        "c/o exrotaprint",
        false,
        true,
        true,
        false
      ),
      new NavbarModel(
        "participants",
        "participants",
        "beteiligte",
        false,
        true,
        false,
        true
      ),
      // REMOVE: Temporary set isActive to false
      new NavbarModel(
        "exchange",
        "exchange",
        "austausch",
        false,
        true,
        true,
        true
      ),
      new NavbarModel(
        "publications",
        "publications",
        "publikationen",
        false,
        true,
        true,
        true
      ),
      new NavbarModel("media", "media", "mediathek", false, true),
      new NavbarModel("plain-language", "plain language", "leichte sprache", false, true),
    ]

    let bottomNavbarItems = [
      new NavbarModel(
        "practical-information",
        "practical information",
        "praktische information",
        false,
        true,
        true,
        true
      ),
      new NavbarModel("venues", "venues", "orte", false, true),
      new NavbarModel("about", "about", "über", false, true),
      new NavbarModel("press", "press", "presse", false, true),
      new NavbarModel(
        "https://bb-shop.visitate.net/en/",
        "shop",
        NavbarTitleConfig["shop"].DE,
        true,
        true
      ),
    ]
    // Get active exhbitions
    let filteredExhibitions = exhibitions.filter(item => {
      return item.active
    })

    // if (typeof window !== `undefined`) {
    //   if (!props.agreed_to_terms && window.localStorage.getItem("AGREED_TO_PRIVACY")) {
    //     console.log('AGREED_TO_PRIVACY LOG', window.localStorage.getItem("AGREED_TO_PRIVACY"))
    //     props.setAgreedToTrue()
    //   }
    // }

    // if(typeof window !== `undefined`) {
    //   if(window.localStorage.getItem('AGREED_TO_PRIVACY')){
    //     props.setAgreedToTrue()
    //   }
    // }

    if (filteredExhibitions.length > 0) {
      let experience = filteredExhibitions[0].experience
      props.changeExperience(parseInt(experience))
      props.setActiveExperience(parseInt(experience))
    }

    props.setTopNavbar(topNavbarItems)
    props.setBottomNavbar(bottomNavbarItems)
    props.setResources(resources)
    props.setDocumentation(documentation)
    // props.setPages(pages)
    props.setPublications(publications)
    props.setCalendarItems(calendarItems)
    props.setCalendar(calendar)
    props.setDocuments(documents)
    props.setVenues(venues)
    props.setParticipants(participants)
    props.setEvents(events)
    props.setNews(news)
    props.setResourceGenres(resourceGenres)
    props.setExhibitions(exhibitions)
    props.loaded()
  }

  return <></>
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
    isLoaded: state.isLoaded,
    agreed_to_terms: state.agreed_to_terms,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setEvents: events =>
      dispatch({ type: actionTypes.SET_EVENTS, events: events }),
    setExhibitions: exhibitions =>
      dispatch({ type: actionTypes.SET_EXHIBITIONS, exhibitions: exhibitions }),
    loaded: () => dispatch({ type: actionTypes.IS_LOADED }),
    setNews: news => dispatch({ type: actionTypes.SET_NEWS, news: news }),
    setAgreedToTrue: () => dispatch({ type: actionTypes.HAS_AGREED_TO_TERMS }),
    setParticipants: participants =>
      dispatch({
        type: actionTypes.SET_PARTICIPANTS,
        participants: participants,
      }),
    setVenues: venues =>
      dispatch({
        type: actionTypes.SET_VENUES,
        venues: venues,
      }),
    setDocuments: documents =>
      dispatch({
        type: actionTypes.SET_DOCUMENTS,
        documents: documents,
      }),
    setResources: resources =>
      dispatch({
        type: actionTypes.SET_RESOURCES,
        resources: resources,
      }),
    setPublications: publications =>
      dispatch({
        type: actionTypes.SET_PUBLICATIONS,
        publications: publications,
      }),
    setDocumentation: documentation =>
      dispatch({
        type: actionTypes.SET_DOCUMENTATION,
        documentation: documentation,
      }),
    setCalendarItems: calendar_items =>
      dispatch({
        type: actionTypes.SET_CALENDAR_ITEMS,
        calendar_items: calendar_items,
      }),
    setCalendar: calendar =>
      dispatch({
        type: actionTypes.SET_CALENDAR,
        calendar: calendar,
      }),
    setTopNavbar: navbar =>
      dispatch({
        type: actionTypes.SET_TOP_NAVBAR,
        navbar_top: navbar,
      }),
    setBottomNavbar: navbar =>
      dispatch({
        type: actionTypes.SET_BOTTOM_NAVBAR,
        navbar_bottom: navbar,
      }),
    setResourceGenres: resourceGenres =>
      dispatch({
        type: actionTypes.SET_RESOURCE_GENRES,
        resource_genres: resourceGenres,
      }),
    setPages: pages =>
      dispatch({
        type: actionTypes.SET_PAGES,
        pages: pages,
      }),
    changeExperience: experience =>
      dispatch({
        type: actionTypes.CHANGE_EXPERIENCE,
        experience: experience,
      }),
    setActiveExperience: experience =>
      dispatch({
        type: actionTypes.SET_ACTIVE_EXPERIENCE,
        active_experience: experience,
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(State)
