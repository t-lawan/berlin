import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';

const NavWrapper = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavItem = styled.li`
    flex: 1;
`

const navLinks = ["home", "calendar", "about"]
const Navbar = () => (
    <div>
        <NavWrapper>
            {navLinks.map(navLink => (
            <NavItem key={navLink}> {navLink} </NavItem>
            ))}
        </NavWrapper>
    </div>
)

export default Navbar;