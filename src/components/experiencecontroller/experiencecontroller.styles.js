import styled from "styled-components"
import { showDisplayForTablet, showDisplayForTabletFunc } from "../../index.styles";

export const ExperienceControllerWrapper = styled.div`
  margin-top: ${props => (props.left ? "6.9em" : "4.0em")};
  align-items: center;
  justify-content: center;
  display: grid;
  text-align: center;
  grid-template-columns: 1fr;
  background: white;
  z-index: 5000;
`

export const ExperienceButton = styled.div`
  margin-bottom: 0.2em;
  text-decoration:none;
  color: black;
  opacity: ${props => props.show ? '1' : '0.5'};
  font-size: xx-large;
  /* transition-timing-function: ease-in;
  transition: 1s; */
  :hover {
    cursor: ${props => (props.hover ? "pointer" : "inherit")};
  } 
  :last-child {
    border-top: solid thin #000;
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
  background: white;
  border-bottom: 1px solid black;
  ${showDisplayForTabletFunc('grid')};
`

export const ExperienceControllerMobileButton = styled.div`
  padding: 0.5em;
  border-right: 1px solid black;
  opacity: ${props => props.show ? '1' : '0.5'};
  :last-child {
    border: 0;
  }

  img {
    width: 80%;
    margin-bottom: 0;
  }
`