import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery, Link } from "gatsby"
import { NavWrapper, NavInner, NavItem } from "./navbar.styles";

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

  <NavWrapper>
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
