import styled from "styled-components"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { showDisplayForTablet } from "../../index.styles";

export const JumbotronWrapper = styled.div`
  background: white;
  padding: 1.4em 1.95rem 0.7em;
  margin: 0em;
  ${showDisplayForTablet}
  border-top: 0;
  img {
    margin-bottom:0;
  }
`

export const JumbotronHeader = styled(AniLink)`
  text-decoration: none;
  color: black;
  position: relative;
  display:block;
  :hover {
    cursor: pointer;
  }
`
export const JumbotronWrapperMob = styled.div`
  background: transparent;
  padding: 0.5em 0.7rem
  margin: 0em;
  position:relative;
  width:100%;
  z-index:2;
  display:block;
  img {
    margin-bottom:0;
    position:relative;
    z-index:2;
    padding:0.7em 0.7em;
    :nth-child(2){
      padding-top:0em;
      margin-top:-0.7em;
    }
  }
  img.bg_anim {
    position: absolute;
    top:10px;
    z-index:1;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
  }
`