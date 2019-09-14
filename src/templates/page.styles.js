import styled from "styled-components"
import { changeGridToOneRow } from "../index.styles";

export const PageWrapper = styled.div`
  padding: 2em;
  background: ${props => props.colour !== 0 ? props.colour : 'inherit'};
`

export const TwoColumnPageWrapper = styled.div`
  padding: 2em 1em;
  display: grid;
  grid-template-columns: 3fr 6fr;
  grid-column-gap: 1em;
  ${changeGridToOneRow}
`
