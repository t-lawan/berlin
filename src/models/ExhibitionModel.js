const faker = require("faker")
const moment = require("moment")

export class ExhibitionModel {
  constructor(
    id,
    slug,
    experience,
    EN,
    DE,
    start_date,
    end_date,
    venue,
    floor_plan,
    participants,
    active,
    animation,
    temporary_uploaded, 
    open_days
  ) {
    this.id = id
    this.slug = slug
    this.experience = experience
    this.EN = {
      ...EN,
      start_time: '2-7pm'
    }
    this.DE = {
      ...DE,
      start_time: '14-19Uhr'
    }
    this.start_date = start_date
    this.end_date = end_date
    this.venue = venue
    this.floor_plan = floor_plan
    this.participants = participants
    this.active = active
    this.animation = animation;
    this.temporary_uploaded = temporary_uploaded;
    this.open_days = open_days;
  }
}

export const generateExhibitions = numberOfExhibitions => {
  const exhibitionsArray = []
  for (let i = 0; i < numberOfExhibitions; i++) {
    const language = {
      title: faker.random.word(),
      subtitle: faker.random.word(10),
      short_calendar_description: faker.random.words(10),
      full_description: faker.random.word(20),
      time: `${faker.random.number(1, 2)} pm`,
      display_time: `${Math.floor(Math.random() * 4) + 1} pm`
    }

    const exhibition = new ExhibitionModel(
      i + 1,
      faker.random.word(),
      Math.floor(Math.random() * 4) + 1,
      language,
      language,
      {
        EN: `${Math.floor(Math.random() * 12) + 1} am`,
        DE: `${Math.floor(Math.random() * 12) + 1} AM`,
      },
      moment(
        faker.date.between("2019-08-01", "2019-12-31"),
        "YYYY-MM-DD HH:mm Z"
      ).format("YYYYMMDD"),
      moment(
        faker.date.between("2019-08-01", "2019-12-31"),
        "YYYY-MM-DD HH:mm Z"
      ).format("YYYYMMDD"),
      faker.random.word(3),
      null,
      null
    )
    exhibitionsArray.push(exhibition)
  }

  return exhibitionsArray
}
