import styled from "styled-components"
import { Color, TextSection } from "../../index.styles";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const EventCardWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: inline;
  :hover {
    ${TextSection} {
      p {
        color: ${Color.red};
      }
    }
  }
`

export const EventCardLink = styled(AniLink)`
  text-decoration: none;
`

export const EventHeading = styled.p`
`