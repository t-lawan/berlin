export const SET_LANGUAGE_TO_EN = "SET_LANGUAGE_TO_EN";
export const SET_LANGUAGE_TO_DE = "SET_LANGUAGE_TO_DE";

export const CHANGE_EXPERIENCE = "CHANGE_EXPERIENCE";
export const SET_ACTIVE_EXPERIENCE = "SET_ACTIVE_EXPERIENCE";
export const SET_EVENTS = "SET_EVENTS";
export const SET_NEWS = "SET_NEWS";
export const SET_EXHIBITIONS = "SET_EXHIBITIONS";
export const SET_RESOURCE_GENRES = "SET_RESOURCE_GENRES";

export const SET_PARTICIPANTS = "SET_PARTICIPANTS";
export const SET_PAGES = "SET_PAGES";
export const SET_VENUES = "SET_VENUES";
export const SET_DOCUMENTS = "SET_DOCUMENTS";
export const SET_RESOURCES = "SET_RESOURCES";
export const SET_CALENDAR_ITEMS = "SET_CALENDAR_ITEMS";
export const SET_CALENDAR = "SET_CALENDAR";
export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";
export const SET_IS_VISIBLE_TO_TRUE = "SET_IS_VISIBLE_TO_TRUE";
export const IS_LOADED = "IS_LOADED";
export const IS_VIEWING = "IS_VIEWING";
export const SET_IS_VIEWING_TO_FALSE = "SET_IS_VIEWING_TO_FALSE";
export const HAS_AGREED_TO_TERMS = "HAS_AGREED_TO_TERMS";
export const SET_NAVBAR_ITEMS = "SET_NAVBAR_ITEMS";
export const SET_DOCUMENTATION = "SET_DOCUMENTATION";
export const HIDE_OVERLAY = 'HIDE_OVERLAY';
export const TOGGLE_EVENTS_DISPLAY_IN_MOBILE = "TOGGLE_EVENTS_DISPLAY_IN_MOBILE";
export const SHOW_EVENTS_DISPLAY_IN_MOBILE = "TOGGLE_EVENTS_DISPLAY_IN_MOBILE";
export const HIDE_EVENTS_DISPLAY_IN_MOBILE = "TOGGLE_EVENTS_DISPLAY_IN_MOBILE";

export const START_TRANSITION = "START_TRANSITION"
export const STOP_TRANSITION = "STOP_TRANSITION"

export const SET_FRESH_TO_LOAD_TO_FALSE = "SET_FRESH_TO_LOAD_TO_FALSE"

export const setFreshLoadToFalse = () => {
    return {
        type: SET_FRESH_TO_LOAD_TO_FALSE
    }
}

export const startTransition = () => {
    return {
        type: START_TRANSITION
    }
}

export const changeExperience = (experience) => {
    return {
        type: CHANGE_EXPERIENCE,
        experience: experience
    }
}