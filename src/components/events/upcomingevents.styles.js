import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const EventsWrapper = styled.div`
  padding: 2em;
`

export const EventItem = styled(AniLink)`
  padding-top: 1em;
  border-bottom: 1px solid black;
  text-decoration: none;
  color: black;
`
