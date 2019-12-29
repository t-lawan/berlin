import styled from 'styled-components';
import { UnderlineSectionLink, Color } from '../../index.styles';

export const NewsItemWrapper = styled.div`
  padding: 0.7em 2em;
  border-bottom: 1px solid black;
`

export const NewsItemLink = styled.div`
  transition: all 0.2s ease-in-out;
  cursor:pointer;
  :hover > p {
    color: ${Color.red}
  };
  :hover > span {
    color: ${Color.red}
  };
  p {
    margin:0;
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
  p {
    margin:0;
  }
`