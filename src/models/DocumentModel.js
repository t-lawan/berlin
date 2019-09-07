export class DocumentModel {
  constructor(id, mime_type, url, slug, caption_en, caption_de) {
    this.id = id
    this.type = getType(mime_type);
    this.url = url;
    this.slug = slug;
    this.EN = {
        caption: caption_en
    }
    this.DE = {
        caption: caption_de
    }
  }
}

const getType = mime_type => {
  let type = ""
  switch (mime_type) {
    case mime_type.includes('image'):
      type = DocumentType.image
      break
    case mime_type.includes('pdf'):
      type = DocumentType.pdf
      break
    default:
        type = Document.unknown 
  }

  return type;
}

const DocumentType = {
  image: "image",
  pdf: "pdf",
  unknown: "unknown"
}
