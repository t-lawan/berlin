const faker = require('faker');

export class EventsModel {
    constructor (id, slug, experience, en, de, start_date, end_date, venue){
        this.id = id
        this.slug = slug;
        this.experience = experience;
        this.EN = en;
        this.DE = de;
        this.start_date = start_date;
        this.end_date = end_date;
        this.venue = venue;
    }
}

export const generateEvents = (numberOfEvents) => {
    const eventsArray = [];
    for(let i=0; i < numberOfEvents; i++) {
        const event = new EventsModel(
            i + 1,
            faker.random.word(),
            Math.floor(Math.random() * 4) + 1,
            {
                title: faker.random.word(),
                subtitle: faker.random.words(10),
                time: `${faker.random.number(1,2)} pm`,
                short_description: faker.random.words(30), 
                long_description: faker.random.words(80), 
            },
            {
                title: faker.random.word(),
                subtitle: faker.random.words(10),
                time: `${faker.random.number(1,2)} pm`,
                short_description: faker.random.words(30), 
                long_description: faker.random.words(80), 
            },
            faker.date.recent(1),
            faker.date.recent(5),
            faker.random.word(2)
        );
        eventsArray.push(event);
    }

    return eventsArray;
};