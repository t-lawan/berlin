import React from "react"
import PropTypes from "prop-types"
import {
  NavWrapper,
  NavInner,
  NavItem,
  NavLink,
  InactiveLink,
} from "./navbar.styles"
import { connect } from "react-redux"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import * as actionTypes from "../../store/action"
const Navbar = props => {
  const generateLink = (item, language, experience, index) => {
    let comp
    if (item.isExternal) {
      let slug = language === "EN" ? item.slug : item.slug.replace("en", "de")
      comp = (
        <NavLink
          key={index}
          href={slug}
          target="__blank"
          rel="noopener noreferrer"
        >
          {item[language].title.toLowerCase()}
        </NavLink>
      )
    } else {
      comp = (
        <NavItem
          activeStyle={{ color: "#D9515C" }}
          to={createPath(language, item.slug)}
          key={index}
          onClick={() => props.startTransition()}
          // fade
          // cover direction="down"
          // bg={transitionBackground}
        >
          {item[language].title.toLowerCase()}{" "}
        </NavItem>
      )
    }

    if (!item.isActive) {
      comp = (
        <InactiveLink key={index}>
          {" "}
          {item[language].title.toLowerCase()}{" "}
        </InactiveLink>
      )
    }

    return comp
  }

  const language = getCurrentLanguageString(props.languages)
  let topNavbar = props.navbar_top.filter(item => {
    if(props.experience == 4) {
      return item.isInExp4
    } else {
      return item.isInExp13
    }
  })

  let bottomNavbar = props.navbar_bottom.filter(item => {
    if(props.experience == 4) {
      return item.isInExp4
    } else {
      return item.isInExp13
    }
  })

  return (
    <NavWrapper hideInTablet={props.hideInTablet}>
      {props.experience === 4 ? (
        <NavInner>
          {topNavbar.map((item, index) =>
            generateLink(item, language, props.experience, index)
          )}
        </NavInner>
      ) : null}

      <NavInner>
        {bottomNavbar.map((item, index) =>
          generateLink(item, language, props.experience, index)
        )}
      </NavInner>
    </NavWrapper>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
    navbar_top: state.navbar_top,
    navbar_bottom: state.navbar_bottom,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startTransition: () => dispatch({ type: actionTypes.START_TRANSITION }),
  }
}

Navbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hideInMobile: PropTypes.bool,
  hideInTablet: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
