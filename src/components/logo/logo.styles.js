import styled from "styled-components"
import { size } from "../../index.styles"

export const LogoWrapper = styled.div`
  display: block;
  position: sticky;
  top: 0;
  padding-bottom: 100%;
  max-height:0;
  z-index: 0;
  @media (min-width: ${size.tablet}) {
    z-index: -1;
  }
  background: white;
  @keyframes increaseHeight {
  0% {
    max-height: 0;
  }

  100% {
    max-height: 1000px;
  }
}

animation: increaseHeight 1.5s forwards;
-webkit-animation: increaseHeight 1.5s forwards;
animation-delay: 1.4s;
  >img {
  	max-width: 310px;
    width: 100%;
  	margin-left: auto;
    margin-right: auto;
    display: block !important;
  }
  @media (max-width: ${size.tablet}) {
  >img {
    max-width:190px;
    margin-bottom:0.7em;
  }
  }
  @media (min-width: ${size.laptop}) {
    >img {
      margin-bottom: 1rem;
    }
  }
  @media (min-width: ${size.laptopL}) {
    >img {
      max-width: 330px;
    }
  }
`
