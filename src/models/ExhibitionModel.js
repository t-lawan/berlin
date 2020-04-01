export class ExhibitionModel {
  constructor(
    id,
    slug,
    experience,
    EN,
    DE,
    start_date,
    end_date,
    venue,
    floor_plan,
    participants,
    active,
    animation,
    temporary_uploaded, 
    open_days,
    has_gallery_images,
    gallery_images
  ) {
    this.id = id
    this.slug = slug
    this.experience = experience
    this.EN = {
      ...EN,
      start_time: '2–7 pm'
    }
    this.DE = {
      ...DE,
      start_time: '14–19 Uhr'
    }
    this.start_date = start_date
    this.end_date = end_date
    this.venue = venue
    this.floor_plan = floor_plan
    this.participants = participants
    this.active = active
    this.animation = animation;
    this.temporary_uploaded = temporary_uploaded;
    this.open_days = open_days;
    this.has_gallery_images = has_gallery_images;
    this.gallery_images = gallery_images
  }
}
