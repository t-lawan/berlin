import styled from "styled-components"
import { Color, size } from "../../index.styles";

export const NewsListWrapper = styled.div`
  /* padding: 0.7em 2em; */
  background: ${Color.yellow};
  z-index:1;
  border-top: ${props => props.isHome || props.isCurrent ? 'solid 1px #000': 'none'} ;
  margin-bottom: ${props => props.isCurrent ? '0' : '-1px'};
  display: ${props => props.show ? 'inherit' : 'none'};
  position: relative;
  @media (max-width: ${size.mobileM}) {
    width: calc(100% + 1.4em);
    margin-left: -0.7em;
    margin-top: ${props => props.isCurrent ? '-1.7em' : '0'};
  }
`
