export class CalendarItemModel {
  constructor(
    id,
    slug,
    type,
    start_time,
    start_date,
    end_date,
    venue,
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
    this.participants = participants
    this.EN = EN;
    this.DE = DE;
  }
}
