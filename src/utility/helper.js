export const getCurrentLanguageString = languageStateObject => {
  if (languageStateObject.EN) {
    return "EN"
  } else {
    return "DE"
  }
}

export const truncateText = (text, number = 25) => {
  return text.split(' ').slice(0, number).join(' ');
}

export const getNumberOfWords = (text) => {
  return text.split(' ').length;
}

export const transitionTimes = {
  animationInDuration: 120,
  animationOutDuration: 100,
  visibleDelayTime: 290,
  changeExperienceDelayTime: 750,
  timeOutForEachExperiences: 10
}

export  const pageMap = [
  { EN: "event", DE: "veranstaltung" },
  { EN: "c-o-exrotaprint", DE: "c-o-exrotaprint" },
  { EN: "about", DE: "uber" },
  { EN: "about/team", DE: "uber/team" },
  { EN: "about/organization", DE: "uber/verein" },
  { EN: "about/advisory-board", DE: "uber/beirat" },
  { EN: "about/support", DE: "uber/unterstutzung" },
  { EN: "resources", DE: "resources" },
  { EN: "exhibition", DE: "austellung" },
  { EN: "venue", DE: "ort" },
  { EN: "venues", DE: "orte" },
  { EN: "documentation", DE: "dokumentation" },
  { EN: "participant", DE: "beteiligten" },
  { EN: "participants", DE: "beteiligte" },
  { EN: "news", DE: "news" },
  { EN: "current", DE: "aktuell" },
  { EN: "calendar", DE: "kalender" },
  { EN: "data-privacy", DE: "datenschutz" },
  { EN: "imprint", DE: "impressum" },
  { EN: "media", DE: "mediathek" },
  { EN: "press", DE: "presse" },
  { EN: "publications", DE: "publikationen" },
  { EN: "publication", DE: "publikation" },
  { EN: "press-images", DE: "pressebilder" },
  { EN: "practical-information", DE: "praktische-information" },
  { EN: "practical-information/admission", DE: "praktische-information/eintritt" },
  { EN: "practical-information/access", DE: "praktische-information/anfahrt" },
  { EN: "practical-information/opening-hours", DE: "praktische-information/oeffnungszeiten" },
  { EN: "practical-information/faq", DE: "praktische-information/faq" },
  { EN: "practical-information/anti-discrimination-clause", DE: "praktische-information/antidiskriminierungsklausel" },
  { EN: "practical-information/accommodation", DE: "praktische-information/unterkunft" },
  { EN: "exchange", DE: "austausch" },
  { EN: "exchange/gatherings", DE: "austausch/gatherings" },
  { EN: "exchange/tours", DE: "austausch/rundgaenge" },
  { EN: "exchange/tandem-thursday", DE: "austausch/tandem-donnerstag" },
  { EN: "exchange/family-hours", DE: "austausch/familienzeit" },
  { EN: "exchange/curatorial-workshop", DE: "austausch/curatorial-workshop" },
]

export const transitionBackground = "url(https://admin11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/waitaminute1.gif) center no-repeat fixed white"
export const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const capitalise = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
 export const createPath = (language, path) => {
  let prePath = pageMap.find((pageType) => {
    let type;
    if(path.includes('about') || path.includes('uber') || path.includes('practical-information') || path.includes('praktische-information')) {
      type = path.toLowerCase();
    } else {
      type = path.split('/')[0].toLowerCase();
    }


    return pageType.EN == type || pageType.DE == type;
  });




  let newPath;
  if(prePath && prePath.length !== 0) {
    if(path.includes('about') || path.includes('uber') || path.includes('practical-information')  || path.includes('praktische-information')) {
      newPath =
      language === "EN" ? `/${prePath[language]}` : `/${language.toLowerCase()}/${prePath[language]}`
    } else {
      newPath =
      language === "EN" ? `/${prePath[language]}${path.split('/')[1] ? '/' + path.split('/')[1] : ''}` : `/${language.toLowerCase()}/${prePath[language]}${path.split('/')[1] ? '/' + path.split('/')[1] : ''}`
    }


  } else {
    newPath = language === "EN" ? `/${path}` : `/${language.toLowerCase()}/${path}`;
  }

  return newPath
}

export const createProperty = (property, language) => {
  return `${property}_${language.toLowerCase()}`
}
