
export class ParticipantModel {
    constructor(id, slug, experience, en, de, firstname, lastname, sorting_name, personal_website, in_exhibition, group) {
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
    }
}