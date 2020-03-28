import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { NavWrapper, NavInner, NavItem, NavLink, InactiveLink } from "./navbar.styles"
import { connect } from "react-redux"
import { getCurrentLanguageString, createPath, transitionBackground } from "../../utility/helper"
import * as actionTypes from '../../store/action';
const Navbar = props => {
  const data = useStaticQuery(
    graphql`
      {
        allWordpressWpApiMenusMenusItems(
          filter: { slug: { eq: "navbar-menu" } }
        ) {
          edges {
            node {
              items {
                object_slug
                title
              }
              slug
            }
          }
        }
      }
    `
  )

   const generateLink = (item, language) => {
     let comp;
    if (item.isExternal) {
      comp =  (
        <NavLink key={item.slug} href={item.slug} target="__blank">
          {item[language].title.toLowerCase()}
        </NavLink>
      )
    } else {
      comp = (
        <NavItem
          activeStyle={{ color: "#D9515C" }}
          to={createPath(language, item.slug)}
          key={item.slug}
          onClick={() => props.startTransition()}
          // fade
          // cover direction="down"
          // bg={transitionBackground}
        >
          {item[language].title.toLowerCase()}
        </NavItem>
      )
    }

    if(!item.isActive) {
      comp = (<InactiveLink key={item.slug}> {item[language].title.toLowerCase()} </InactiveLink>)
    }

    return comp
  }


  const language = getCurrentLanguageString(props.languages)
  return (
    <NavWrapper hideInTablet={props.hideInTablet}>
      <NavInner>
        {props.navbar_top.map(item => generateLink(item, language))}
      </NavInner>
      <NavInner>
        {props.navbar_bottom.map(item => generateLink(item, language))}
      </NavInner>
    </NavWrapper>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
    navbar_top: state.navbar_top,
    navbar_bottom: state.navbar_bottom
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startTransition: () =>
      dispatch({ type: actionTypes.START_TRANSITION}),
  }
}

Navbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hideInMobile: PropTypes.bool,
  hideInTablet: PropTypes.bool
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
