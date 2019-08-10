import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery} from "gatsby"
import { NavWrapper, NavInner, NavItem } from "./navbar.styles"

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

  return (
    <NavWrapper>
      <NavInner>
        {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
          <NavItem
            activeStyle={{ color: "#990033" }}
            to={`/${item.object_slug}`}
            key={item.object_slug}
            fade
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

Navbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Navbar
