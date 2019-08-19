export class CalendarItemModel {
  constructor(
    id,
    slug,
    type,
    start_time,
    start_date,
    end_date,
    venue,
    is_free,
    participants,
    EN,
    DE
  ) {
    this.id = id
    this.slug = slug
    this.type = type
    this.start_time = start_time
    this.start_date = start_date
    this.end_date = end_date
    this.venue = venue
    this.is_free = is_free
    this.participants = participants
    this.EN = EN;
    this.DE = DE;
  }
}
