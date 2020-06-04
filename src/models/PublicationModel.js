export default class PublicationModel {
    id;
    slug;
    EN;
    DE;
    dimensions;
    experience;
    isbn;
    image_gallery;
    social_media_image;
    constructor(id, slug, EN, DE, experience, isbn, image_gallery, social_media_image) {
        this.id = id;
        this.slug = slug;
        this.EN = EN;
        this.DE = DE;
        this.experience = experience;
        this.isbn = isbn;
        this.image_gallery = image_gallery;
        this.social_media_image = social_media_image;
    }
}