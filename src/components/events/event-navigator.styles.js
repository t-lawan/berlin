import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const EventNavigatorWrapper = styled.section`
  display: flex;
  flex-direction: row;
  background: transparent;
`

export const EventNavigatorButton = styled(AniLink)`
  font-size: 1.1rem;
  padding: 0.7em 0 0 1em;
  text-decoration: none;
`

export const EventNavigatorIcon = styled(FontAwesomeIcon)`
  :hover {
    cursor: pointer;
  }
`