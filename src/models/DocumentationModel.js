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
    attached_to_event;
    list_on_media_overview;
    date;
    constructor(id, slug, DE, EN, type, related_events, experience, language, audio, video, image_gallery, thumbnail, attached_to_event, list_on_media_overview, date) {
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
        this.attached_to_event = attached_to_event;
        this.list_on_media_overview = list_on_media_overview;
        this.date = date;
    }
}