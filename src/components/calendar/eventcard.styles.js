import styled, { css } from "styled-components"
import { Link } from "gatsby";
import { Color } from "../../index.styles";

export const EventCardWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: inline;
  :hover {
    ${EventText} {
      color: ${Color.red};

    }
  }
`

export const EventCardLink = styled(Link)`
  text-decoration: none;
`
export const EventText = styled.div`
  
`
export const EventHeading = styled.p`
`