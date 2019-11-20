import styled from "styled-components"
import { Color, TextSection } from "../../index.styles"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const EventSection = styled(TextSection)`
    font-size: 0.8em;

  p {
    font-size: inherit;
  }
`

export const EventCardWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: inline;
  :hover {
    ${EventSection} {
      color: ${Color.red};
    }
  }
`



export const EventCardLink = styled(AniLink)`
  text-decoration: none;
`

export const EventHeading = styled.p`
  font-size: 0.8em;
`
