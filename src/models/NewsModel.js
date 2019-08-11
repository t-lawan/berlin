const faker = require('faker');


export class NewsModel {
    constructor (id, slug, experience, en, de, related_articles) {
        this.id = id;
        this.slug = slug;
        this.experience = experience;
        this.EN = en;
        this.DE = de;
        this.related_articles = related_articles;
    }
}

export const generateNewsArticles = (numberOfArticles) => {
    const newsArticleArray = [];
    for(let i=0; i < numberOfArticles; i++) {
        const newsArticle = new NewsModel(
            i + 1,
            faker.random.word(),
            Math.floor(Math.random() * 4) + 1,
            {
                title: faker.random.word(3),
                content: faker.random.words(100),
                description: faker.random.words(10),
            },
            {
                title: faker.random.word(3),
                content: faker.random.word(100),
                description: faker.random.word(10),
            },
            [faker.random.number(), faker.random.number()]
        );
        newsArticleArray.push(newsArticle);
    }
    return newsArticleArray;
}
