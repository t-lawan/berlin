import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const NavWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`

const NavItem = styled.li`
  flex: 1;
  list-style-type: none;
`

const navLinks = ["home", "calendar", "about"]
const Navbar = props => (
  <div>
    <NavWrapper className={props.className}>
      {navLinks.map(navLink => (
        <NavItem key={navLink}> {navLink} </NavItem>
      ))}
    </NavWrapper>
  </div>
)

Navbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Navbar
