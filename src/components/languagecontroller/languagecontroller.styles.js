import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby"

export const LanguageControllerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
`

export const LanguageButton = styled(AniLink)`
  text-decoration: none;
  color: black;
  opacity: ${props => props.selected ? 0.3 : 1};
  margin-bottom: 0.25em;
  font-size: xx-large;
  font-weight: ${props => (props.selected ? "bold" : "lighter")};
  :hover {
    cursor: "pointer";
  }

`
