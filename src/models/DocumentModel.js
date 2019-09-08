export class DocumentModel {
  constructor(id, mime_type, url, slug, caption_en, caption_de) {
    this.id = id
    this.type = getType(mime_type)
    this.url = url
    this.slug = slug
    this.EN = {
      caption: caption_en,
    }
    this.DE = {
      caption: caption_de,
    }
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
    case "application/pdf":
      type = DocumentType.pdf
      break
    default:
      type = Document.unknown
  }
  return type
}

const DocumentType = {
  image: "image",
  pdf: "pdf",
  unknown: "unknown",
}
