export class DocumentModel {
  constructor(id, mime_type, url, slug, caption_en, caption_de, fluid, publicUrl) {
    this.id = id
    this.type = getType(mime_type)
    this.url = url
    this.mime_type = mime_type
    this.slug = slug
    this.fluid = fluid
    this.EN = {
      caption: caption_en,
    }
    this.DE = {
      caption: caption_de,
    }
    this.publicUrl = publicUrl;
  }
}

const getType = mime_type => {
  let type = ""
  switch (mime_type) {
    case "image/jpeg":
      type = DocumentType.image
      break
    case "image/png":
      type = DocumentType.image
      break
    case "image/svg+xml":
      type = DocumentType.image
      break
    case "image/gif":
      type = DocumentType.image
      break
    case "application/pdf":
      type = DocumentType.pdf
      break
    case "audio/mpeg":
      type = DocumentType.audio
      break
    case "application/zip":
      type = DocumentType.zip
      break
    default:
      type = DocumentType.unknown
  }
  return type
}

const DocumentType = {
  image: "image",
  pdf: "pdf",
  audio: "audio",
  zip: "zip",
  unknown: "unknown",
}
