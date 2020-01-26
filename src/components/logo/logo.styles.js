import styled from "styled-components"
import { size } from "../../index.styles"

export const LogoWrapper = styled.div`
  display: block;
  margin: auto;
  position: sticky;
  top: 0;
  z-index: 0;
  padding: 0em 1em;
  background: white;
  max-height:500px;
  >img {
  	max-width: 310px;
    width: 100%;
  	margin-left: auto;
    margin-right: auto;
    display: block;
  }
  @media (max-width: ${size.tablet}) {
  >img {
    max-width:190px;
    margin-bottom:0.7em;
  }
  }
`
