import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Color } from "../../index.styles";

export const EventsWrapper = styled.div`
  border-top: 1px solid black;
  padding: 2em;
`

export const EventItem = styled.div`
  padding-top: 1em;
  color: black;
  border-bottom: 1px solid black;
`

export const EventLink = styled(AniLink)`
  padding-top: 1em;
  text-decoration: none;
  color: black;
  border-bottom: 1px solid black;
  :hover > div {
    color: ${Color.red}
  }
`

export const EventTitle = styled.div`

`
