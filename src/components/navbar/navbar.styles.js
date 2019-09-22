import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { hideDisplayForTablet, showDisplayForTablet, Color } from "../../index.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"

export const NavWrapper = styled.nav`
  ${hideDisplayForTablet};

  display: flex;
  z-index: 300;
  border-bottom: 1px solid black;
  background: white;
`

export const NavMobileWrapper = styled.nav`
  background: white;
  border-top: 1px solid black;
  padding: 1em 1em;
  margin: 0;
  width: auto;
  ${showDisplayForTablet};
`

export const NavInner = styled.div`
  display: flex;
  width: 100vw;
`

export const NavMobileInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em 1.5em;
`

export const NavImageLink = styled(Link)`
  text-decoration: none;
`

export const NavItem = styled(AniLink)`
  /* color: white; */
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  :hover {
    color: ${Color.red};
  }
`

export const NavMobileHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr 4fr;
  width: 100%;
`

export const NavIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  :hover {
    cursor: pointer;
  }
`

export const NavMobileLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0.5em 1.5em;
`

export const NavMobileLink = styled(Link)`
  text-decoration: none;
  font-size: 1.4rem;
  padding-bottom: 0.5rem;
  display: block;
`

export const NavMobileOuterLink = styled.a`
  text-decoration: none;
  font-size: 1.4rem;
  padding-bottom: 0.5rem;
  display: block;
`

export const NavMobileModal = styled.p`
  font-size: 1.4rem;
  padding-bottom: 0.5rem;
  display: block;
`

export const NavMobileContent = styled.div`
  display: ${props => (props.show ? "inherit" : "none")};
`

export const NavImage = styled.img`
  height: 1.5rem;
  padding-top: 0em;
  width: auto;
`
