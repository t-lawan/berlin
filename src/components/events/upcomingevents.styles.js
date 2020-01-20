import styled from "styled-components";
import { Color, UnderlineSectionLink, size } from "../../index.styles";

export const EventsWrapper = styled.div`
  /* border-top: 1px solid black; */
  /* padding: 1.5em; */
  /* line-height: 1.4em; */
`

export const EventItem = styled.div`
  padding: 1em 1.7em;
  color: black;
  background-color:#FFF;
  position:relative;
  &:first-of-type {
    border: 6px solid ${Color.yellow}
  };
  &:first-of-type:before {
    content:" ";
    position:absolute;
    display:block;
    top:-6px;
    height:1px;
    left:-6px;
    width:calc(100% + 12px);
    background:#000;
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
  @media (max-width: ${size.tablet}) {
    padding: 1em 1em;
  }
  @media (max-width: ${size.mobileL}) {
    padding: 1em 1.7em;
  }
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
