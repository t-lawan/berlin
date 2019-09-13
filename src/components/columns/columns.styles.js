import styled, { css } from "styled-components"
import { changeGridToOneRow, size } from "../../index.styles"
import { Animated } from "react-animated-css"

export const AnimatedColumn = styled(Animated)`
  height: 100%;
  height: 100vh;
  width: inherit;
  overflow-y: auto;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 5fr 3fr;

  /* ${changeGridToOneRow} */

`
export const ColumnsWrapper = styled.div`
  background-color: #fff;
  @media (max-width: ${size.tablet}) {
    width: 100vw;
  }
  display: grid;
  grid-template-columns: 1fr 20fr 1fr;
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
