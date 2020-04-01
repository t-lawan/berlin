export class NewsModel {
  constructor(
    id,
    slug,
    experience,
    en,
    de,
    show_in_feed,
    has_link,
    thumbnail_image,
    dates,
    display_date
  ) {
    this.id = id
    this.slug = slug
    this.experience = experience
    this.EN = en
    this.DE = de
    this.show_in_feed = show_in_feed
    this.has_link = has_link
    this.thumbnail_image = thumbnail_image;
    this.dates = dates;
    this.display_date = display_date;
  }
}
