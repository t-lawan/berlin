import styled from "styled-components"

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid black;
  padding: 0.5em 1em;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  z-index: 300;
  /* position: fixed; */
  align-items: start;
  justify-items: center;
`
export const Left = styled.div`
  justify-self: start;
  align-self: flex-start;
`

export const Right = styled.div`
  justify-self: end;
  align-self: flex-end;
`

export const RightHeading = styled.h3`
  
`