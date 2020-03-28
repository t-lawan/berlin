import styled from 'styled-components';
import { UnderlineSectionLink, Color } from '../../index.styles';
import { Link } from 'gatsby';

export const NewsItemWrapper = styled.div`
  padding: 1.2em 2em;
  border-bottom: 1px solid black;
`
export const NewsText = styled.p`
  > span {
    transition: all 0.2s ease-in-out;
    font-size: 1em;
  }
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

export const NewsItemLink = styled(Link)`
  > p {
  font-size: 1.0em;
  line-height: 1.3;
   transition: all 0.2s ease-in-out; 
  }
  :hover > p:first-child {
    color: ${Color.red}
  };
  :hover > ${NewsText} > span {
    color: ${Color.red}
  } 
  :hover > p > span {
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

