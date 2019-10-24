import styled from "styled-components"
import { showDisplayForTablet, showDisplayForTabletFunc } from "../../index.styles";

export const ExperienceControllerWrapper = styled.div`
  margin-top: ${props => (props.left ? "8.9em" : "5em")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  z-index: 5000;
`

export const ExperienceButton = styled.div`
  margin-bottom: 1em;
  text-decoration:none;
  color: black;
  opacity: ${props => props.show ? '1' : '0.5'};
  font-size: x-large;
  transition-timing-function: ease-in;
  transition: 1s;
  :hover {
    cursor: ${props => (props.hover ? "pointer" : "inherit")};
  }
  font-weight: ${props => (props.bold ? "bold" : "normal")};
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
  }
`