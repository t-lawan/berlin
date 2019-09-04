import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { NavWrapper, NavInner, NavItem } from "./navbar.styles"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../../utility/helper"

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
            swipe
            direction="up"
            duration={0.3}
            // swipe
            // entryOffset={95}
          >
            {item.title.toLowerCase()}
          </NavItem>
        ))}
      </NavInner>
    </NavWrapper>
  )
}

const createPath = (language, path) => {
  const newPath =  language === "EN" ? `/${path}` : `/${language.toLowerCase()}/${path}`;
  return newPath;
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
