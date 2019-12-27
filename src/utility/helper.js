export const getCurrentLanguageString = languageStateObject => {
  if (languageStateObject.EN) {
    return "EN"
  } else {
    return "DE"
  }
}

export const pageMap = [
  {EN: "event", DE: "veranstaltung"},
  {EN: "about", DE: "uber"},
  {EN: "resource", DE: "resource"},
  {EN: "exhibition", DE: "exhibition"},
  {EN: "venue", DE: "venue"},
  {EN: "documentation", DE: "dokumentation"},
  {EN: "participant", DE: "participant"},
  {EN: "news", DE: "news"},
];

export const createPath = (language, path) => {
  let prePath = pageMap.find((pageType) => {
    let type = path.split('/')[0].toLowerCase();
    return pageType.EN == type || pageType.DE == type;
  });

  let newPath;
  if(prePath && prePath.length !== 0) {
    newPath =
    language === "EN" ? `/${prePath[language]}${path.split('/')[1] ? '/' + path.split('/')[1] : ''}` : `/${language.toLowerCase()}/${prePath[language]}${path.split('/')[1] ? '/' + path.split('/')[1] : ''}`
    console.log(path,path.split('/')[1]);
    

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
