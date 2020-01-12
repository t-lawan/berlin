import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { size } from "../../index.styles"

export const EventNavigatorWrapper = styled.section`
  display: flex;
  flex-direction: row;
  background: white;
  @media (max-width: ${size.mobileM}) {
    display:block;
    padding: 0.5em 0 0 0.7em;
    width:100%;
    :after {
      content:"";
      clear:both;
      display:table;
    }
  }
`

export const EventNavigatorButton = styled(AniLink)`
  font-size: 1.1rem;
  line-height:1;
  padding: 0.5em 0 0 1em;
  text-decoration: none;
  @media (max-width: ${size.mobileM}) {
    margin-bottom: 0.6em;
    margin-top: -0.5em;
    font-size: 1.55em;
    padding: 0 1em 0 0;
  }
`

export const EventNavigatorIcon = styled(FontAwesomeIcon)`
  :hover {
    cursor: pointer;
  }
`