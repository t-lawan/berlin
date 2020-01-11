import styled from "styled-components"
import { Color, size, TextSection } from "../../index.styles"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const EventSection = styled(TextSection)`
    font-size: 1rem;
    font-style:italic;
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
  @media (max-width: ${size.mobileM}) {
    width:100%;
    display:block;
    padding: 0.3em 0.5em;
  }
`



export const EventCardLink = styled(AniLink)`
  text-decoration: none;
`

export const EventHeading = styled.p`
  font-size: 1rem;
  margin: 0;
`
