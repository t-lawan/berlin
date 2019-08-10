import styled from "styled-components"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const JumbotronWrapper = styled.div`
  border-bottom: 1px solid black;
  background: white;
  padding: 1em;
`

export const JumbotronHeader = styled(AniLink)`
  text-decoration: none;
  color: black;
  :hover {
    cursor: pointer;
  }
`
