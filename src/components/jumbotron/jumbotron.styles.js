import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
  showDisplayForTablet,
  size,
  showDisplayForMobile,
  hideDisplayForMobile,
} from "../../index.styles"

export const JumbotronWrapper = styled.div`
  background: white;
  padding: 1.4em 1.95rem 0.7em;
  margin: 0em;
  ${showDisplayForTablet};
  @media (min-width: ${size.mobileL}) {
    padding: 0.7em 0.7em;
    display: inherit;
  }
  border-top: 0;
  img {
    margin-bottom: 0;
  }
  @media (max-width: ${size.mobileM}) {
    display: none;
  }
  @media (min-width: ${size.laptop}) {
    padding: 1.5em 1.5em 1.05em;
  }
  @media (min-width: ${size.laptopM}) {
    padding: 1.55em 2.1em 1.05em;
  }
`

export const JumbotronHeader = styled(AniLink)`
  text-decoration: none;
  color: black;
  position: relative;
  display: block;
  :hover {
    cursor: pointer;
  }
`
export const JumbotronWrapperMob = styled.div`
  background: transparent;
  padding: 0.0em 0.0rem 0px;
  margin: 0em;
  position:relative;
  width:100%;
  z-index:2;
  display:block;
  /* @media (min-width: ${size.mobileL}) {
    display:none;
  } */
  img {
    margin-bottom:0;
    position:relative;
    z-index:2;
    padding:0.7em 0.7em;
    :nth-child(2){
      padding-top:0em;
      margin-top:-0.7em;
    }
  }
  img.bg_anim {
    position: absolute;
    top:10px;
    z-index:1;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
  }
  ${showDisplayForMobile};

`
