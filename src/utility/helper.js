export const getCurrentLanguageString = (languageStateObject) => {
    if(languageStateObject.EN) {
       return "EN";
    } else {
        return "DE";
    }
}