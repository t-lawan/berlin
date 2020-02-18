import styled from "styled-components"
import { Color } from "../../index.styles";

export const NewsListWrapper = styled.div`
  /* padding: 0.7em 2em; */
  background: ${Color.yellow};
  display: ${props => props.show ? 'inherit' : 'none'};
  position: relative;
`
