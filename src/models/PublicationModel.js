export default class PublicationModel {
    id;
    EN;
    DE;
    dimensions;
    experience;
    isbn;
    pageCount;
    constructor(id, EN, DE, dimensions, experience, isbn, page_count) {
        this.id = id;
        this.EN = EN;
        this.DE = DE;
        this.dimensions = dimensions;
        this.experience = experience;
        this.isbn = isbn;
        this.pageCount = page_count;
    }
}