import styled from "styled-components"
import {hideDisplayForTablet, size, hideDisplayForMobile } from "../../index.styles";
import {
  ExperienceButton,
  ExperienceControllerWrapper,
} from "../experiencecontroller/experiencecontroller.styles"


export const ColumnLayout = styled.div`
  border-right: ${props => (props.rightBorder ? "1px solid black" : 0)};
  height: auto;
  background: white;
  position: relative;
  overflow-y: scroll;
  height: auto;
  padding-bottom: 2rem; 
  @media (max-width: ${size.mobileM}) {
        padding-bottom: 0rem; 
      } 
  display: block;
  width:auto;
  grid-area: 'column';
  > div {
    position: relative;
    display: block;
  }
  ${hideDisplayForTablet};
  ${hideDisplayForMobile};
  :first-child {
    ${ExperienceControllerWrapper} {
      @media (min-width: ${size.laptop}) {
        margin-top: 9.7em;
      }
      @media (min-width: ${size.laptopM}) {
        margin-top: 11em;
      }
      @media (min-width: ${size.laptopL}) {
        margin-top: 11.8em;
      }
    }
  }
  &::first-of-type{
    border: 0;
  }
  :last-child{
    border-left: solid 1px black;
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
