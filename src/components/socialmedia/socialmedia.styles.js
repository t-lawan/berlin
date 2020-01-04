import styled from "styled-components"
import { size } from "../../index.styles"

export const SocialMediaWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  padding:0.5em 2em 1em;
  height:60px;
  flex-direction: row;
  background: white;
  width: 100%;
  border-top: 1px solid black;
  font-size: 1rem;
  /* z-index: 5000 !important; */

  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    width: inherit;
    border: 0;
    background: none;
    padding: 0;
    margin: 0;
  }
`

export const SocialMediaText = styled.span`
  padding: 1em 0.6em 1em 0em;
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
