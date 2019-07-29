import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { graphql, StaticQuery, Link } from "gatsby"

const NavWrapper = styled.div`
  display: flex;
  position: fixed;
  z-index: 300;
  top: 0;
  border-bottom: 1px solid black;
`;

const NavInner = styled.div`
  /*  margin: 0 auto; */
  display: flex;
  width: 100vw;
  /* height: 100%; */
`;

const NavItem = styled(Link)`
  /* color: white; */
  display: block;
  padding: 8px 16px;
`;

const Navbar = props => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(
          filter: { slug: { eq: "navbar-menu" } }
        ) {
          edges {
            node {
              items {
                title
                object_slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <NavWrapper className={props.className}>
          <NavInner>
            {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
              navLink => (
                <NavItem
                  to={`/${navLink.object_slug}`}
                  key={navLink.object_slug}
                >
                  {navLink.title}
                </NavItem>
              )
            )}
          </NavInner>
        </NavWrapper>
      </div>
    )}
  />
)

Navbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Navbar
