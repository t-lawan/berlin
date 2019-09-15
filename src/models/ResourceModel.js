export class ResourceModel {
  constructor(
    id,
    slug,
    caption_de,
    caption_en,
    publisher,
    publisher_external_url,
    resource_author,
    resource_description,
    resource_external_url,
    resource_external_url_label,
    resource_image,
    resource_label,
    resource_label_de,
    resource_type,
    resource_year,
    resource_year_de,
    subtitle,
    thumbnail_image,
    title,
    text_based_resource,
    floating_resource,
    image_gallery
  ) {
    this.id = id
    this.slug = slug
    this.external_url = resource_external_url;
    this.external_url_label = resource_external_url_label;
    this.author = resource_author;
    this.description = resource_description;
    this.image = resource_image;
    this.type = resource_type;
    this.subtitle = subtitle;
    this.thumbnail_image = thumbnail_image;
    this.title = title;
    this.text_based_resource = text_based_resource;
    this.floating_resource = floating_resource;
    this.image_gallery = image_gallery;
    this.publisher = {
        title: publisher,
        external_url: publisher_external_url
    }
    this.EN = {
      caption: caption_en,
      label: resource_label,
      year: resource_year
    }
    this.DE = {
      caption: caption_de,
      label: resource_label_de,
      year: resource_year_de
    }
  }
}
