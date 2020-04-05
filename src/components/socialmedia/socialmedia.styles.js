import styled from "styled-components"
import { Color, size } from "../../index.styles"

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
    height:55px;
    padding:0.8em 1.2em 1em;
  }
  @media (min-width: ${size.laptopM}) {
    height:60px;
    padding:1em 2em 1em;
  }
`

export const SocialMediaText = styled.span`
  padding: 0em 0.6em 0.5em 0em;
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    color: ${Color.red}
  }
  @media (max-width: ${size.tabletL}) {
    display: inline-block;
  }
  @media (min-width: ${size.laptopM}) {
    padding: 0em 0.75em 0.5em 0em;
  }
`

export const SocialMediaLink = styled.a`
  padding: 0em 0.6em 0.5em 0em;
  display:inline-block;
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    color: ${Color.red}
  }
  :last-child {
    padding-right:0;
  }
  color: inherit;
  text-decoration: none;
  @media (min-width: ${size.laptopM}) {
    padding: 0em 0.75em 0.5em 0.75em;
  }
`

export const NewsletterForm = styled.div``
