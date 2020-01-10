export class DocumentationModel {
    id;
    slug;
    DE;
    EN;
    type;
    related_events;
    experience;
    language;
    other_event_language_de;
    other_event_language;
    audio;
    video;
    image_gallery;
    constructor(id, slug, DE, EN, type, related_events, experience, language, other_event_language_de, other_event_language, audio, video, image_gallery) {
        this.id = id;
        this.slug = slug;
        this.DE = DE;
        this.EN = EN;
        this.type = type;
        this.related_events = related_events;
        this.experience = experience;
        this.language = language;
        this.other_event_language_de = other_event_language_de;
        this.other_event_language = other_event_language;
        this.audio = audio;
        this.video =video;
        this.image_gallery = image_gallery;
    }
}