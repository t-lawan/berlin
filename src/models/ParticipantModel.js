
export class ParticipantModel {
    constructor(id, slug, experience, en, de, firstname, lastname, sorting_name, personal_website, in_exhibition, group, video, social_media_image, related_documentation, related_resources) {
        this.id = id;
        this.slug = slug;
        this.experience = experience;
        this.EN = en;
        this.DE = de;
        this.firstname = firstname;
        this.lastname = lastname;
        this.sorting_name = sorting_name;
        this.personal_website = personal_website;
        this.in_exhibition = in_exhibition;
        this.group = group;
        this.video = video;
        this.social_media_image = social_media_image;
        this.related_documentation = related_documentation;
        this.related_resources = related_resources;

    }
}