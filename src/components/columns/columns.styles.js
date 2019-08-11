import styled from "styled-components"

export const ColumnsWrapper = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 12fr 8fr 1fr;
`

export const FirstColumnWrapper = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-template-columns: ${props => props.twoColumns ? "1fr 1fr" : "1fr"};
`

export const StickyHeader = styled.div`
  z-index: 300;
  top: 0;
  position: sticky;
`
