import styled from "styled-components"
import {hideDisplayForTablet, size, hideDisplayForMobile } from "../../index.styles";
import {
  ExperienceButton,
} from "../experiencecontroller/experiencecontroller.styles"


export const ColumnLayout = styled.div`
  border-right: ${props => (props.rightBorder ? "1px solid black" : 0)};
  height: 100%;
  background: white;
  
  position:relative;
  width:auto;
  grid-area: 'column';
  overflow-y: inherit;
  ${hideDisplayForTablet};
  ${hideDisplayForMobile};
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
  @media (min-width: ${size.mobileS}) {
    border-right:solid 0px #000;
    background: transparent;
    z-index:9;
  }
  @media (min-width: ${size.mobileL}) {
    border-right: ${props => (props.rightBorder ? "1px solid black" : 0)};
    background: white;
  }
  @media (min-width: ${size.mobileL}) {
    :nth-child(4){
    border-right: none;
    border-top: solid 0px #000;
  }
  }
  @media (min-width: ${size.laptop}) {
    :nth-child(4){
    border-right: none;
    border-top: solid 1px #000;
  }
  }
`
