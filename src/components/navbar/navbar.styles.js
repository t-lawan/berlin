import styled from "styled-components"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const NavWrapper = styled.div`
display: flex;
z-index: 300;
border-bottom: 1px solid black;
background: white;
`;

export const NavInner = styled.div`
display: flex;
width: 100vw;
`;

export const NavItem = styled(AniLink)`
/* color: white; */
display: block;
padding: 8px 16px;
text-decoration:none;
color: black;
`;