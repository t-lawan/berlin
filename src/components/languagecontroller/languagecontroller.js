import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as actionTypes from "../../store/action"
import {
  LanguageControllerWrapper,
  LanguageButton,
} from "./languagecontroller.styles"
import { getCurrentLanguageString, createPath, transitionBackground } from "../../utility/helper"
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
            cover direction="down"
            bg={transitionBackground}
            key={language}
            to={this.createPath(language)}
            onClick={this.languageToFunctionWrapper[language]}
            selected={this.props.languages[language] ? 1 : 0}
          >
            {language.toLowerCase()}
          </LanguageButton>
        ))}
      </LanguageControllerWrapper>
    )
  }

  createPath = chosenLanguage => {
    if (typeof window !== `undefined`) {
      let path = window.location.pathname.substr(1);
      let pathArray = path.split("/")
      if (pathArray[0] === "de") {
        pathArray.splice(0, 1)
      }
      return createPath(chosenLanguage, pathArray.join('/'))

    }
    return ""
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
