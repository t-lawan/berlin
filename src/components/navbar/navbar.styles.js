import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { hideDisplayForTablet, showDisplayForTablet, Color } from "../../index.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const NavWrapper = styled.nav`
  ${hideDisplayForTablet};

  display: flex;
  z-index: 300;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background: white;
`

export const NavMobileWrapper = styled.nav`
  background: white;
  border-top: 1px solid black;
  padding: 0.3em 0.7em;
  max-height: calc(100vh - 45px);
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
  padding: 0.7em 1.3em;
`

export const NavImageLink = styled(AniLink)`
  text-decoration: none;
  line-height: 1;
  > img {
  margin:0;
  }
`

export const NavItem = styled(AniLink)`
  /* color: white; */
  display: block;
  line-height:1.2;
  padding: 1.2em 0.5em 0.5em;
  transition: all 0.2s ease-in-out;
  margin-bottom:0;
  text-decoration: none;
  color: black;
  :hover {
    color: ${Color.red};
  }
  :first-child {
    padding-left:1em;
  }
`

export const NavLink = styled.a`
  display: block;
  line-height:1.2;
  padding: 1.2em 16px 0.5em;
  transition: all 0.2s ease-in-out;
  margin-bottom:0;
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
  display: ${props => props.show ? 'inherit': 'none'};
  :hover {
    cursor: pointer;
  }
`
export const NavIconSVG = styled.img`
  height: 28px;
    margin-top: 3px;
    margin-bottom: 0;
    width: auto;
    display: inline-block;
  display: ${props => props.show ? 'inherit': 'none'};
  :hover {
    cursor: pointer;
  }
`

export const NavMobileLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0.5em 1.5em;
`

export const NavMobileLink = styled(AniLink)`
  text-decoration: none;
  font-size: 1.55em;
  padding-bottom: 0.0rem;
  display: block;
`
export const NavMobileLinkSmall = styled(AniLink)`
  text-decoration: none;
  font-size: 1.1em;
  padding-bottom: 0.0rem;
  display: block;
`

export const NavMobileOuterLink = styled.a`
  text-decoration: none;
  font-size: 1.55em;
  padding-bottom: 0.0rem;
  display: block;
`

export const NavMobileModal = styled.p`
  font-size: 1.1em;
  padding-bottom: 0.0rem;
  margin: 0;
  display: block;
`

export const NavMobileContent = styled.div`
  display: ${props => (props.show ? "inherit" : "none")};
`

export const NavImage = styled.img`
  height: 28px;
    margin-top: 3px !important;
    margin-left:1.6em !important;
    width: auto;
`
