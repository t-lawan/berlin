import styled from "styled-components"
import { Color, TextSection } from "../../index.styles"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const EventSection = styled(TextSection)`
    font-size: 1rem;

  p {
    font-size: inherit;
    margin:0;
  }
`

export const EventCardWrapper = styled.div`
  padding: 0.5em 1em;
  width:50%;
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
  font-size: 1rem;
  margin: 0;
`
