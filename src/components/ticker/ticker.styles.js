import styled from "styled-components"
import { Color, size, TickerAnim } from "../../index.styles"

export const TickerWrapper = styled.div`
  z-index: 5;
    bottom: 0px;
    line-height:55px;
    @media (min-width: ${size.mobileS}) {
      padding-top: 0.2em;
      height: 44px;
    }
    @media (min-width: ${size.tablet}) {
      padding-top: 0.6em;
      height: 50px;
      line-height: 50px;
    }
    @media (min-width: ${size.laptop}) {
      padding-top: 0.75em;
      height: 55px;
    }
    @media (min-width: ${size.laptopM}) {
      padding-top: 0.75em;
      height: 55px;
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
      background-repeat: no-repeat;
      height: 55px;
      line-height: 55px;
      animation: ${TickerAnim} infinite 30s linear;
      @media (min-width: ${size.mobileS}) {
      background-size: 2300px 38px;
      height: 44px;
      line-height: 44px
      }
      @media (min-width: ${size.tablet}) {
      background-size: 2200px 30px;
      height: 50px;
      }
      @media (min-width: ${size.laptop}) {
      background-size: 2300px 31px;
      height: 55px;
      }
      @media (min-width: ${size.laptopM}) {
      background-size: 2300px 31px;
      height: 55px;
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
