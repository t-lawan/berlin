import styled from 'styled-components';
import { UnderlineSectionLink, Color } from '../../index.styles';

export const NewsItemWrapper = styled.div`
  padding: 1em;
  border-bottom: 1px solid black;
`

export const NewsItemLink = styled(UnderlineSectionLink)`
  :hover > p, span {
    color: ${Color.red}
  }

`

export const NewsText = styled.div`
   > p {
    display: none;
  }
  p:first-child {
    display: inherit;
    font-size: 0;
    &::first-line {
      font-size: 1rem;
    }
  }
`