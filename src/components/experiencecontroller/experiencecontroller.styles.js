import styled from "styled-components"
import { showDisplayForTablet, showDisplayForTabletFunc, size, Color } from "../../index.styles";

export const ExperienceControllerWrapper = styled.div`
  margin-top: ${props => (props.left ? "6.9em" : "3.2em")};
  align-items: center;
  justify-content: center;
  display: grid;
  text-align: center;
  grid-template-columns: 1fr;
  background: white;
  z-index: 5000;
`

export const ExperienceButton = styled.div`
  margin-bottom: 0.0em;
  text-decoration:none;
  transition: all 0.2s ease-in-out;
  color: black;
  opacity: ${props => props.show ? '1' : '0.5'};
  font-size: xx-large;
  /* transition-timing-function: ease-in;
  transition: 1s; */
  :hover {
    cursor: ${props => (props.hover ? "pointer" : "inherit")};
    color: ${Color.red};
  }
  img {
    width: 65%;
    margin-bottom: 0;
  }
  :nth-child(2) {
    margin-top:-0.5em;
  }
  :last-child img {
    max-width:37px;
    margin-top:0.5em;
    margin-bottom: 0;
  }
  span {
    font-size: 0.6em;
  }
  -webkit-animation: fadeIn 1.5s ease-in-out;
    animation: fadeIn 1.5s ease-in-out;
  :last-of-type {
    margin-top: ${props => props.left ? '' : props.isExperience4 ? '' : '0.4em'};
    border-top: ${props => props.left ? '' : props.isExperience4 ? '' : 'solid thin #000'};
  }
    /* :nth-of-type(2) {
      -webkit-animation: fadeIn 5s ease-in-out;
    animation: fadeIn 5s ease-in-out;
    } */
  /* transition: opacity 2s;
  transition-timing-function: ease-in-out */
`

export const ExperienceButtonImage = styled.img`
  :hover {
    cursor: pointer;
    color: ${Color.red};
  }
`

export const ExperienceControllerMobileWrapper = styled.div`
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height:40px;
  background: white;
  border-bottom: 0px solid black;
  ${showDisplayForTabletFunc('grid')};
`

export const ExperienceControllerMobileButton = styled.div`
  padding: 0em;
  height:40px;
  border-right: 1px solid black;
  border-bottom: ${props => props.isSelected ? 'none': 'solid 1px #000'} ;
  opacity: ${props => props.show ? '1' : '0.5'};
  :last-child {
    border-right: 0;
  }
  > p {
    margin: 0;
    font-size: 1.1em;
    line-height:40px;
    text-align:center;
    @media (min-width: ${size.mobileL}) {
    font-size: 1.0em;
    }
  }
  img {
   padding: 0;
    height: 20px;
    width: auto;
    margin-top: 0.5em;
    margin-bottom:0;
    @media (min-width: ${size.mobileL}) {
      height: 18px;
      margin-top: 0.65em;
    }
  }
`