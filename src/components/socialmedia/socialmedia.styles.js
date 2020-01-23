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
    flex-direction: row;
    width: calc(33.33% - 1px);
    background: white;
    position:fixed;
    right:0;
    height:55px;
    padding: 0.7em;
    margin: 0;
  }
`

export const SocialMediaText = styled.span`
  padding: 0em 0.6em 0.5em 0em;
  :hover {
    cursor: pointer;
  }
  @media (max-width: ${size.tablet}) {
    display: inline-block;
  }
`

export const SocialMediaLink = styled.a`
  padding: 0em 0.6em 0.5em 0em;
  display:inline-block;
  :hover {
    cursor: pointer;
  }
  :last-child {
    padding-right:0;
  }
  color: inherit;
  text-decoration: none;
`

export const NewsletterForm = styled.div``
