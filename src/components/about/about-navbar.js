import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import { connect } from "react-redux"
import { AboutSideNavbar, AboutNavItem } from "./about.styles";


const AboutNavbar = props => {
  const language = getCurrentLanguageString(props.languages);
  const navbarItems = [
    "about",
    "team",
    "organisation",
    "advisory support",
    "support",
  ]
  return (
    <AboutSideNavbar>
      {navbarItems.map((item, index) => (
        <AboutNavItem key={index}> {item} </AboutNavItem>
      ))}
    </AboutSideNavbar>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(
  mapStateToProps,
  null
)(AboutNavbar)
