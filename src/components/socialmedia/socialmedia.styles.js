import styled from "styled-components"
import { size } from "../../index.styles"

export const SocialMediaWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  flex-direction: row;
  background: white;
  width: 100%;
  border-top: 1px solid black;

  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    width: inherit;
    border: 0;
    background: none;
    font-size: 1.4rem;
    padding: 0;
    margin: 0;
  }
`

export const SocialMediaText = styled.span`
  padding: 1em;
  :hover {
    cursor: pointer;
  }
  @media (max-width: ${size.tablet}) {
    display: block;
  }
`

export const SocialMediaLink = styled.a`
  padding: 1em;
  :hover {
    cursor: pointer;
  }
  color: inherit;
  text-decoration: none;
`

export const NewsletterForm = styled.div``
