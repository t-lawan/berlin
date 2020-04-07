import styled from "styled-components"
import {
  hideDisplayForTablet,
  size,
  hideDisplayForMobile,
} from "../../index.styles"
import { ExperienceControllerWrapper } from "../experiencecontroller/experiencecontroller.styles"

export const ColumnLayout = styled.div`
  border-right: ${props => (props.rightBorder ? "1px solid black" : 0)};
  height: auto;
  background: white;
  position: relative;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  height: auto;
  padding-bottom: 2rem; 
  @media (min-width: ${size.laptopM}) {
  padding-bottom: 7rem; 
      }
  @media (max-width: ${size.mobileL}) {
        padding-bottom: 0rem; 
        height: 100%;
      } 
  display: block;
  width: auto;
  grid-area: 'column';

  ${hideDisplayForTablet};
  ${hideDisplayForMobile};
  :first-child {
    ${ExperienceControllerWrapper} {
      @media (min-width: ${size.laptop}) {
        margin-top: 7.05em;
      }
      @media (min-width: ${size.laptopM}) {
        margin-top: 7.8em;
      }
      @media (min-width: ${size.laptopL}) {
        margin-top: 8.6em;
      }
      @media (min-width: ${size.desktopS}) {
        margin-top: 9.9em;
      }
      @media (min-width: ${size.desktopM}) {
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
    z-index: 9;
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
