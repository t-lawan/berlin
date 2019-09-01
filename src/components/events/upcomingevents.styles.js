import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const EventsWrapper = styled.div`
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

`
