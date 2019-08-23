import styled, { css, createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Raleway:400,400i&display=swap');
@import url('https://use.typekit.net/xcm3ryn.css');
html,
body {
  width: 100vw;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  font-family: 'ag-book-pro', sans-serif;
  }
`

export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export const hideDisplayForTablet = css`
  ${"" /* display: ${props => (props.hideInMobile ? "inherit" : "inherit")}; */}
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.hideInMobile ? "none" : "inherit")};
  }
`

export const showDisplayForTablet = css`
  display: ${props => (props.showInMobile ? "none" : "inherit")};
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.showInMobile ? "inherit" : "none")};
  }
`

export const changeGridToOneRow = css`
  @media (max-width: ${size.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const changeGridToThreeEqualRows = css`
  @media (max-width: ${size.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const changeGridToTwoEqualColumns = css`
  @media (max-width: ${size.mobileL}) {
    grid-template-columns: repeat(2, 1fr);
  }
`


