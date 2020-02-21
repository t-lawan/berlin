import styled from "styled-components"
import { Color, size, TextSection } from "../../index.styles"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const EventSection = styled(TextSection)`
    font-size: 1rem;
  p {
    font-size: inherit;
    margin:0;
  }
  @media (max-width: ${size.mobileM}) {
    word-break: break-all;
  }
  @media (min-width: ${size.tablet}) {
   font-size: 0.95rem; 
  }
  @media (min-width: ${size.laptop}) {
   font-size: 1rem; 
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
  @media (min-width: ${size.tablet}) {
   padding: 0.5em 0.7em;
   width: 100%;
  }
  @media (min-width: ${size.laptop}) {
   padding: 0.5em 1em;
  }
`



export const EventCardLink = styled(AniLink)`
  text-decoration: none;
  > p {
    margin-bottom: 0;
  }
`

export const EventHeading = styled.p`
  font-size: 1rem;
  margin: 0;
  @media (min-width: ${size.tablet}) {
   font-size: 0.95rem; 
  }
  @media (min-width: ${size.laptop}) {
   font-size: 1rem; 
  }
`
