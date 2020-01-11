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
  position:relative;
  &:first-of-type {
    border: 6px solid ${Color.yellow}
  };
  &:first-of-type:after {
    content:" ";
    position:absolute;
    display:block;
    bottom:-6px;
    height:1px;
    left:-6px;
    width:calc(100% + 12px);
    background:#000;
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
