import styled from "styled-components"
import { hideDisplayForTablet, changeGridToOneRow, showDisplayForTablet, hideDisplayForMobile } from "../../index.styles"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const HeaderWrapper = styled.header`
  /* opacity: 1; */
  transition: opacity 0.5s;
  border-bottom: 1px solid black;
  padding: 0.5em 1em;
  background: white;

  :hover {
    /* opacity: 0.01; */
  }
  /* ${hideDisplayForMobile}; */
`

export const HeaderLink = styled(AniLink)`
  text-decoration: none;
  display: grid;
  grid-template-columns:1fr 1fr;
  grid-column-gap: 1em;
  ${changeGridToOneRow};

`
