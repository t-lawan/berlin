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
  delay = 200;
  languageToFunctionWrapper = {
    EN: () => {
      // this.props.setFreshLoadToTrue();
      setTimeout(() => {
        this.props.setLanguageToEN()
      }, this.delay)
    },
    DE: () => {
      // this.props.setFreshLoadToTrue();
      setTimeout(() => {
        this.props.setLanguageToDE()
      }, this.delay)
    },
  }
  componentDidMount() {
    this.changeLanguageFromPath()
  }

  changeLanguage = (language) => {
    this.props.setFreshLoadToTrue();
    this.languageToFunctionWrapper[language]
  }
  languages;

  render() {
    this.languages = Object.keys(this.props.languages);
    this.languages.reverse();
    return (
      <LanguageControllerWrapper>
        {this.languages.map(language => (
          <LanguageButton
            // cover direction="down"
            // bg={transitionBackground}

            key={language}
            to={this.createPath(language)}
            onClick={() => this.changeLanguage(language)}
            selected={this.props.languages[language] ? 1 : 0}
          >
          {/* <LanguageButton
            cover direction="down"
            bg={transitionBackground}
            key={language}
            to={this.createPath(language)}
            onClick={this.languageToFunctionWrapper[language]}
            selected={this.props.languages[language] ? 1 : 0}
          > */}
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
    setFreshLoadToTrue: () => dispatch(actionTypes.setFreshLoadToTrue())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageController)
