export class VenueModel {
  constructor(
    id,
    slug,
    date,
    deutsch,
    english,
    google_map_link,
    thumbnail_image,
    address,
    city,
    plz,
    public_transit,
    tel,
    wheelchair_access,
    image_gallery
  ) {
    this.id = id
    this.slug = slug
    this.date = date;
    this.DE = deutsch
    this.EN = english
    this.google_map_link = google_map_link
    this.thumbnail_image = thumbnail_image
    this.address = address
    this.city = city
    this.plz = plz
    this.public_transit = public_transit
    this.tel = tel
    this.wheelchair_access = wheelchair_access
    this.image_gallery = image_gallery
  }
}
