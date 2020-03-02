import styled from "styled-components"
import { Color, size, TickerAnim } from "../../index.styles"

export const TickerWrapper = styled.div`
  z-index: 5;
    bottom: 0px;
    line-height:40px;
    @media (min-width: ${size.mobileS}) {
      height: 42px;
    }
    @media (min-width: ${size.tablet}) {
      height: 32px;
    }
    @media (min-width: ${size.laptop}) {
      height: 42px;
    }
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
      background-size: 2400px 40px;
      height: 40px;
      line-height: 40px;
      animation: ${TickerAnim} infinite 30s linear;
      @media (min-width: ${size.mobileS}) {
      background-size: 2300px 37px;
      height: 39px;
      }
      @media (min-width: ${size.tabletL}) {
      background-size: 2200px 30px;
      height: 30px;
      }
      @media (min-width: ${size.laptop}) {
      background-size: 2400px 40px;
      height: 40px;
      }
    }
     > a:hover > div {
    animation-play-state:paused;
    -webkit-animation-play-state:paused;
    }
    @media (max-width: ${size.tabletL}) {
    
    }
    display: ${props => props.show ? 'inherit': 'none'};
`
