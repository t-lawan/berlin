import styled from "styled-components"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { showDisplayForTablet } from "../../index.styles";

export const JumbotronWrapper = styled.div`
  background: white;
  padding: 1.4em 1.95em 0.7em;
  margin: 0em;
  ${showDisplayForTablet}
  border: 1px solid black;
  border-top: 0;
  img {
    margin-bottom:0;
  }
`

export const JumbotronHeader = styled(AniLink)`
  text-decoration: none;
  color: black;
  :hover {
    cursor: pointer;
  }
`
