const faker = require("faker")
const moment  = require('moment');
export class EventsModel {
  constructor(
    id,
    slug,
    experience,
    EN,
    DE,
    start_date,
    start_time,
    end_date,
    venue,
    event_documentation,
    event_is_free,
    event_language,
    event_limited_capacity,
    thumbnail_image,
    participants,
    related_resource,
    other_event_language
  ) {
    this.id = id
    this.slug = slug
    this.experience = experience
    this.EN = EN
    this.DE = DE
    this.start_date = start_date
    this.start_time = start_time;
    this.end_date = end_date
    this.venue = venue
    this.documentation = event_documentation
    this.is_free = event_is_free
    this.language = event_language
    this.limited_capacity = event_limited_capacity
    this.thumbnail_image = thumbnail_image
    this.participants = participants
    this.related_resource = related_resource;
    this.other_language = other_event_language
  }
}

export const generateEvents = numberOfEvents => {
  const eventsArray = []
  for (let i = 0; i < numberOfEvents; i++) {
    const language = {
      display_time: `${Math.floor(Math.random() * 4) + 1} pm`,
      title: faker.random.word(),
      subtitle: faker.random.words(),
      time: `${faker.random.number(1, 2)} pm`,
      short_calendar_description: faker.random.words(10),
      full_description: faker.random.words(80),
    }

    const event = new EventsModel(
      i + 1,
      faker.random.word(),
      Math.floor(Math.random() * 4) + 1,
      language,
      language,
      moment(faker.date.between('2019-08-01', '2019-12-31'), "YYYY-MM-DD HH:mm Z").format('YYYYMMDD'),
      `${faker.random.number(1, 2)} pm`,
      moment(faker.date.between('2019-08-01', '2019-12-31'), "YYYY-MM-DD HH:mm Z").format('YYYYMMDD'),
      faker.random.word(2),
      "",
      faker.random.boolean,
      "en",
      faker.random.boolean,
      false,
      "",
      "",
      null
    )
    eventsArray.push(event)
  }

  return eventsArray
}
