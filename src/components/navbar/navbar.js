import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { NavWrapper, NavInner, NavItem, NavLink } from "./navbar.styles"
import { connect } from "react-redux"
import { getCurrentLanguageString, createPath } from "../../utility/helper"

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
    if (item.isExternal) {
      return (
        <NavLink key={item.slug} href={item.slug} target="__blank">
          {item[language].title.toLowerCase()}
        </NavLink>
      )
    } else {
      return (
        <NavItem
          activeStyle={{ color: "#990033" }}
          to={createPath(language, item.slug)}
          key={item.slug}
          fade
        >
          {item[language].title.toLowerCase()}
        </NavItem>
      )
    }
  }

  const language = getCurrentLanguageString(props.languages)
  return (
    <NavWrapper hideInMobile={props.hideInMobile}>
      <NavInner>
        {props.navbar.map(item => generateLink(item, language))}
      </NavInner>
    </NavWrapper>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
    navbar: state.navbar,
  }
}

Navbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hideInMobile: PropTypes.bool,
}

export default connect(
  mapStateToProps,
  null
)(Navbar)
