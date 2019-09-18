import styled from "styled-components"
import { hideDisplayForTablet, changeGridToOneRow } from "../../index.styles"

export const HeaderWrapper = styled.div`
  /* opacity: 1; */
  transition: opacity 0.5s;
  border-bottom: 1px solid black;
  padding: 0.5em 1em;
  display: grid;
  grid-template-columns:1fr 1fr;
  align-items: start;
  justify-items: center;
  background: white;
  ${changeGridToOneRow};

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
  text-align: right;
`

export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const DateContainer = styled.div`
  ${hideDisplayForTablet};
`

export const Heading = styled.h2``
