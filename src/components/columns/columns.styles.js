import styled, { css } from "styled-components"
import {
  changeGridToOneRow,
  size,
  hideDisplayForTablet,
  showDisplayForTablet,
  hideDisplayForMobile,
  showDisplayForMobile,
} from "../../index.styles"
import { Animated } from "react-animated-css"

export const AnimatedColumn = styled(Animated)`
  height: 100%;
  height: 100vh;
  width: inherit;
  overflow-y: auto;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 66fr 33fr;
  grid-template-rows: auto;
  grid-template-areas: "column column" "column column" "footer footer";
  @media (max-width: ${size.mobileM}) {
    /* width: 100%; */
    width: 100vw;
    display: block;
    position: relative;
    margin: 45px auto 0;
    height: calc(100vh - 90px);
  }

  @media (max-width: ${size.tablet}) {
    grid-template-areas:"column" "column column" "footer" !important;
    margin:40px auto 0;
    height: calc(100vh - 40px);
  }

`
export const ColumnsWrapper = styled.div`
  background-color: #fff;
  @media (max-width: ${size.tablet}) {
    /* width: 100%; */
    width: 100vw;
  }

  @media (max-width: ${size.mobileM}) {
    /* width: 100%; */
    width: 100vw;
  }

  display: grid;
  grid-template-columns: 1fr 18fr 1fr;
  ${changeGridToOneRow}
`

export const FirstColumnWrapper = styled.div`
  background-color: #fff;
  position: relative;
  display: grid;
  grid-template-columns: ${props => (props.twoColumns ? "1fr 1fr" : "1fr")};
  & div:last-child {
    border-left: none;
  }
  @media (max-width: ${size.mobileM}) {
    grid-template-columns: 1fr;
    /*display: flex;
    flex-direction: column-reverse;
    background-color: transparent;*/
  }
`

export const StickyTopHeader = styled.div`
  z-index: 300;
  top: 0;
  position: sticky;
  grid-area: "column";
  @media (max-width: ${size.tablet}) {
    grid-column-start: span 2;
  }
  :first-child {
    border-right: solid 1px #000;
  }
  @media (max-width: ${size.mobileM}) {
    :first-child {
      border-right: solid 0px #000;
    }
  }
  ${hideDisplayForMobile};
  ${hideDisplayForTablet};
`
export const FixedTopExpMob = styled.div`
  display: none;
  @media (min-width: ${size.mobileS}) {
    width: 100%;
    z-index: 300;
    top: 0;
    bottom:auto;
    position: fixed;
    height: 40px;
  }
  @media (min-width: ${size.mobileL}) {
    z-index: 300;
    top: 0;
    border-right:solid 1px #000;
    width: 66.66%;
    position: fixed;
    height: 40px;
  }
  @media (min-width: ${size.laptop}) {
    display: none;
  }
  ${showDisplayForTablet};
`
export const MobTitleCard = styled.div`
  @media (max-width: ${size.tablet}) {
    position: sticky;
    top:0;
    z-index: 3;
    width: 100%;
  }
  ${showDisplayForMobile};
  display: ${props => props.showOnHomePage ? 'inherit': 'none'};
`
export const MobAnimCard = styled.div`
  @media (max-width: ${size.mobileM}) {
    position: absolute;
    z-index: 1;
    top: 0px;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: ${size.mobileL}) {
    display:none;
  }
  ${showDisplayForMobile};
  display: ${props => props.showOnHomePage ? 'inherit': 'none'};

  /* ${showDisplayForTablet}; */
`

export const FixedHeader = styled.div`
  z-index: 500;
  top: 0;
  position: fixed;
`
export const StickyHeader = styled.div`
  z-index: 250;
  position: sticky;
  top: 0;
`

export const RelativeHeader = styled.div`
  z-index: 250;
  position: relative;
`

export const StickyFooter = styled.div`
  z-index: 500;
  bottom: 0;
  position: sticky;
  grid-area: footer;
  @media (max-width: ${size.tablet}) {
    /* width: 100%; */
    grid-area: unset;
  }
  transition: all 0.3s ease-in-out;
  ${showDisplayForTablet};
  ${hideDisplayForTablet};

  /* display: ${props => (props.show ? "inherit" : "none")}; */
`

export const StickyFooterWithHighZIndex = styled(StickyFooter)`
  z-index: 400;
`

export const FixedFooter = styled.div`
  z-index: 500;
  bottom: -150px;
  position: fixed;
  grid-area: footer;
  @media (max-width: ${size.mobileL}) {
    grid-area: unset;
    position:relative;
    bottom:0px;
    padding-bottom:60px;
  }
  ${showDisplayForTablet};
  ${hideDisplayForTablet};
  transition: all 0.3s ease-in-out;
`

export const FixedNavbar = styled.div`
  z-index: 600;
  bottom: 0;
  position: sticky;
  grid-area: footer;
  @media (max-width: ${size.tablet}) {
    grid-area: unset;
    position: fixed;
    bottom:auto;
    top:0;
    right:0;
    width:33.33%;
  }
  @media (max-width: ${size.mobileM}) {
    position: fixed;
    width: 100%;
    bottom: 0;
    top:auto;
  }
`
