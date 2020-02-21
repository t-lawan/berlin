import * as actionTypes from "./action"
import { createStore } from "redux"

const intitalState = {
  languages: {
    EN: true,
    DE: false,
  },
  pages: [],
  experience: 1,
  active_experience: 1,
  events: [],
  exhibitions: [],
  news: [],
  isLoaded: false,
  participants: [],
  venues: [],
  documents: [],
  resources: [],
  resource_genres: [],
  calendar_items: [],
  calendar: {},
  modal: {
    show: false,
  },
  documentation: [],
  navbar: [],
  show_overlay: true,
  agreed_to_terms: false,
  show_events_in_mobile: false,
  isViewing: false,
  isInTransition: false,
}

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case actionTypes.SET_LANGUAGE_TO_EN:
      return Object.assign({}, state, {
        languages: {
          EN: true,
          DE: false,
        },
      })
    case actionTypes.SET_LANGUAGE_TO_DE:
      return Object.assign({}, state, {
        languages: {
          EN: false,
          DE: true,
        },
      })
    case actionTypes.CHANGE_EXPERIENCE:
      return Object.assign({}, state, {
        experience: action.experience,
      })
    case actionTypes.SET_EVENTS:
      return Object.assign({}, state, {
        events: action.events,
      })
    case actionTypes.SET_NEWS:
      return Object.assign({}, state, {
        news: action.news,
      })
    case actionTypes.SET_EXHIBITIONS:
      return Object.assign({}, state, {
        exhibitions: action.exhibitions,
      })
    case actionTypes.SET_PARTICIPANTS:
      return Object.assign({}, state, {
        participants: action.participants,
      })
    case actionTypes.SET_VENUES:
      return Object.assign({}, state, {
        venues: action.venues,
      })
    case actionTypes.SET_DOCUMENTS:
      return Object.assign({}, state, {
        documents: action.documents,
      })
    case actionTypes.SET_RESOURCE_GENRES:
      return Object.assign({}, state, {
        resource_genres: action.resource_genres,
      })
    case actionTypes.HIDE_OVERLAY:
      return Object.assign({}, state, {
        show_overlay: false,
      })
    case actionTypes.SET_RESOURCES:
      return Object.assign({}, state, {
        resources: action.resources,
      })
    case actionTypes.SET_DOCUMENTATION:
      return Object.assign({}, state, {
        documentation: action.documentation,
      })
    case actionTypes.SET_CALENDAR_ITEMS:
      return Object.assign({}, state, {
        calendar_items: action.calendar_items,
      })
    case actionTypes.SET_CALENDAR:
      return Object.assign({}, state, {
        calendar: action.calendar,
      })
    case actionTypes.SET_NAVBAR_ITEMS:
      return Object.assign({}, state, {
        navbar: action.navbar,
      })
    case actionTypes.SET_PAGES:
      return Object.assign({}, state, {
        pages: action.pages,
      })
    case actionTypes.IS_VIEWING:
      return Object.assign({}, state, {
        isViewing: true,
      })
    case actionTypes.SET_IS_VIEWING_TO_FALSE:
      return Object.assign({}, state, {
        isViewing: false,
      })
    case actionTypes.IS_LOADED:
      return Object.assign({}, state, {
        isLoaded: true,
      })
    case actionTypes.START_TRANSITION:
      return Object.assign({}, state, {
        isInTransition: true,
      })
    case actionTypes.STOP_TRANSITION:
      return Object.assign({}, state, {
        isInTransition: false,
      })
    case actionTypes.HAS_AGREED_TO_TERMS:
      return Object.assign({}, state, {
        agreed_to_terms: true,
      })
    case actionTypes.SHOW_MODAL:
      return Object.assign({}, state, {
        modal: {
          show: true,
        },
      })
    case actionTypes.HIDE_MODAL:
      return Object.assign({}, state, {
        modal: {
          show: false,
        },
      })
    case actionTypes.TOGGLE_EVENTS_DISPLAY_IN_MOBILE:
      return Object.assign({}, state, {
        show_events_in_mobile: !state.show_events_in_mobile,
      })
    case actionTypes.SHOW_EVENTS_DISPLAY_IN_MOBILE:
      return Object.assign({}, state, {
        show_events_in_mobile: true,
      })
    case actionTypes.HIDE_EVENTS_DISPLAY_IN_MOBILE:
      return Object.assign({}, state, {
        show_events_in_mobile: false,
      })
    case actionTypes.SET_ACTIVE_EXPERIENCE:
      return Object.assign({}, state, {
        active_experience: action.active_experience,
      })
    default:
      return state
  }
}

export const store = () =>
  createStore(
    reducer
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
