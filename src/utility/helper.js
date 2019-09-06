export const getCurrentLanguageString = languageStateObject => {
  if (languageStateObject.EN) {
    return "EN"
  } else {
    return "DE"
  }
}

export const createPath = (language, path) => {
  const newPath =
    language === "EN" ? `/${path}` : `/${language.toLowerCase()}/${path}`
  return newPath
}
