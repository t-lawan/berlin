import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery, Link } from "gatsby"
import { NavWrapper, NavInner, NavItem } from "./navbar.styles"
import { getAllMenuItems } from "../../queries/menu.queries"

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
  );


  return (
    <NavWrapper>
      <NavInner>
        {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
          <NavItem
            activeStyle={{ color: "#990033" }}
            to={`/${item.object_slug}`}
            key={item.object_slug}
          >
            {item.title.toLowerCase()}
          </NavItem>
        ))}
      </NavInner>
    </NavWrapper>
  )
}

Navbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Navbar
