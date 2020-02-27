import styled from "styled-components"
import { hideDisplayForTablet, changeGridToOneRow, showDisplayForTablet, hideDisplayForMobile, size } from "../../index.styles"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const HeaderWrapper = styled.header`
  /* opacity: 1; */
  transition: opacity 0.5s;
  /* border-bottom: 1px solid black; */
  padding: 1.4em 2em 0.7em !important;
  background: white;
  :hover {
    /* opacity: 0.01; */
  }
  @media (max-width: ${size.mobileM}) {
  padding: 0.6em 0.7em !important;
  border-bottom:solid 1px #000 !important;
  display: ${props => props.showOnHomePage ? 'inherit': 'none'};
  }
  @media (min-width: ${size.mobileL}) {
  padding: 0.7em 0.1em 0.7em !important;
  
  }
  @media (min-width: ${size.laptop}) {
  padding: 1.55em 2.2em 1.05em !important;
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
  }
  @media (max-width: ${size.mobileM}) {
  grid-column-gap: 0.0em;
  grid-template-columns:1fr;
  }
  @media (min-width: ${size.mobileL}) {
  grid-column-gap: 0.5em;
  grid-template-columns:1fr 1fr;
  }
  @media (min-width: ${size.laptop}) {
  grid-column-gap: 4.1em;
  }

`

export const HeaderImage = styled.img`
  @media (max-width: ${size.tablet}) {
  margin: 0 0.7em !important;
  }
  @media (max-width: ${size.mobileM}) {
    display: ${props => (props.hideInMobile ? "none" : "inherit")} !important;
  }
`
export const HeaderImageMob = styled.img`
  display:none !important;
  @media (max-width: ${size.mobileM}) {
  display:block !important;
  margin:0 0.0em !important;
  }
`
