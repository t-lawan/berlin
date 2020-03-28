export class DocumentationModel {
    id;
    slug;
    DE;
    EN;
    type;
    related_events;
    experience;
    language;
    audio;
    video;
    image_gallery;
    thumbnail;
    constructor(id, slug, DE, EN, type, related_events, experience, language, audio, video, image_gallery, thumbnail) {
        this.id = id;
        this.slug = slug;
        this.DE = DE;
        this.EN = EN;
        this.type = type;
        this.related_events = related_events;
        this.experience = experience;
        this.language = language;
        this.audio = audio;
        this.video =video;
        this.image_gallery = image_gallery;
        this.thumbnail = thumbnail;
    }
}