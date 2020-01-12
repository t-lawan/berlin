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

export const pageMap = [
  {EN: "event", DE: "veranstaltung"},
  {EN: "about", DE: "uber"},
  {EN: "resource", DE: "resource"},
  {EN: "exhibition", DE: "austellung"},
  {EN: "venue", DE: "ort"},
  {EN: "documentation", DE: "dokumentation"},
  {EN: "participant", DE: "beteiligte"},
  {EN: "news", DE: "news"},
  {EN: "current", DE: "aktuell"},
]

export const transitionBackground = "url(https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/waitaminute1.gif) center no-repeat fixed white"

export const createPath = (language, path) => {
  let prePath = pageMap.find((pageType) => {
    let type = path.split('/')[0].toLowerCase();
    return pageType.EN == type || pageType.DE == type;
  });

  let newPath;
  if(prePath && prePath.length !== 0) {
    newPath =
    language === "EN" ? `/${prePath[language]}${path.split('/')[1] ? '/' + path.split('/')[1] : ''}` : `/${language.toLowerCase()}/${prePath[language]}${path.split('/')[1] ? '/' + path.split('/')[1] : ''}`
  } else {
    newPath = language === "EN" ? `/${path}` : `/${language.toLowerCase()}/${path}`;
  }

  return newPath
}


const getPathForLanguage = (language, slug) => {
  
}

export const createProperty = (property, language) => {
  return `${property}_${language.toLowerCase()}`
}
