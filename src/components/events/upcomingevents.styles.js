import styled from "styled-components";
import { Color, UnderlineSectionLink } from "../../index.styles";

export const EventsWrapper = styled.div`
  /* border-top: 1px solid black; */
  /* padding: 1.5em; */
  /* line-height: 1.4em; */
`

export const EventItem = styled.div`
  padding: 1em 1.7em;
  color: black;
  &:first-of-type {
    border: 6px solid ${Color.yellow}
  };
  p{
    margin-bottom:0;
  }
  border-bottom: 1px solid black;
`

export const EventLink = styled(UnderlineSectionLink)`
  :hover > div {
    color: ${Color.red}
  }
  /* padding: 1rem; */
  /* div:first-child {
  background: white;
  } */
`

export const EventTitle = styled.div`

`
