import styled from "styled-components"
import { hideDisplayForTablet } from "../../index.styles";

export const HeaderWrapper = styled.div`
  /* opacity: 1; */
  transition: opacity 0.5s;
  border-bottom: 1px solid black;
  padding: 0.5em 1em;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: start;
  justify-items: center;
  background: white;

  :hover {
    /* opacity: 0.01; */
  }
  ${hideDisplayForTablet};
`
export const Left = styled.div`
  justify-self: start;
  align-self: flex-start;
  justify-content: flex-end;
`

export const Right = styled.div`
  justify-self: end;
  align-self: flex-end;
`

export const RightHeading = styled.h3`
  
`
