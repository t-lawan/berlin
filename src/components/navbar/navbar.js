import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { graphql, StaticQuery, Link } from "gatsby"

const NavWrapper = styled.div`
  display: flex;
  z-index: 300;
  top: 0;
  border-bottom: 1px solid black;
`;

const NavInner = styled.div`
  display: flex;
  width: 100vw;
`;

const NavItem = styled(Link)`
  /* color: white; */
  display: block;
  padding: 8px 16px;
`;

const Navbar = props => (
  // <StaticQuery
  //   query={graphql`
  //     {
  //       allWordpressWpApiMenusMenusItems(
  //         filter: { slug: { eq: "navbar-menu" } }
  //       ) {
  //         edges {
  //           node {
  //             items {
  //               title
  //               object_slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `}
  //   render={data => (
  //     <div>
  //       <NavWrapper className={props.className}>
  //         <NavInner>
  //           {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
  //             navLink => (
  //               <NavItem
  //                 to={`/${navLink.object_slug}`}
  //                 key={navLink.object_slug}
  //               >
  //                 {navLink.title}
  //               </NavItem>
  //             )
  //           )}
  //         </NavInner>
  //       </NavWrapper>
  //     </div>
  //   )}
  // />

  <NavWrapper className={props.className}>
    <NavInner>
      <NavItem to={'test'}> Test</NavItem>
      <NavItem to={'test2'}> Test2</NavItem>
      <NavItem to={'test3'}> Test3</NavItem>
      <NavItem to={'test4'}> Test4</NavItem>
    </NavInner>
  </NavWrapper>
)

Navbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Navbar
