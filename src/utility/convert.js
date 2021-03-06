import { NewsModel } from "../models/NewsModel"
import { EventsModel } from "../models/EventsModel"
import { CalendarItemModel } from "../models/CalendarItemModel"
import { ExhibitionModel } from "../models/ExhibitionModel"
import { ParticipantModel } from "../models/ParticipantModel"
import { VenueModel } from "../models/VenueModel"
import { DocumentModel } from "../models/DocumentModel"
import { ResourceModel } from "../models/ResourceModel"
import { NavbarModel } from "../models/NavbarModel"
import { ResourceGenreModel } from "../models/ResourceGenre"
import { PageModel } from "../models/PageModel"
import moment from "moment"
import { DocumentationModel } from "../models/DocumentationModel"
import { capitalise } from "./helper"
import PublicationModel from "../models/PublicationModel"
import { DateManager } from "./date"
export class Convert {
  static toNewsModel = wordpressModel => {
    let dates = wordpressModel.acf.dates.map(item => {
      return item.start_date
    })
    return new NewsModel(
      wordpressModel.wordpress_id,
      wordpressModel.slug,
      wordpressModel.acf.exp_number,
      wordpressModel.acf.EN,
      wordpressModel.acf.DE,
      wordpressModel.acf.show_in_news_feed,
      !wordpressModel.acf.news_item_is_unlinked,
      wordpressModel.acf.thumbnail_image,
      dates,
      wordpressModel.acf.display_date
    )
  }

  static toPublicationModel = wordpressModel => {
    let image_gallery = wordpressModel.acf.image_gallery.map((image) => {
      return image.wordpress_id
    })
    return new PublicationModel(
      wordpressModel.wordpress_id,
      wordpressModel.slug,
      wordpressModel.acf.EN,
      wordpressModel.acf.DE,
      wordpressModel.acf.exp_number,
      wordpressModel.acf.isbn,
      image_gallery,
      wordpressModel.acf.social_media_image,
      wordpressModel.date
    )
  }

  static toDocumentationModel = wordpressModel => {
    let event_relation = wordpressModel.acf.event_relation
      ? wordpressModel.acf.event_relation.map(relation => {
          return relation.wordpress_id
        })
      : null
    return new DocumentationModel(
      wordpressModel.wordpress_id,
      wordpressModel.slug,
      wordpressModel.acf.DE,
      wordpressModel.acf.EN,
      wordpressModel.acf.documentation_type,
      event_relation,
      wordpressModel.acf.exp_number,
      wordpressModel.acf.language,
      wordpressModel.acf.mp3_upload,
      wordpressModel.acf.video,
      wordpressModel.acf.image_gallery,
      wordpressModel.acf.thumbnail_image,
      !wordpressModel.acf.documentation_not_attached_to_event,
      !wordpressModel.acf.unlist_document_on_media_overview,
      wordpressModel.date
    )
  }

  static toResourceGenreModel = wordpressModel => {
    return new ResourceGenreModel(
      wordpressModel.wordpress_id,
      wordpressModel.slug,
      wordpressModel.name
    )
  }

  static toPageModel = wordpressModel => {
    return new PageModel(
      wordpressModel.wordpress_id,
      wordpressModel.slug,
      wordpressModel.acf.DE_row
        ? wordpressModel.acf.DE_row.german_page_slug
        : null,
      wordpressModel.parent_element ? wordpressModel.parent_element.slug : null
    )
  }
  static toEventModel = wordpressModel => {
    let venue

    if (wordpressModel.acf.event_venue_selection) {
      venue = wordpressModel.acf.event_venue_selection.map(venue => {
        return venue.wordpress_id
      })
    }

    let documentation

    if (wordpressModel.acf.event_documentation) {
      documentation = wordpressModel.acf.event_documentation.map(doc => {
        return doc.wordpress_id
      })
    }

    return new EventsModel(
      wordpressModel.wordpress_id,
      wordpressModel.slug,
      wordpressModel.acf.exp_number,
      wordpressModel.acf.EN,
      wordpressModel.acf.DE,
      wordpressModel.acf.dates,
      venue,
      documentation,
      wordpressModel.acf.event_is_free,
      wordpressModel.acf.event_language,
      wordpressModel.acf.event_limited_capacity,
      wordpressModel.acf.thumbnail_image,
      wordpressModel.acf.participants,
      wordpressModel.acf.related_resources,
      wordpressModel.acf.other_event_language,
      wordpressModel.acf.other_event_language_de,
      wordpressModel.acf.embed_video_in_event
    )
  }

  static toExhibitionModel = wordpressModel => {
    let image_gallery = wordpressModel.acf.exhibition_image_gallery
      ? wordpressModel.acf.exhibition_image_gallery.map(img => {
          return img.wordpress_id
        })
      : null
    return new ExhibitionModel(
      wordpressModel.wordpress_id,
      wordpressModel.slug,
      wordpressModel.acf.exp_number,
      {
        ...wordpressModel.acf.EN,
        temp_exp_graphic: wordpressModel.acf.temp_exp_graphic_en,
      },
      {
        ...wordpressModel.acf.DE,
        temp_exp_graphic: wordpressModel.acf.temp_exp_graphic_de,
      },
      wordpressModel.acf.start_date,
      wordpressModel.acf.end_date,
      wordpressModel.acf.exhibition_venue,
      wordpressModel.acf.exhibition_floorplan,
      wordpressModel.acf.exhibition_participants,
      wordpressModel.acf.active_exhibition,
      wordpressModel.acf.exp_animation,
      wordpressModel.acf.temporary_exp_page,
      wordpressModel.acf.exp_open_days,
      wordpressModel.acf.use_gallery_images,
      image_gallery,
      wordpressModel.acf.exceptional_exp_closed_dates
    )
  }

  static toResourceModel = wordpressModel => {
    return new ResourceModel(
      wordpressModel.wordpress_id,
      wordpressModel.slug,
      wordpressModel.acf.caption_de,
      wordpressModel.acf.caption_en,
      wordpressModel.acf.publisher,
      wordpressModel.acf.publisher_external_url,
      wordpressModel.acf.resource_author,
      wordpressModel.acf.resource_description,
      wordpressModel.acf.resource_external_url,
      wordpressModel.acf.resource_external_url_label,
      wordpressModel.acf.resource_image,
      wordpressModel.acf.resource_label,
      wordpressModel.acf.resource_label_de,
      wordpressModel.acf.resource_type,
      wordpressModel.acf.resource_year,
      wordpressModel.acf.resource_year_de,
      wordpressModel.acf.subtitle,
      wordpressModel.acf.thumbnail_image,
      wordpressModel.acf.title,
      wordpressModel.acf.text_based_resource
        ? wordpressModel.acf.text_based_resource
        : null,
      wordpressModel.acf.floating_resource,
      wordpressModel.acf.image_gallery,
      wordpressModel.acf.mp3_file_upload,
      wordpressModel.acf.mp3_file_upload_label,
      wordpressModel.resource_genre,
      wordpressModel.acf.video
    )
  }

  static toParticipantModel = wordpressModel => {
    let related_documentation = wordpressModel.acf.related_documentation ? wordpressModel.acf.related_documentation.map((docu) => {
      return docu.wordpress_id
    }) : null;
    let related_resources = wordpressModel.acf.related_resources ? wordpressModel.acf.related_resources.map((resource) => {
      return resource.wordpress_id
    }) : null;
    let image_gallery = wordpressModel.acf.image_gallery ? wordpressModel.acf.image_gallery.map((resource) => {
      return resource.wordpress_id
    }) : null;
    return new ParticipantModel(
      wordpressModel.wordpress_id,
      wordpressModel.slug,
      wordpressModel.acf.exp_number,
      wordpressModel.acf.EN,
      wordpressModel.acf.DE,
      wordpressModel.acf.firstname,
      wordpressModel.acf.lastname,
      wordpressModel.acf.sorting_name,
      wordpressModel.acf.personal_website,
      wordpressModel.acf.is_artist_in_exhibition,
      wordpressModel.acf.participant_group,
      wordpressModel.acf.participant_video,
      wordpressModel.acf.social_media_image,
      related_documentation,
      related_resources,
      image_gallery
    )
  }

  static toVenueModel = wordpressModel => {
    let image_gallery = wordpressModel.acf.image_gallery.map((image) => {
      return image.wordpress_id
    })

    return new VenueModel(
      wordpressModel.wordpress_id,
      wordpressModel.slug,
      wordpressModel.date,
      wordpressModel.acf.deutsch,
      wordpressModel.acf.english,
      wordpressModel.acf.google_map_link,
      wordpressModel.acf.thumbnail_image,
      wordpressModel.acf.venue_address,
      wordpressModel.acf.venue_city,
      wordpressModel.acf.venue_plz,
      wordpressModel.acf.venue_public_transit,
      wordpressModel.acf.venue_tel,
      wordpressModel.acf.venue_wheelchair_access,
      image_gallery
    )
  }

  static toNavbarModel = wordpressModel => {
    return new NavbarModel(wordpressModel.object_slug, wordpressModel.title)
  }
  static toDocumentModel = wordpressModel => {
    return new DocumentModel(
      wordpressModel.wordpress_id,
      wordpressModel.mime_type,
      wordpressModel.source_url,
      wordpressModel.slug,
      wordpressModel.acf ? wordpressModel.acf.caption_en : "",
      wordpressModel.acf ? wordpressModel.acf.caption_de : "",
      wordpressModel.localFile && wordpressModel.localFile.childImageSharp
        ? wordpressModel.localFile.childImageSharp.fluid
        : null,
      wordpressModel.localFile && wordpressModel.localFile.publicURL
        ? wordpressModel.localFile.publicURL
        : null
    )
  }
  static toModelArray = (wordpressQuery, modelConverter) => {
    const modelArray = []
    wordpressQuery.edges.map(wordpressModel => {
      let model = modelConverter(wordpressModel.node)
      modelArray.push(model)
    })
    return modelArray
  }

  static eventsToCalendarItemArray = eventsArray => {
    let calendarItems = []
    eventsArray.forEach(event => {
      event.dates.forEach((date, index) => {
        if (date.end_date) {
          let d = DateManager.daysBetween(date.start_date, date.end_date) + 1
          for (let i = 0; i < d; i++) {
            calendarItems.push(
              new CalendarItemModel(
                `event-${event.id}-${index}`,
                `event/${event.slug}`,
                "Talk",
                "event",
                date.display_time,
                DateManager.add(i, date.start_date),
                date.end_date,
                event.venue,
                event.participants,
                event.is_free,
                event.limited_capacity,
                event.experience,
                {
                  title: event.EN.event_title,
                  description: event.EN.full_description,
                  display_time: date.EN.display_time,
                  subtitle: event.EN.event_subtitle,
                  other_language: event.other_language,
                },
                {
                  title: event.DE.event_title,
                  description: event.DE.full_description,
                  display_time: date.DE.display_time,
                  subtitle: event.DE.event_subtitle,
                  other_language: event.other_language_de,
                },
                null,
                event.language
                // { ...event.EN, ...date.EN },
                // { ...event.DE, ...date.DE },
              )
            )
          }
        } else {
          calendarItems.push(
            new CalendarItemModel(
              `event-${event.id}-${index}`,
              `event/${event.slug}`,
              "Talk",
              "event",
              date.display_time,
              date.start_date,
              date.end_date,
              event.venue,
              event.participants,
              event.is_free,
              event.limited_capacity,
              event.experience,
              {
                title: event.EN.event_title,
                description: event.EN.full_description,
                display_time: date.EN.display_time,
                subtitle: event.EN.event_subtitle,
                other_language: event.other_language,
              },
              {
                title: event.DE.event_title,
                description: event.DE.full_description,
                display_time: date.DE.display_time,
                subtitle: event.DE.event_subtitle,
                other_language: event.other_language_de,
              },
              null,
              event.language
              // { ...event.EN, ...date.EN },
              // { ...event.DE, ...date.DE },
            )
          )
        }
      })
    })
    return calendarItems
  }

  static exhibitionsToCalendarItemArray = exhibitionsArray => {
    let calendarItems = []

    exhibitionsArray.forEach(exhibition => {
      let openDays = []

      let days = Object.keys(exhibition.open_days)
      days.forEach(day => {
        if (exhibition.open_days[day]) {
          openDays.push(capitalise(day))
        }
      })

      let start_date = moment(exhibition.start_date, "YYYYMMDD")
      let end_date = moment(exhibition.end_date, "YYYYMMDD")
      let diff = end_date.diff(start_date, "d") + 1
      for (let i = 0; i < diff; i++) {
        let start = start_date.clone()
        start.add(i, "days")
        let dayOfWeek = start
          .locale("en")
          .clone()
          .format("dddd")
        if (openDays.includes(dayOfWeek)) {
          calendarItems.push(
            new CalendarItemModel(
              `exhibition-${exhibition.id}`,
              `exhibition/${exhibition.slug}`,
              "Exhibition",
              "exhibition",
              exhibition.start_time,
              start,
              exhibition.end_date,
              exhibition.venue,
              exhibition.participants,
              true,
              true,
              [exhibition.experience],
              {
                title: exhibition.EN.title,
                description: exhibition.EN.description,
                display_time: exhibition.EN.start_time,
                subtitle: "",
                other_language: null,
              },
              {
                title: exhibition.DE.title,
                description: exhibition.DE.description,
                display_time: exhibition.DE.start_time,
                subtitle: "",
                other_language: null,
              },
              exhibition.closed_dates,
              null
            )
          )
        }
      }
    })

    return calendarItems
  }
}
