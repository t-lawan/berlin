export class EventsModel {
  constructor(
    id,
    slug,
    experience,
    EN,
    DE,
    dates,
    venue,
    event_documentation,
    event_is_free,
    event_language,
    event_limited_capacity,
    thumbnail_image,
    participants,
    related_resource,
    other_event_language,
    other_event_language_de,
    video
  ) {
    this.id = id
    this.slug = slug
    this.experience = experience
    this.EN = {
      ...EN,
      other_language: other_event_language
    }
    this.DE = {
      ...DE,
      other_language: other_event_language_de
    }
    this.dates = dates
    this.venue = venue
    this.documentation = event_documentation
    this.is_free = event_is_free
    this.language = event_language
    this.limited_capacity = event_limited_capacity
    this.thumbnail_image = thumbnail_image
    this.participants = participants
    this.related_resource = related_resource
    this.other_language = other_event_language
    this.other_language_de = other_event_language_de,
    this.video = video;
  }
}
