import styled, { css } from "styled-components"
import { changeGridToOneRow, size, hideDisplayForTablet, showDisplayForTablet } from "../../index.styles"
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
  }

  @media (max-width: ${size.tablet}) {
    grid-template-rows: auto;
    grid-template-areas: "column" "footer";
  }
  /* ${changeGridToOneRow} */

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
    display:flex;
    flex-direction: column-reverse;

  }
`

export const StickyTopHeader = styled.div`
  z-index: 300;
  top: 0;
  position: sticky;
  ${hideDisplayForTablet}
  :first-child {
    border-right:solid 1px #000;
  }
  @media (max-width: ${size.mobileM}) {
    :first-child {
    border-right:solid 0px #000;
  }
  }
  
`

export const FixedHeader = styled.div`
  z-index: 500;
  top: 0;
  position: fixed;
`
export const StickyHeader = styled.div`
  z-index: 250;
  position: sticky;
  top:0;
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
  ${showDisplayForTablet};
  ${hideDisplayForTablet}
`

export const StickyFooterWithHighZIndex = styled(StickyFooter)`
  z-index: 400;
`

export const FixedFooter = styled.div`
  z-index: 500;
  bottom: 0;
  position: relative;
  grid-area: footer;
  @media (max-width: ${size.tablet}) {
    grid-area: unset;
  }
  ${showDisplayForTablet};
  ${hideDisplayForTablet};
`

export const FixedNavbar = styled.div`
  z-index: 600;
  bottom: 0;
  position: sticky;
  grid-area: footer;
  @media (max-width: ${size.tablet}) {
    grid-area: unset;
  }
  @media (max-width: ${size.mobileM}) {
    position: fixed;
    width:100%;
  }
`
