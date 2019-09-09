import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { NavWrapper, NavInner, NavItem } from "./navbar.styles"
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

  const language = getCurrentLanguageString(props.languages)
  return (
    <NavWrapper>
      <NavInner>
        {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
          <NavItem
            activeStyle={{ color: "#990033" }}
            to={createPath(language, item.object_slug)}
            key={item.object_slug}
            fade
          >
            {item.title.toLowerCase()}
          </NavItem>
        ))}
      </NavInner>
    </NavWrapper>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
  }
}

Navbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default connect(
  mapStateToProps,
  null
)(Navbar)
