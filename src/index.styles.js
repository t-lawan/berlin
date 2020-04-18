import styled, { css, createGlobalStyle, keyframes } from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const Color = {
  yellow: "#fbf95d",
  red: "#D9515C",
}
export const size = {
  mobileS: "320px",
  mobileM: "420px",
  mobileL: "520px",
  mobileSL: "568px",
  mobileXL: "736px",
  tablet: "768px",
  tabletL: "1023px",
  laptop: "1024px",
  laptopM: "1124px",
  laptopL: "1400px",
  desktopS: "1600px",
  desktopM: "1900px",
  desktop: "2260px",
}

export const increaseHeightKeyFrames = keyframes`
    0% {
      max-height: 0;
    }

    100% {
      max-height: 1000px;
    }
`

export const decreaseHeightKeyFrames = keyframes`
    0% {
      max-height: 1000px;
    }

    100% {
      max-height: 0;
    }
`

export const GlobalStyle = createGlobalStyle`
@import url('https://use.typekit.net/xcm3ryn.css');
* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

}
html,
body {
  width: 100vw;
  width: 100%;
  position: relative;
  overflow: hidden !important;
  height: 100%;
  line-height: 1;
  margin: 0 auto;
  font-family: 'ag-book-pro', sans-serif;
  font-size: 100%;
  font-variant-numeric: tabular-nums;
  -moz-font-feature-settings: "tnum";
  -webkit-font-feature-settings: "tnum";
  font-feature-settings: "tnum";
  }
  a {
    text-decoration: none;
    color: black;
    transition: all 0.2s ease-in-out;
  }
  em {
    font-family: 'ag-book-pro', sans-serif;
    font-weight: 300 !important;
    text-rendering: optimizeLegibility;
    font-style: italic !important;
    backface-visibility: hidden;
  }
  strong {
    font-weight: normal;
  }
  h1 {
  margin-left: 0;
  text-rendering: optimizeLegibility;
  margin-right: 0;
  font-weight:normal;
  backface-visibility: hidden;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-size: 1.8rem;
  line-height: 1.1;
  @media (max-width: ${size.tabletL}) {
    font-size: 1.6rem;
  }
}
h2 {
  margin-left: 0;
  margin-right: 0;
  backface-visibility: hidden;
  font-weight:normal;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-size: 1.62671rem;
  line-height: 1.1;
  @media (max-width: ${size.tabletL}) {
    font-size: 1.5rem;
  }
}
h3 {
  margin-left: 0;
  font-weight:normal;
  backface-visibility: hidden;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-size: 1.38316rem;
  line-height: 1.1;
  @media (max-width: ${size.tabletL}) {
    font-size: 1.2rem;
  }
}
h4 {
  margin-left: 0;
  margin-right: 0;
  font-weight:normal;
  backface-visibility: hidden;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-size: 1rem;
  line-height: 1.1;
  @media (max-width: ${size.tabletL}) {
    font-size: 0.85rem;
  }
}
h5 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  backface-visibility: hidden;
  font-weight:normal;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-size: 0.85028rem;
  line-height: 1.1;
  @media (max-width: ${size.tabletL}) {
    font-size: 0.7rem;
  }
}
h6 {
  margin-left: 0;
  margin-right: 0;
  font-weight:normal;
  backface-visibility: hidden;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-size: 0.78405rem;
  @media (max-width: ${size.tabletL}) {
    font-size: 0.65rem;
  }
}
img {
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  backface-visibility: hidden;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
a, span {
  margin:0;
  text-rendering: optimizeLegibility;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  letter-spacing: 0.008rem;
  margin-bottom: 0rem;
  padding: 0;
  transition: all 0.2s ease-in-out;
  @media (max-width: ${size.mobileM}) {
    font-size: 1.05em;
  }
  @media (min-width: ${size.mobileL}) {
    font-size: 0.85em;
  }
  @media (min-width: ${size.tablet}) {
    font-size: 0.95em;
  }
  @media (min-width: ${size.laptop}) {
    font-size: 1.0em;
  }
  @media (min-width: ${size.laptopM}) {
    font-size: 1.05em;
  }
  @media (min-width: ${size.laptopL}) {
    font-size: 1.1em;
  }
}
::selection {
    background: #ededed;
}
p {
  text-rendering: optimizeLegibility;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  max-width: 730px;
  margin-left: 0;
  letter-spacing: 0.008rem;
  margin-right: 0;
  font-weight:normal;
  line-height: 1.3;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  font-size: 1rem;
  @media (max-width: ${size.mobileM}) {
    font-size: 1.05em;
    line-height:1.4;
    > a {
      font-size:1em;
    }
  }
  @media (min-width: ${size.mobileL}) {
    font-size: 0.85em;
    line-height:1.3;
    > a {
      font-size:1em;
    }
  }
  @media (min-width: ${size.tablet}) {
    font-size: 0.95em;
    line-height:1.3;
    > a {
      font-size:1em;
    }
  }
  @media (min-width: ${size.laptop}) {
    font-size: 1em;
    line-height:1.4;
    > a {
      font-size:1em;
    }
  }
  @media (min-width: ${size.laptopM}) {
    font-size: 1.05em;
    line-height:1.4;
    > a {
      font-size:1.05em;
    }
  }
  @media (min-width: ${size.laptopL}) {
    font-size: 1.1em;
    line-height:1.45;
    > a {
      font-size:1.1em;
    }
  }
}

li {
  list-style-type: lower-roman;
}
a {
  text-decoration-line: none;
  text-decoration-color: ${Color.red};
}
h1, h2, h3, h4, h5, h6, p, a, em {
  
}

.hide-footer {
  @media (min-width: ${size.tablet}) {
    bottom: -200px !important; 
  }

}
.carousel .slide {
  display: block;
  -webkit-font-smoothing: subpixel-antialiased;
  @media (max-width: ${size.mobileM}) {
    background-color: #FFF !important; 
  }
}
.show-footer {
  @media (min-width: ${size.tablet}) {
    bottom: 0 !important;
  }
}
ul.slider {
  backface-visibility: hidden;
  will-change: transform;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  position: relative;
  top: 0;
}

.carousel .slider-wrapper.axis-horizontal .slider {
  flex-wrap: nowrap;
}
.carousel .slider-wrapper {
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  }
.fade-in {
  -webkit-animation: fadeIn 2s linear forwards;
    animation: fadeIn 2s linear forwards;
}

.fade-out{
  -webkit-animation: fadeOut 4s linear forwards;
    animation: fadeOut 4s linear forwards;
}


${
  "" /* .image-contain-enter {
  max-height: 0;
}

.image-contain-active-enter {
  animation-name: ${increaseHeightKeyFrames};
    animation-duration: 3s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: 1.5s;
}

.image-contain-exit {
  
}

.image-contain-active-exit {
  
} */
}

.remove-animation {
  max-height: inherit;
  animation: 0;
  -webkit-animation: 0;
}

.increase-height {
  animation: ${increaseHeightKeyFrames} 3s forwards;
  -webkit-animation: increaseHeight 3s forwards;
  animation-delay: 1.5s;
}

@keyframes increaseHeight {
    0% {
      max-height: 0 !important;
    }

    100% {
      max-height: 1000px !important;
    }
  }

  @keyframes decreaseHeight {
    0% {
      max-height: 1000px !important;
    }

    100% {
      max-height: 0 !important;
    }
  }

@keyframes fadeIn {
  0% { opacity: 0 }
  100% { opacity: 1 }
}

@keyframes fadeOut {
  0% { opacity: 1 }
  100% { opacity: 0 }
}

.remove-z {
      
      transform: rotateY(1deg) translateZ(1px) !important;
      -webkit-transform: rotateY(1deg) translateZ(1px) !important;
      -moz-transform: rotateY(1deg) translateZ(1px) !important;
      -o-transform: rotateY(1deg) translateZ(1px) !important;

}
`

export const hideDisplayForTablet = css`
  ${"" /* display: ${props => (props.hideInMobile ? "inherit" : "inherit")}; */}
  @media (max-width: ${size.tabletL}) {
    display: ${props => (props.hideInTablet ? "none" : "inherit")};
  }
`

export const hideDisplayForMobile = css`
  ${"" /* display: ${props => (props.hideInMobile ? "inherit" : "inherit")}; */}
  @media (max-width: ${size.mobileM}) {
    display: ${props => (props.hideInMobile ? "none" : "inherit")};
  }
`

export const showDisplayForTablet = css`
  display: ${props => (props.showInTablet ? "none" : "inherit")};
  @media (max-width: ${size.tabletL}) {
    display: ${props => (props.showInTablet ? "inherit" : "none")};
  }
`

export const showDisplayForMobile = css`
  display: ${props => (props.showInMobile ? "none" : "inherit")};
  @media (max-width: ${size.mobileM}) {
    display: ${props => (props.showInMobile ? "inherit" : "none")};
  }
`

export const showDisplayForTabletFunc = variable => css`
  display: ${props => (props.showInTablet ? "none" : `${variable}`)};
  @media (max-width: ${size.tabletL}) {
    display: ${props => (props.showInTablet ? `${variable}` : "none")};
  }
`

export const changeGridToOneRow = css`
  @media (max-width: ${size.tabletL}) {
    grid-template-columns: 1fr;
  }
`
export const keyFrameExperienceImage = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const TickerAnim = keyframes`
  0% { background-position: 0 0; }
100% { background-position: -1200px 0; }
`
export const changeGridToThreeEqualRows = css`
  @media (max-width: ${size.tabletL}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const changeGridToTwoEqualColumns = css`
  @media (max-width: ${size.mobileL}) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const changeNthChild = css`
  @media (max-width: ${size.desktop}) {
    &:nth-child(4n) {
      border-right: none;
    }
  }
  @media (max-width: ${size.tabletL}) {
    &:nth-child(3n) {
      border-right: none;
    }
  }
`

export const mobile = props => {
  return css`
    @media (max-width: ${size.mobileL}) {
      ${props};
    }
  `
}

export const tablet = props => {
  return `
    @media (max-width: ${size.tabletL}) {
      ${props};
    }
  `
}

export const UnderlinedText = styled.p`
  text-decoration: none;
  border-bottom: solid thin;
  border-color: ${props => (props.red ? Color.red : "black")};
  color: ${props => (props.red ? Color.red : "black")};
`

export const Section = styled.section`
  padding: 1em;
  @media (max-width: ${size.mobileM}) {
    padding: 0.7em;
  }
`

export const UnderlineTransitionLink = styled(AniLink)`
  text-decoration: none;
  border-bottom: solid thin;
  border-color: ${props => props.colour};
  color: ${props => props.colour};
`

export const UnderlineSectionLink = styled(AniLink)`
  padding-top: 1em;
  text-decoration: none;
  color: ${props => props.colour};
  border-bottom: 1px solid black;
`

export const ExternalLink = styled.a`
  :hover {
    color: ${Color.red};
  }
  transition: all 0.2s ease-in-out;
  > span {
    transition: all 0.2s ease-in-out;
    font-size: 1em;
    :hover {
      color: ${Color.red};
    }
  }
`

export const LargeButton = styled.button`
  margin: 0em 0 0 10px;
  font-size: 1em;
  display: inline-block;
  border-radius: 0;
  background: ${props => props.bgColour};
  border: 1px solid black;
  padding: 8px 16px;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
  @media (max-width: ${size.mobileM}) {
    margin: 0.2em 0 0 0px;
    font-size: 1.1em;
    padding: 6px 10px;
  }
`

export const TextSection = styled.section``
