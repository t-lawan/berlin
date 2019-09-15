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
    experience,
    EN,
    DE
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
    this.experience = experience
    this.EN = EN;
    this.DE = DE;
  }
}
