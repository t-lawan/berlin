import * as actionTypes from "./action"
import { createStore } from "redux"

const intitalState = {
  languages: {
    EN: true,
    DE: false,
  },
  experience: 1,
  events: [],
  exhibitions: [],
  news: [],
  isLoaded: false,
  participants: [],
  venues: [],
  documents: [],
  calendar_items: [],
  calendar: {},
  modal: {
    show: false
  },
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
    case actionTypes.SET_CALENDAR_ITEMS:
      return Object.assign({}, state, {
        calendar_items: action.calendar_items,
      })
    case actionTypes.SET_CALENDAR:
      return Object.assign({}, state, {
        calendar: action.calendar,
      })
    case actionTypes.IS_LOADED:
      return Object.assign({}, state, {
        isLoaded: true,
      })
    case actionTypes.SHOW_MODAL:
      return Object.assign({}, state, {
        modal: {
          show: true
        },
      })
    case actionTypes.HIDE_MODAL:
      return Object.assign({}, state, {
        modal: {
          show: false
        },
      })
    default:
      return state
  }
}

export const store = () =>
  createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
