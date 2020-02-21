import styled from "styled-components"
import { Color, size, TickerAnim } from "../../index.styles"

export const TickerWrapper = styled.div`
  z-index: 5;
    bottom: 0px;
    height: 42px;
    line-height:40px;
    overflow: hidden;
    display: flex;
    background-color:#FFF;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    width: calc(100% - 0em);
    border-top: solid 1px #000;
    > a > div {
      white-space: nowrap;
      overflow: visible;
      line-height: 40px;
      animation: ${TickerAnim} infinite 20s linear;
    }
    
    @media (max-width: ${size.tablet}) {
    
    }
    display: ${props => props.show ? 'none': 'inherit'};
`
