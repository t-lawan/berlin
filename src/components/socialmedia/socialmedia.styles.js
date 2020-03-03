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
  font-size: 1rem;
  /* z-index: 5000 !important; */

  @media (max-width: ${size.tabletL}) {
    flex-direction: row;
    border-top: 1px solid black;
    width: calc(33.33% - 0px);
    background: white;
    position:fixed;
    height:50px;
    padding: 0.7em;
    margin: 0;
  }
  @media (min-width: ${size.laptop}) {
    height:60px;
    padding:0.8em 1.2em 1em;
  }
  @media (min-width: ${size.laptopM}) {
    height:70px;
    padding:1em 2em 1em;
  }
`

export const SocialMediaText = styled.span`
  padding: 0em 0.6em 0.5em 0em;
  :hover {
    cursor: pointer;
  }
  @media (max-width: ${size.tabletL}) {
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
