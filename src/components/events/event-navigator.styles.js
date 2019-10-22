import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const EventNavigatorWrapper = styled.section`
  display: flex;
  flex-direction: row;
  background: transparent;
`

export const EventNavigatorButton = styled(AniLink)`
  font-size: 1.3rem;
  padding: 1em;
`

export const EventNavigatorIcon = styled(FontAwesomeIcon)`
  :hover {
    cursor: pointer;
  }
`