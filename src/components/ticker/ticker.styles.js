import styled from "styled-components"
import { Color, size } from "../../index.styles"

export const TickerWrapper = styled.div`
  z-index: 5;
    bottom: 60px;
    height: 40px;
    line-height:40px;
    border-top: solid 1px #000;
    background: ${Color.yellow};
    position: fixed;
    width: 100%;
    display: inherit;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    @media (max-width: ${size.tablet}) {
    
    }
`
