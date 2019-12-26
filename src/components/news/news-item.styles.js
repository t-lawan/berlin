import styled from 'styled-components';
import { UnderlineSectionLink, Color } from '../../index.styles';

export const NewsItemWrapper = styled.div`
  padding: 1em;
  border-bottom: 1px solid black;
`

export const NewsItemLink = styled(UnderlineSectionLink)`
  :hover > p {
    color: ${Color.red}
  }
`