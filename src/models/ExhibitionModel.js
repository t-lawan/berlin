const faker = require("faker")
const moment  = require('moment');

export class ExhibitionModel {
    constructor(
        id,
        slug,
        experience,
        EN,
        DE,
        start_time,
        start_date,
        end_date,
        venue,
        floor_plan,
        participants
      ) {
        this.id = id
        this.slug = slug
        this.experience = experience
        this.EN = EN
        this.DE = DE
        this.start_time = start_time
        this.start_date = start_date
        this.end_date = end_date
        this.venue = venue
        this.floor_plan = floor_plan
        this.participants = participants
      }
}

export const generateExhibitions = numberOfExhibitions => {
    const exhibitionsArray = []
    for (let i = 0; i < numberOfExhibitions; i++) {
      const language = {
        title: faker.random.word(),
        subtitle: faker.random.word(10),
        description: faker.random.word(20)
      };
  
      const exhibition = new ExhibitionModel(
        i + 1,
        faker.random.word(),
        Math.floor(Math.random() * 4) + 1,
        language,
        language,
        `${faker.random.number(1, 2)} pm`,
        moment(faker.date.between('2019-08-01', '2019-12-31'), "YYYY-MM-DD HH:mm Z").format('Ymd'),
        moment(faker.date.between('2019-08-01', '2019-12-31'), "YYYY-MM-DD HH:mm Z").format('Ymd'),
        faker.random.word(3),
        null,
        null
        
      )
      exhibitionsArray.push(exhibition)
    }
  
    return exhibitionsArray
  }