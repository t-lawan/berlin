export class NavbarModel {
  constructor(slug, title_en, title_de) {
    this.slug = slug
    this.EN = {
      title: title_en
    };
    this.DE = {
      title: title_de
    }
    this.title = title_en
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
  }
}