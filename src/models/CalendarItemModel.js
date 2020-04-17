export class CalendarItemModel {
  constructor(
    id,
    slug,
    type,
    item,
    start_time,
    start_date,
    end_date,
    venue,
    participants,
    is_free,
    limited_capacity,
    experience,
    EN,
    DE,
    closed_dates,
    language = null
  ) {
    this.id = id
    this.slug = slug
    this.type = type
    this.item = item;
    this.start_time = start_time
    this.start_date = start_date
    this.end_date = end_date
    this.venue = venue
    this.participants = participants
    this.is_free = is_free;
    this.limited_capacity = limited_capacity;
    this.experience = experience
    this.EN = EN;
    this.DE = DE;
    this.closed_dates = closed_dates;
    this.language = language;
  }
}
