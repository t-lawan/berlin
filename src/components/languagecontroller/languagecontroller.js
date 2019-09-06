import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as actionTypes from "../../store/action"
import {
  LanguageControllerWrapper,
  LanguageButton,
} from "./languagecontroller.styles"
import { getCurrentLanguageString } from "../../utility/helper"
class LanguageController extends React.Component {
  languageToFunctionWrapper = {
    EN: () => this.props.setLanguageToEN(),
    DE: () => this.props.setLanguageToDE(),
  }
  componentDidMount() {
    this.changeLanguageFromPath()
  }

  render() {
    return (
      <LanguageControllerWrapper>
        {Object.keys(this.props.languages).map(language => (
          <LanguageButton
            key={language}
            to={this.createPath(language)}
            onClick={this.languageToFunctionWrapper[language]}
            bold={this.props.languages[language] ? 1 : 0}
          >
            {language.toLowerCase()}
          </LanguageButton>
        ))}
      </LanguageControllerWrapper>
    )
  }

  createPath = currentLanguage => {
    let pathArray = window.location.pathname.split("/")
    currentLanguage = currentLanguage.toLowerCase()

    if (currentLanguage === "en") {
      if (pathArray[1] === "de") {
        pathArray.splice(1, 1)
      }
    } else {
      if (pathArray[1] !== "de") {
        pathArray.splice(1, 0, currentLanguage)
      }
    }
    return pathArray.join("/")
  }

  changeLanguageFromPath = () => {
    let language = window.location.pathname.split("/")[1]
    if (
      language.toUpperCase() !== getCurrentLanguageString(this.props.languages)
    ) {
      language = language !== "de" ? "en" : language
      this.languageToFunctionWrapper[language.toUpperCase()]()
    }
  }
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLanguageToEN: () => dispatch({ type: actionTypes.SET_LANGUAGE_TO_EN }),
    setLanguageToDE: () => dispatch({ type: actionTypes.SET_LANGUAGE_TO_DE }),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageController)
