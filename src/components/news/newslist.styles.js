import styled from "styled-components"
import { Color } from "../../index.styles";

export const NewsListWrapper = styled.div`
  /* padding: 1em; */
  background: ${Color.yellow};
  display: ${props => props.show ? 'inherit' : 'none'};
`
