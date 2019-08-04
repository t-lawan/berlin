import styled from "styled-components"
import { Link } from "gatsby"
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

export const NavItem = styled(Link)`
/* color: white; */
display: block;
padding: 8px 16px;
`;