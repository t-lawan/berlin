import styled from "styled-components"
import { showDisplayForTablet, showDisplayForTabletFunc } from "../../index.styles";

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
  color: black;
  opacity: ${props => props.show ? '1' : '0.5'};
  font-size: xx-large;
  /* transition-timing-function: ease-in;
  transition: 1s; */
  :hover {
    cursor: ${props => (props.hover ? "pointer" : "inherit")};
  }
  img {
    width: 60%;
    margin-bottom: 0;
    margin-top:0.5em;
  }

  span {
    font-size: 0.6em;
  }
`

export const ExperienceButtonImage = styled.img`
  :hover {
    cursor: pointer;
  }
`

export const ExperienceControllerMobileWrapper = styled.div`
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height:45px;
  background: white;
  border-bottom: 0px solid black;
  ${showDisplayForTabletFunc('grid')};
`

export const ExperienceControllerMobileButton = styled.div`
  padding: 0em;
  height:45px;
  border-right: 1px solid black;
  border-bottom: ${props => props.isSelected ? 'none': 'solid 1px #000'} ;
  opacity: ${props => props.show ? '1' : '0.5'};
  :last-child {
    border-right: 0;
  }
  > p {
    margin: 0;
    font-size: 1.1em;
    line-height:45px;
    text-align:center;
  }
  img {
   padding: 0;
    height: 20px;
    width: auto;
    margin-top: 0.7em;
    margin-bottom:0;
  }
`