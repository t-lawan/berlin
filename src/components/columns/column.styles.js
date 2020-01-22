import styled from "styled-components"
import {hideDisplayForTablet, size, hideDisplayForMobile } from "../../index.styles";
import {
  ExperienceButton,
} from "../experiencecontroller/experiencecontroller.styles"


export const ColumnLayout = styled.div`
  border-right: ${props => (props.rightBorder ? "1px solid black" : 0)};
  height: 100%;
  background: white;
  z-index:9;
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
    }
    }
  :nth-child(4){
    border-right: none;
    border-top: solid 1px #000;
  }
  @media (max-width: ${size.mobileM}) {
    border-right:solid 0px #000;
    background: transparent;
  }
`
