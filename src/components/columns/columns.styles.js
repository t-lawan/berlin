import styled, { css } from "styled-components"
import {
  changeGridToOneRow,
  size,
  Color,
  hideDisplayForTablet,
  showDisplayForTablet,
  hideDisplayForMobile,
  showDisplayForMobile,
} from "../../index.styles"
import {
  ColumnLayout,
} from "./column.styles"
import {
  Caption,
} from "../../partials/ImageResource"
import { Animated } from "react-animated-css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const ExperienceCarousel = styled(Carousel)`
  text-align: left !important;
  width: inherit;
  overflow-y: auto;
  overflow-x: hidden;
`

export const ExperienceContainer = styled.div`
  text-align: left !important;
  display: grid;
  height: 100%;
  height: 100vh;
  grid-template-columns: 66.66% 33.33%;
  grid-template-rows: auto;
  overflow-y: hidden;
  width: inherit;
  background: white;
  position: relative;
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
    ${ColumnLayout}:nth-child(3) {
      z-index:10;
    }
  }
`

export const AnimatedColumn = styled(Animated)`
  height: 100%;
  height: 100vh;
  width: inherit;
  overflow-y: auto;
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
    ${ColumnLayout}:nth-child(3) {
      z-index:10;
    }
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
  @media (min-width: ${size.laptop}) {
  grid-template-columns: 6% 88% 6%;
  }
  @media (min-width: ${size.laptopM}) {
  grid-template-columns: 5% 90% 5%;
  }
  ${changeGridToOneRow}
`

export const ResourcesOnlyInMobile = styled.div`
  display: none;
  z-index: 9;
  position: relative;
  @media (max-width: ${size.mobileM}) {
    display: ${props => props.hide ? 'none' : 'inherit'};
  }
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
  @media (min-width: ${size.mobileL}) {
    border-top: solid 0px #000;
  }
  @media (min-width: ${size.tablet}) {
    border-top: solid 1px #000;
  }
  @media (min-width: ${size.laptop}) {
    border-top: none;
  }
`

export const StickyTopHeader = styled.div`
  z-index: 300;
  top: 0;
  position: relative;
  grid-area: "column";
  @media (max-width: ${size.tablet}) {
    /*grid-column-start: span 2;*/
  }
  :first-child {
    border-right: solid 1px #000;
  }
  @media (max-width: ${size.mobileM}) {
    :first-child {
      border-right: solid 0px #000;
    }
  }
  @media (min-width: ${size.mobileL}) {
    border-bottom:solid 1px #000;
  }
  @media (min-width: ${size.laptop}) {
    border-bottom:none;
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
    border-right:solid 0px #000;
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
    position: -webkit-sticky;
    top:0;
    z-index: 3;
    width: 100%;
  }
  ${showDisplayForMobile};
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
  position: -webkit-sticky;
  top: 0;
`

export const RelativeHeader = styled.div`
  z-index: 250;
  position: relative;
  > section > ${Caption} {
      margin-bottom: 0.7em;
    }
`

export const StickyFooter = styled.div`
  z-index: 500;
  bottom: 0;
  position: sticky;
  position: -webkit-sticky;
  grid-area: footer;
  width: 100%;
  @media (max-width: ${size.tablet}) {
    /* width: 100%; */
    grid-area: unset;
  }
  transition: all 0.3s ease-in-out;
  @media (max-width: ${size.mobileM}) {
    position: fixed;
    bottom: 45px;
    z-index: 999999;
  }
  @media (min-width: ${size.tablet}) {
    position: fixed;
    bottom: 0px;
    z-index: 999999;
  }
   @media (min-width: ${size.laptop}) {
    position: sticky;
    position: -webkit-sticky;
    z-index: 500;
   }
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
  @media (min-width: ${size.tablet}) {
    width: 100%;
  }
  @media (min-width: ${size.laptop}) {
    /* width: 90%; */
  }
  @media (max-width: ${size.mobileL}) {
    grid-area: unset;
    position:relative;
    bottom:0px;
    padding-bottom:60px;
  }
  ${showDisplayForTablet};
  ${hideDisplayForTablet};
  ${hideDisplayForMobile};
  transition: all 0.3s ease-in-out;
`

export const FixedNavbar = styled.div`
  z-index: 600;
  bottom: 0;
  position: sticky;
  position: -webkit-sticky;
  grid-area: footer;
  @media (max-width: ${size.tablet}) {
    grid-area: unset;
    position: fixed;
    bottom:auto;
    border-left: solid 1px #000;
    top:0;
    right:0;
    width:33.33%;
  }
  @media (max-width: ${size.mobileM}) {
    position: fixed;
    width: 100%;
    border-left: solid 0px #000;
    bottom: 0;
    top:auto;
  }
`
export const FixedTicker = styled.div`
  z-index: 5;
  bottom: 70px;
  height:42px;
  /* width: calc(33.33% - 3.3%); */
  width: 40%;
  position: fixed !important;
  overflow:hidden;
  /* right: 5%; */
  left:auto;
  /*grid-area: footer;*/
  @media (max-width: ${size.mobileL}) {
    grid-area: unset;
    
  }
  ${showDisplayForTablet};
  ${hideDisplayForTablet};
  transition: all 0.3s ease-in-out;
`
