import styled, { css } from "styled-components"
import { changeGridToOneRow } from "../../index.styles";


export const ColumnsWrapper = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 10fr 7fr 1fr;
  ${changeGridToOneRow}
`

export const FirstColumnWrapper = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-columns: ${props => (props.twoColumns ? "1fr 1fr" : "1fr")};

`

export const StickyHeader = styled.div`
  z-index: 300;
  top: 0;
  position: sticky;
`
