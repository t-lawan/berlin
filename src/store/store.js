import * as actionTypes from "./action"
import { createStore } from "redux"

const intitalState = {
    languages : {
        EN: true,
        DE: false
    },
    experience: 1,
    events: []

}

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case actionTypes.SET_LANGUAGE_TO_EN:
      return Object.assign({}, state, {
        languages : {
            EN: true,
            DE: false
        }
      })
    case actionTypes.SET_LANGUAGE_TO_DE:
      return Object.assign({}, state, {
        languages : {
            EN: false,
            DE: true
        }
      })
    case actionTypes.CHANGE_EXPERIENCE:
      return Object.assign({}, state, {
        experience: action.experience
      });
    case actionTypes.SET_EVENTS:
      return Object.assign({}, state, {
        events: action.events
      })
    default:
      return state
  }
}

export const store = () => createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
