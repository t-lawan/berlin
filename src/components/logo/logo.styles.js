import styled from "styled-components"
import { size } from "../../index.styles"

export const LogoWrapper = styled.div`
  display: block;
  margin: auto;
  position: sticky;
  top: 0;
  max-height:0;
  z-index: 0;
  padding: 0em 1em;
  background: white;
  @keyframes increaseHeight {
  0% {
    max-height: 0;
  }

  100% {
    max-height: 1000px;
  }
}

animation: increaseHeight 2s forwards;
-webkit-animation: increaseHeight 2s forwards;
animation-delay: 1.5s;
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
