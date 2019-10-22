import styled from "styled-components"
import {hideDisplayForTablet } from "../../index.styles";


export const ColumnLayout = styled.div`
  border-right: ${props => (props.rightBorder ? "1px solid black" : 0)};
  height: 100%;
  height: 100vh;
  background: white;
  width:inherit;
  overflow-y: auto;
  ${hideDisplayForTablet};

`
