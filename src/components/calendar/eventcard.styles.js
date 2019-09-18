import styled, { css } from "styled-components"
import { Link } from "gatsby";

export const EventCardWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: inline;
  /* &:last-child{
    border:none !important;
  } */
`

export const EventCardLink = styled(Link)`
  text-decoration: none;
`
export const EventText = styled.p`
  font-size: x-small;
`
export const EventHeading = styled.p`
  /* font-size: x-small; */
`