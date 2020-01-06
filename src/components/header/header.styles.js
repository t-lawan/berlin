import styled from "styled-components"
import { hideDisplayForTablet, changeGridToOneRow, showDisplayForTablet, hideDisplayForMobile } from "../../index.styles"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const HeaderWrapper = styled.header`
  /* opacity: 1; */
  transition: opacity 0.5s;
  /* border-bottom: 1px solid black; */
  padding: 1.4em 2em 0.7em;
  background: white;

  :hover {
    /* opacity: 0.01; */
  }
  /* ${hideDisplayForMobile}; */
`

export const HeaderLink = styled(AniLink)`
  text-decoration: none;
  margin-bottom:0;
  display: grid;
  grid-template-columns:1fr 1fr;
  grid-column-gap: 4em;
  ${changeGridToOneRow};
  img {
    margin-bottom: 0.0rem;
  }
`

export const HeaderImage = styled.img`
  ${hideDisplayForMobile};
`
