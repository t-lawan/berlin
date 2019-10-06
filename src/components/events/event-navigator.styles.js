import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const EventNavigatorWrapper = styled.section`
  display: flex;
  flex-direction: row;
  background: transparent;
`

export const EventNavigatorButton = styled(AniLink)`
  text-decoration: none;
  font-size: 1.3rem;
  padding: 1em;
`