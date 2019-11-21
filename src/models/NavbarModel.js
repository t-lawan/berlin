export class NavbarModel {
  constructor(slug, title_en, title_de, isExternal = false) {
    this.slug = slug
    this.EN = {
      title: title_en
    };
    this.DE = {
      title: title_de
    }
    this.title = title_en
    this.isExternal = isExternal
  }
}


export const NavbarTitleConfig = {
  "practical-information": {
    DE: "praktische information"
  },
  "calendar": {
    DE: "kalendar"
  },
  "about": {
    DE: "über"
  },
  "press": {
    DE: "presse"
  },
  shop: {
    DE: "shop"
  }
}