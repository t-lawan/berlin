import styled from "styled-components"
import {hideDisplayForTablet, size } from "../../index.styles";
import {
  ExperienceButton,
} from "../experiencecontroller/experiencecontroller.styles"


export const ColumnLayout = styled.div`
  border-right: ${props => (props.rightBorder ? "1px solid black" : 0)};
  height: 100%;
  background: white;
  z-index:9;
  position:relative;
  width:inherit;
  overflow-y: inherit;
  ${hideDisplayForTablet};
  &::first-of-type{
    border: 0;
  }
  :last-child{
    border-left: solid 1px black;
    ${ExperienceButton}:last-child {
    border-top: solid thin #000;
    margin-top:0.4em;
    }
  }
  :nth-child(4){
    border-right: none;
    border-top: solid 1px #000;
  }
  @media (min-width: ${size.mobileL}) {
    border-right:solid 0px #000;
    background: transparent;
  }
  @media (min-width: ${size.tablet}) {
    border-right: ${props => (props.rightBorder ? "1px solid black" : 0)};
    background: white;
  }
`
