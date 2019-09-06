import { NewsModel } from "../models/NewsModel";
import { EventsModel } from "../models/EventsModel";
import { CalendarItemModel } from "../models/CalendarItemModel";
import { ExhibitionModel } from "../models/ExhibitionModel";
import { ParticipantModel } from "../models/ParticipantModel";
import { VenueModel } from "../models/VenueModel";

export class Convert {

    static toNewsModel = (wordpressModel) => {
        return new NewsModel(
            wordpressModel.wordpress_id,
            wordpressModel.slug,
            wordpressModel.acf.en,
            wordpressModel.acf.de,
            wordpressModel.acf.experience,
            wordpressModel.acf.related_articles
            )
    }
    static toEventModel = (wordpressModel) => {
        return new EventsModel(
            wordpressModel.id,
            wordpressModel.slug,
            wordpressModel.acf.exp_number,
            wordpressModel.acf.EN,
            wordpressModel.acf.DE,
            wordpressModel.acf.start_date,
            wordpressModel.acf.start_time,
            wordpressModel.acf.end_date,
            "Venue",
            null,
            wordpressModel.acf.event_is_free,
            wordpressModel.acf.event_language,
            wordpressModel.acf.event_limited_capacity,
            wordpressModel.acf.thumbnail_image,
            wordpressModel.acf.participants,
            wordpressModel.acf.related_resources,
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
            "1 am",
            wordpressModel.acf.start_date,
            wordpressModel.acf.end_date,
            wordpressModel.acf.exhibition_venue,
            null,
            null
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
            wordpressModel.id,
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
    static toModelArray = (wordpressQuery, modelConverter) => {
        const modelArray = [];
        wordpressQuery.edges.map(wordpressModel => {
            let model = modelConverter(wordpressModel.node);
            modelArray.push(model);
        });
        return modelArray;
    }

    static eventsToCalendarItemArray = (eventsArray) => {
        let calendarItems = [];
        eventsArray.forEach(event => {
            event.dates.forEach((date, index) => {
                calendarItems.push(new CalendarItemModel(
                    `event-${event.id}-${index}`,
                    `/event/${event.slug}`,
                    'Talk',
                    date.display_time,
                    date.start_date,
                    date.end_date,
                    event.venue,
                    event.participants,
                    event.EN,
                    event.DE
                ))
            })

        });
        return calendarItems;
    }

    static exhibitionsToCalendarItemArray = (exhibitionsArray) => {
        let calendarItems = [];
        exhibitionsArray.forEach(exhibition => {
            calendarItems.push(new CalendarItemModel(
                `exhibition-${exhibition.id}`,
                `/exhibition/${exhibition.slug}`,
                'Exhibition',
                exhibition.start_time,
                exhibition.start_date,
                exhibition.end_date,
                exhibition.venue,
                exhibition.participants,
                exhibition.EN,
                exhibition.DE
            ))
        });
        return calendarItems;
    }
}