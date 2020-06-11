import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { hideDisplayForTablet, showDisplayForTablet, Color, size } from "../../index.styles"

export const NavWrapper = styled.nav`
  ${hideDisplayForTablet};
  display: block;
  z-index: 300;
  background: white;
  border-top: 1px solid black;
  background: white;
  position: relative;
  @media (min-width: ${size.laptop}) {
    /* height: 100px; */
  }
  @media (min-width: ${size.laptopM}) {
    /* height:  110px; */
  }
  @media (min-width: ${size.laptopL}) {
    /* height: 116px; */
  }
`

export const NavMobileWrapper = styled.nav`
  border-top: 1px solid black;
  padding: 0.3em 0.7em;
  max-height: calc(100vh - 45px);
  margin: 0;
  width: auto;
  ${showDisplayForTablet};
  @media (min-width: ${size.mobileL}) {
    border-top: 0px solid black;
    padding: 0.4em 0.7em;
    height: calc(40px - 1px);
  }
`

export const NavInner = styled.div`
  display: flex;
  width: 100%;
  background: white;
  border-bottom: 1px solid black;
  @media (min-width: ${size.laptop}) {
    height: 46px;
  }
  @media (min-width: ${size.laptopM}) {
    height: 48px;
  }
  @media (min-width: ${size.laptopL}) {
    height: 53px;
  }
`

export const NavMobileInner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0.7em 0em 0.7em 1.3em;
  column-gap: 0em;
  @media (min-width: ${size.mobileL}) {
    padding: 0.5em 0.7em 0.0em;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0.7em;
  }
  @media (min-width: ${size.tablet}) {
    padding: 0.5em 0.7em 0.7em;
    grid-template-columns: 1fr;
    > a:first-child {
      display:none;
    }
  }
  @media (min-width: ${size.mobileL}) {
    > a:first-child {
      display:none;
    }
  }
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
  padding: 1.15em 0.5em 0.45em;
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
  @media (min-width: ${size.laptopM}) {
    padding: 1.2em 0.75em 0.4em;
  }
  @media (min-width: ${size.laptopL}) {
    padding: 1.3em 0.75em 0.45em;
  }
`

export const InactiveLink = styled.p`
  display: block;
  line-height:1.2;
  padding: 1.15em 0.5em 0.45em;
  transition: all 0.2s ease-in-out;
  margin-bottom:0;
  text-decoration: none;
  color: black;
  opacity: 0.4;
  /* :hover {
    color: ${Color.red};
  } */
  @media (min-width: ${size.laptopM}) {
    padding: 1.2em 0.75em 0.4em;
  }
  @media (min-width: ${size.laptopL}) {
    padding: 1.3em 0.75em 0.45em;
  }
`

export const NavLink = styled.a`
  display: block;
  line-height:1.2;
  padding: 1.15em 0.5em 0.45em;
  transition: all 0.2s ease-in-out;
  margin-bottom:0;
  text-decoration: none;
  color: black;
  :hover {
    color: ${Color.red};
  }
  @media (min-width: ${size.laptopM}) {
    padding: 1.2em 0.75em 0.4em;
  }
  @media (min-width: ${size.laptopL}) {
    padding: 1.3em 0.75em 0.45em;
  }
`

export const NavMobileHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr 4fr;
  width: 100%;
  @media (min-width: ${size.mobileL}) {
    display:flex;
    width:100%;
    flex-direction:row-reverse;
    justify-content:space-between;
    > div:nth-child(2) {
      display:none;
    }
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
    @media (min-width: ${size.mobileL}) {
    height: 22px;
    margin-top: 0.2em;
  }
`

export const NavMobileLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1em;
  line-height: 1.3;
  padding: 0.9em 0 0.5em 0em;
  > a {
    font-size:1.1em;
  }
  :last-child{
    padding-bottom:1em;
  }
  @media (min-width: ${size.mobileL}) {
  padding: 0.5em 0.7em 0;
  grid-column-gap: 0.7em;
  > a {
    font-size:0.80em;
  }
  }
  @media (min-width: ${size.tablet}) {
  padding: 0.5em 0.7em;
  grid-column-gap: 0.7em;
  > a {
    font-size:1.0em;
    line-height: 1.3;
  }
  }
`
export const NavMobileInactiveLink = styled.p`
  text-decoration: none;
  font-size: 1.55em;
  line-height: 1.2;
  padding-bottom: 0.0rem;
  margin-bottom:0.2em;
  display: block;
  @media (min-width: ${size.mobileL}) {
    font-size: 1.0em;
    margin-bottom:0.1em;
  }
  @media (min-width: ${size.tablet}) {
    font-size: 1.2em;
    line-height: 1.3;
  }
  opacity: 0.3;
`

export const NavMobileLink = styled(AniLink)`
  text-decoration: none;
  font-size: 1.55em;
  line-height: 1.2;
  padding-bottom: 0.0rem;
  margin-bottom:0.2em;
  display: block;
  @media (min-width: ${size.mobileL}) {
    font-size: 1.0em;
    
  }
  @media (min-width: ${size.tablet}) {
    font-size: 1.2em;
    line-height: 1.3;
  }
`
export const NavMobileLinkSmall = styled(AniLink)`
  text-decoration: none;
  font-size: 1.1em;
  padding-bottom: 0.0rem;
  display: block;
  @media (min-width: ${size.mobileL}) {
    font-size:0.80em;
  }
  @media (min-width: ${size.tablet}) {
    font-size:1.0em;
    line-height: 1.3;
  }
`

export const NavMobileOuterLinkSmall = styled.a`
  text-decoration: none;
  font-size: 1.15em;
  padding-bottom: 0.3rem;
  display: block;
  @media (min-width: ${size.mobileL}) {
    font-size:0.80em;
  }
  @media (min-width: ${size.tablet}) {
    font-size:1.0em;
    line-height: 1.3;
    margin-bottom:0.2em;
  }
`

export const NavMobileLinkParagraph = styled.p`
  font-size: 1.55rem;
  padding-bottom: 0.0rem;
  margin:0;
  display: block;
`

export const NavMobileOuterLink = styled.a`
  text-decoration: none;
  font-size: 1.55em;
  padding-bottom: 0.0rem;
  line-height: 1.2;
  margin-bottom:0.1em;
  display: block;
  @media (min-width: ${size.mobileL}) {
    font-size: 1em;
  }
  @media (min-width: ${size.tablet}) {
    font-size: 1.2em;
  }
`

export const NavMobileModal = styled.p`
  font-size: 1.15em;
  padding-bottom: 0.3rem;
  margin: 0;
  display: block;
  @media (min-width: ${size.mobileL}) {
    font-size: 0.80em;
    margin-bottom: 0.1em;
  }
  @media (min-width: ${size.tablet}) {
    font-size: 1.0em;
    margin-bottom: 0.2em;
  }
`

export const NavMobileContent = styled.div`
  max-height: ${props => (props.show ? "1200px" : "0")};
  transition: all 0.3s ease-in-out;
  padding-bottom: 0.0em;
  display: grid;
  grid-template-columns: 2fr 1fr;
  @media (min-width: ${size.mobileL}) {
    max-height: calc(100vh - 40px);
    position: fixed;
    background: #FFF;
    width: calc(33.33% - 1px);
    top: 40px;
    height: calc(100vh - 40px);
    margin-top: 0em;
    right:${props => (props.show ? "0px" : "-100%")};
  }
`

export const NavImage = styled.img`
  height: 28px;
    margin-top: 3px !important;
    margin-left:1.2em !important;
    width: auto;
`
