const faker = require("faker")

export class EventsModel {
  constructor(
    id,
    slug,
    experience,
    EN,
    DE,
    start_date,
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
    this.experience = this.convertExperienceStringToInt(experience)
    this.EN = EN
    this.DE = DE
    this.start_date = start_date
    this.end_date = end_date
    this.venue = venue
    this.documentation = event_documentation
    this.is_free = event_is_free
    this.language = event_language
    this.limited_capacity = event_limited_capacity
    this.thumbnail_image = thumbnail_image
    this.participants = participants
    this.related_resource = related_resource
    this.other_language = other_event_language
  }

  convertExperienceStringToInt = experienceString => {
    return +experienceString.replace("exp", "")
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
      `${Math.floor(Math.random() * 4) + 1}exp`,
      language,
      language,
      faker.date.recent(1),
      faker.date.recent(10),
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
