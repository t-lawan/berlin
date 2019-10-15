import styled from "styled-components"
import { Color, TextSection } from "../../index.styles"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const EventSection = styled(TextSection)`
  p {
    font-size: 1em;
  }
`

export const EventCardWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: inline;
  :hover {
    ${EventSection} {
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
  font-size: 1em;
`
