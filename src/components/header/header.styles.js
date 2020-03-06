import styled from "styled-components"
import { hideDisplayForTablet, changeGridToOneRow, showDisplayForTablet, hideDisplayForMobile, size } from "../../index.styles"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const HeaderWrapper = styled.header`
  opacity: 1;
  backface-visibility: hidden; 
  padding: 1.4em 2em 0.7em !important;
  background: white;
  :hover {
    cursor: pointer;
  }
  @media (max-width: ${size.mobileM}) {
    padding: 0.6em 0.7em !important;
    border-bottom:solid 1px #000 !important;
    display: ${props => props.showOnHomePage ? 'inherit': 'none'};
  }
  @media (min-width: ${size.mobileL}) {
    padding: 0.7em 0.1em 0.7em !important;
  }
  @media (min-width: ${size.tablet}) {
    padding: 0.75em 0.1em 0.7em !important;
  }
  @media (min-width: ${size.laptop}) {
    padding: 1.5em 1.5em 1.1em !important;
  }
  @media (min-width: ${size.laptopM}) {
    padding: 1.55em 2.25em 1.7em !important;
  }
  @media (min-width: ${size.laptopL}) {
    padding: 1.7em 2.45em 1.7em !important;
  }
  > img {
    max-width:100%;
    width:auto !important;
  }
`

export const HeaderLink = styled(AniLink)`
  text-decoration: none;
  margin-bottom:0;
  display: grid;
  grid-template-columns:1fr 1fr;
  grid-column-gap: 4em;
  ${changeGridToOneRow};
  img {
    margin-bottom: 0.0rem;
    filter: blur(0px);
  }
  @media (max-width: ${size.mobileM}) {
  grid-column-gap: 0.0em;
  grid-template-columns:1fr;
  }
  @media (min-width: ${size.mobileL}) {
  grid-column-gap: 0.5em;
  grid-template-columns:1fr 1fr;
  }
  @media (min-width: ${size.tablet}) {
  grid-column-gap: 0em;
  }
  @media (min-width: ${size.laptop}) {
  grid-column-gap: 2.25em;
  }
  @media (min-width: ${size.laptopM}) {
  grid-column-gap: 4.2em;
  }

`

export const HeaderImage = styled.img`
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-transform: translateZ(0) scale(1.0, 1.0);
  @media (max-width: ${size.tabletL}) {
  margin: 0 0.7em !important;
  width: calc(100% - 1.4em) !important;
  }
  @media (max-width: ${size.mobileM}) {
    display: ${props => (props.hideInMobile ? "none" : "inherit")} !important;
  }
  @media (min-width: ${size.laptopM}) {
      margin-bottom: -0.4em !important;
  }
`
export const HeaderImageMob = styled.img`
  display:none !important;
  @media (max-width: ${size.mobileM}) {
  display:block !important;
  margin:0 0.0em !important;
  }
`
