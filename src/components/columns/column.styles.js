import styled from "styled-components"
import {hideDisplayForTablet } from "../../index.styles";


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
  }
  :nth-child(4){
    border-right: none;
    border-top: solid 1px #000;
  }
`
