import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import {
  HeaderWrapper,
  Left,
  Right,
  Heading,
  TitleContainer,
  DateContainer,
  HeaderLink,
} from "./header.styles"
import { getCurrentLanguageString, createPath } from "../../utility/helper"

const content = {
  EN: {
    date: "sept 7 — nov 9, 2019",
    text: {
      left: ["exp.", "the bones", "the"],
      right: ["of", "world"],
    },
  },
  DE: {
    date: "7 sept — 9 nov , 2019",
    text: {
      left: ["exp.", "das gerippe"],
      right: ["der", "welt"],
    },
  },
}
const Header = props => {
  const experience = props.experience
  const language = getCurrentLanguageString(props.languages)
  return (
    <HeaderWrapper hideInMobile={props.hideInMobile}>
      <HeaderLink fade to={createPath(language, '')}>
        <img src={`https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans/images/datum_${language.toLowerCase()}.svg`}/>
        <img src={`https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans/images/title_${language.toLowerCase()}.svg`}/>
      </HeaderLink>

    </HeaderWrapper>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  hideInMobile: PropTypes.bool,
  showInMobile: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    experience: state.experience,
    languages: state.languages,
  }
}

export default connect(
  mapStateToProps,
  null
)(Header)
