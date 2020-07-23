export class NavbarModel {
  constructor(slug, title_en, title_de, exp_4_title_en, exp_4_title_de, isExternal = false, isActive = true) {
    this.slug = slug
    this.EN = {
      title: title_en,
      exp_4_title: exp_4_title_en
    };
    this.DE = {
      title: title_de,
      exp_4_title: exp_4_title_de
    }
    this.title = title_en
    this.isExternal = isExternal
    this.isActive =  isActive;
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