const faker = require('faker');

export class ParticipantModel {
    constructor(id, slug, experience, en, de, firstname, lastname, personal_website, image_gallery, in_exhibition, group, venues) {
        this.id = id;
        this.slug = slug;
        this.experience = experience;
        this.EN = en;
        this.DE = de;
        this.firstname = firstname;
        this.lastname = lastname;
        this.personal_website = personal_website;
        this.image_gallery = image_gallery;
        this.in_exhibition = in_exhibition;
        this.group = group;
        this.venues = venues;
    }
}