export class PageModel {
    constructor(id, en_slug, de_slug, parent) {
        this.id = id;
        this.EN = {
            slug:en_slug
        };
        this.DE = {
            slug: de_slug
        };
        this.parent = parent;
    }
}