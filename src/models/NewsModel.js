export class NewsModel {
    constructor (id, slug, en, de, experience, related_articles) {
        this.id = id;
        this.slug = slug;
        this.en = en;
        this.de = de;
        this.experience = experience;
        this.related_articles = related_articles;
    }
}