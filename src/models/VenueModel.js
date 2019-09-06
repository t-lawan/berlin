export class VenueModel {
  constructor(
    id,
    slug,
    de,
    google_map_link,
    thumbnail_image,
    address,
    city,
    plz,
    public_transit,
    tel,
    wheelchair_access
  ) {
    this.id = id
    this.slug = slug
    this.DE = de
    this.EN = {
      access_info: "<p>It&#8217;s very nice, boo.</p>\n",
      venue_name: "11. London Biennale c/o ExRotaprint",
    }
    this.google_map_link = google_map_link
    this.thumbnail_image = thumbnail_image
    this.address = address
    this.city = city
    this.plz = plz
    this.public_transit = public_transit
    this.tel = tel
    this.wheelchair_access = wheelchair_access
  }
}
