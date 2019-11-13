import { NewsModel } from "../models/NewsModel"
import { EventsModel } from "../models/EventsModel"
import { CalendarItemModel } from "../models/CalendarItemModel"
import { ExhibitionModel } from "../models/ExhibitionModel"
import { ParticipantModel } from "../models/ParticipantModel"
import { VenueModel } from "../models/VenueModel"
import { DocumentModel } from "../models/DocumentModel"
import { ResourceModel } from "../models/ResourceModel";
import { NavbarModel } from "../models/NavbarModel";
import { ResourceGenreModel } from "../models/ResourceGenre";
import { PageModel } from "../models/PageModel";
import moment from 'moment';
export class Convert {
  static toNewsModel = wordpressModel => {
    return new NewsModel(
      wordpressModel.wordpress_id,
      wordpressModel.slug,
      wordpressModel.acf.en,
      wordpressModel.acf.de,
      wordpressModel.acf.experience,
      wordpressModel.acf.related_articles
    )
  }

  static toResourceGenreModel = wordpressModel => {
    return new ResourceGenreModel(
      wordpressModel.slug,
      wordpressModel.name
    )
  }

  static toPageModel = wordpressModel => {
    return new PageModel(
      wordpressModel.wordpress_id,
      wordpressModel.slug,
      wordpressModel.acf.DE_row ? wordpressModel.acf.DE_row.german_page_slug : null,
      wordpressModel.parent_element ? wordpressModel.parent_element.slug : null

    )
  }
  static toEventModel = wordpressModel => {
    const venue = wordpressModel.acf.event_venue_selection.map((venue) => {
      return venue.wordpress_id;
    })
    return new EventsModel(
      wordpressModel.wordpress_id,
      wordpressModel.slug,
      wordpressModel.acf.exp_number,
      wordpressModel.acf.EN,
      wordpressModel.acf.DE,
      wordpressModel.acf.dates,
      venue,
      null,
      wordpressModel.acf.event_is_free,
      wordpressModel.acf.event_language,
      wordpressModel.acf.event_limited_capacity,
      wordpressModel.acf.thumbnail_image,
      wordpressModel.acf.participants,
      // wordpressModel.acf.related_resources,
      wordpressModel.acf.other_event_language
    )
  }

  static toExhibitionModel = wordpressModel => {
    return new ExhibitionModel(
      wordpressModel.id,
      wordpressModel.slug,
      wordpressModel.acf.exp_number,
      wordpressModel.acf.EN,
      wordpressModel.acf.DE,
      "2-7pm",
      wordpressModel.acf.start_date,
      wordpressModel.acf.end_date,
      wordpressModel.acf.exhibition_venue,
      wordpressModel.acf.exhibition_floorplan,
      wordpressModel.acf.exhibition_participants,
      wordpressModel.acf.active_exhibition,
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
      wordpressModel.acf.text_based_resource ? wordpressModel.acf.text_based_resource : null,
      wordpressModel.acf.floating_resource,
      wordpressModel.acf.image_gallery,
      wordpressModel.acf.mp3_file_upload,
      wordpressModel.acf.mp3_file_upload_label,
    )
  }

  static toParticipantModel = wordpressModel => {
    return new ParticipantModel(
      wordpressModel.wordpress_id,
      wordpressModel.slug,
      wordpressModel.acf.exp_number,
      wordpressModel.acf.EN,
      wordpressModel.acf.DE,
      wordpressModel.acf.firstname,
      wordpressModel.acf.lastname,
      wordpressModel.acf.personal_website,
      wordpressModel.acf.image_gallery,
      wordpressModel.acf.is_artist_in_exhibition,
      wordpressModel.acf.participant_group,
      wordpressModel.acf.participant_venue
    )
  }

  static toVenueModel = wordpressModel => {
    return new VenueModel(
      wordpressModel.wordpress_id,
      wordpressModel.slug,
      wordpressModel.acf.DE,
      wordpressModel.acf.google_map_link,
      wordpressModel.acf.thumbnail_image,
      wordpressModel.acf.venue_address,
      wordpressModel.acf.venue_city,
      wordpressModel.acf.venue_plz,
      wordpressModel.acf.venue_public_transit,
      wordpressModel.acf.venue_tel,
      wordpressModel.acf.venue_wheelchair_access
    )
  }

  static toNavbarModel = wordpressModel => {
    return new NavbarModel(
      wordpressModel.object_slug,
      wordpressModel.title
    );
  }
  static toDocumentModel = wordpressModel => {
    return new DocumentModel(
      wordpressModel.wordpress_id,
      wordpressModel.mime_type,
      wordpressModel.source_url,
      wordpressModel.slug,
      wordpressModel.acf ? wordpressModel.acf.caption_en : "",
      wordpressModel.acf ? wordpressModel.acf.caption_de : "",
      wordpressModel.localFile && wordpressModel.localFile.childImageSharp ? wordpressModel.localFile.childImageSharp.fluid : null
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
            event.experience,
            {
              title: event.EN.event_title,
              description: event.EN.full_description,
              display_time: date.EN.display_time,
              subtitle: event.EN.event_subtitle,
            },
            {
              title: event.DE.event_title,
              description: event.DE.full_description,
              display_time: date.DE.display_time,
              subtitle: event.DE.event_subtitle,
            },
            // { ...event.EN, ...date.EN },
            // { ...event.DE, ...date.DE },
          )
        )
      })
    })
    return calendarItems
  }

  static exhibitionsToCalendarItemArray = exhibitionsArray => {
    let calendarItems = []
    
    exhibitionsArray.forEach(exhibition => {
      let start_date = moment(exhibition.start_date, "YYYYMMDD");
      let end_date = moment(exhibition.end_date, "YYYYMMDD");
      let diff = end_date.diff(start_date, 'd');
      for(let i = 0; i < diff; i++) {
        let start = start_date.clone();
        start.add(i, 'days');

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
            [exhibition.experience],
            {
              title: exhibition.EN.title,
              description: exhibition.EN.description,
              display_time: exhibition.start_time,
              subtitle: '',
            },
            {
              title: exhibition.DE.title,
              description: exhibition.DE.description,
              display_time: exhibition.start_time,
              subtitle: '',
            }
          )
        )
      }

    })

    return calendarItems
  }
}
