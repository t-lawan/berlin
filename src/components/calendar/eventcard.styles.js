import styled from "styled-components"
import { Color, size, TextSection } from "../../index.styles"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const EventSection = styled(TextSection)`
    font-size: 1rem;
  p {
    font-size: inherit;
    margin:0;
    line-height: 1.3;
    transition: all 0.2s ease-in-out;
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
  @media (min-width: ${size.laptopL}) {
   font-size: 1.2rem; 
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
  transition: all 0.2s ease-in-out;
  > p {
    margin-bottom: 0;
    transition: all 0.2s ease-in-out;
    font-size:1em;
    line-height: 1.3;
    @media (max-width: ${size.mobileM}) {
      font-size: 1em;
    }
  }
  > p:last-child:hover {
    color: ${Color.red};
  }
`

export const EventHeading = styled.p`
  font-size: 1.1em;
  margin: 0;
  @media (min-width: ${size.tablet}) {
   font-size: 0.95rem; 
  }
  @media (min-width: ${size.laptop}) {
   font-size: 1rem; 
  }
`
