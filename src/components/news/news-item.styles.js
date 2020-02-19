import styled from 'styled-components';
import { UnderlineSectionLink, Color } from '../../index.styles';
import { Link } from 'gatsby';

export const NewsItemWrapper = styled.div`
  padding: 0.7em 2em;
  border-bottom: 1px solid black;
`
export const NewsItemLink = styled(Link)`
  :hover > p {
    color: ${Color.red}
  };
  :hover > span {
    color: ${Color.red}
  };
`
export const NewsItemContainer = styled.div`
  transition: all 0.2s ease-in-out;
  cursor:pointer;

  p {
    margin:0;
  }

`

export const NewsText = styled.div`
   /* > p {
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
  } */
`