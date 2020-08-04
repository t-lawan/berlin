import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
  showDisplayForTablet,
  size,
  showDisplayForMobile,
} from "../../index.styles"

export const JumbotronWrapper = styled.div`
  background: white;
  backface-visibility: hidden; 
  padding: 1.4em 1.95rem 0.7em;
  margin: 0em;
  ${showDisplayForTablet};
  @media (min-width: ${size.mobileL}) {
    padding: 0.65em 0.8em;
    display: inherit;
  }
  @media (min-width: ${size.tablet}) {
    padding: 0.75em 0.8em;
    display: inherit;
  }
  border-top: 0;
  img {
    margin-bottom: 0;
    filter: blur(0px);
  }
  @media (max-width: ${size.mobileM}) {
    display: none;
  }
  @media (min-width: ${size.laptop}) {
    padding: 1.5em 1.5em 1.05em;
  }
  @media (min-width: ${size.laptopM}) {
    padding: 1.55em 2.25em 1.6em;
    > a > img {
      margin-bottom: -0.5em;
    }
  }
  @media (min-width: ${size.laptopL}) {
    padding: 1.7em 2.4em 1.5em;
    > a > img {
      margin-bottom: -0.5em;
    }
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
  margin: 0em;
  position:relative;
  @media (min-width: ${size.mobileS}) {
    padding-bottom: ${props => props.isExperience4 ? '130px' : '130px'};
  }
  @media (min-width: ${size.mobileM}) {
    padding-bottom: ${props => props.isExperience4 ? '130px' : '145px'};
  }
  width:100%;
  z-index:2;
  display:block;
  
  img {
    margin-bottom: 0.3em;
    filter: blur(0px);
    position: relative;
    z-index: 2;
    padding: 0.7em 0.7em 0;
    :nth-child(2){
      padding-top: 0em;
      margin-top: 0em;
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
