import styled from "styled-components"
import { Link } from "gatsby"
export const JumbotronWrapper = styled.div`
  border-bottom: 1px solid black;
  background: white;
  padding: 1em;
`

export const JumbotronHeader = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    cursor: pointer;
  }
`
