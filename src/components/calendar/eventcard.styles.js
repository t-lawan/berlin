import styled, { css } from "styled-components"
import { Color } from "../../index.styles";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const EventCardWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: inline;
  :hover {
    ${EventText} {
      p {
        color: ${Color.red};
      }
    }
  }
`

export const EventCardLink = styled(AniLink)`
  text-decoration: none;
`
export const EventText = styled.div`
  
`
export const EventHeading = styled.p`
`