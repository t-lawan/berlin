import styled from "styled-components";
import { Color, UnderlineSectionLink } from "../../index.styles";

export const EventsWrapper = styled.div`
  border-top: 1px solid black;
  padding: 1.5em;
  line-height: 1.4em;
`

export const EventItem = styled.div`
  padding-top: 1em;
  color: black;
  border-bottom: 1px solid black;
  p, span {
    font-size: 1em;
  }
`

export const EventLink = styled(UnderlineSectionLink)`
  :hover > div {
    color: ${Color.red}
  }
`

export const EventTitle = styled.div`

`
