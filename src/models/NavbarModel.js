export class NavbarModel {
  constructor(slug, title_en, title_de, isExternal = false, isActive = true, isInExp13 = true, isInExp4 = true) {
    this.slug = slug
    this.EN = {
      title: title_en
    };
    this.DE = {
      title: title_de
    }
    this.title = title_en
    this.isExternal = isExternal
    this.isActive =  isActive;
    this.isInExp13 = isInExp13;
    this.isInExp4 = isInExp4;

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