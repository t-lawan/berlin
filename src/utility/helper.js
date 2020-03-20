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
  changeExperienceDelayTime: 100,
  timeOutForEachExperiences: 10
}

export  const pageMap = [
  { EN: "event", DE: "veranstaltung" },
  { EN: "about", DE: "uber" },
  { EN: "about/team", DE: "uber/team" },
  { EN: "about/organization-2", DE: "uber/verein" },
  { EN: "about/advisory-board", DE: "uber/beirat" },
  { EN: "about/support", DE: "uber/unterstutzung" },
  { EN: "resource", DE: "resource" },
  { EN: "exhibition", DE: "austellung" },
  { EN: "venue", DE: "ort" },
  { EN: "documentation", DE: "dokumentation" },
  { EN: "participant", DE: "beteiligte" },
  { EN: "news", DE: "news" },
  { EN: "current", DE: "aktuell" },
  { EN: "calendar", DE: "kalender" },
  { EN: "data-privacy", DE: "datenschutz" },
  { EN: "imprint", DE: "impressum" },
  { EN: "practical-information", DE: "praktische-information" },
  { EN: "media", DE: "mediathek" },

]

export const transitionBackground = "url(https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/waitaminute1.gif) center no-repeat fixed white"
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
    if(path.includes('about') || path.includes('uber')) {
      type = path.toLowerCase();
    } else {
      type = path.split('/')[0].toLowerCase();
    }


    return pageType.EN == type || pageType.DE == type;
  });


  let newPath;
  if(prePath && prePath.length !== 0) {
    if(path.includes('about') || path.includes('uber')) {
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


const getPathForLanguage = (language, slug) => {
  
}

export const createProperty = (property, language) => {
  return `${property}_${language.toLowerCase()}`
}
