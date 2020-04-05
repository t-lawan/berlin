import styled from "styled-components"
import { Color } from "../../index.styles";

export const NewsListWrapper = styled.div`
  /* padding: 0.7em 2em; */
  background: ${Color.yellow};
  z-index:1;
  border-top: ${props => props.isHome ? 'solid 1px #000': 'none'} ;
  margin-bottom: ${props => props.isCurrent ? '0' : '-1px'};
  display: ${props => props.show ? 'inherit' : 'none'};
  position: relative;
`
