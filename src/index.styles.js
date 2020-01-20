import styled, { css, createGlobalStyle, keyframes } from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const Color = {
  yellow: "#F9EF84",
  red: "#D9515C",
}
export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export const GlobalStyle = createGlobalStyle`
@import url('https://use.typekit.net/xcm3ryn.css');
* {
  box-sizing: border-box;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
}
html,
body {
  width: 100vw;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  font-family: 'ag-book-pro', sans-serif;
  font-style: normal;
  font-size: calc(1em + 0.1vw);
  }
  a {
    text-decoration: none;
    color: black;
    transition: all 0.2s ease-in-out;
  }
  h1 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-size: 1.8rem;
  line-height: 1.1;
  @media (max-width: ${size.tablet}) {
    font-size: 1.6rem;
  }
}
h2 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-size: 1.62671rem;
  line-height: 1.1;
  @media (max-width: ${size.tablet}) {
    font-size: 1.5rem;
  }
}
h3 {
  margin-left: 0;
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
  @media (max-width: ${size.tablet}) {
    font-size: 1.2rem;
  }
}
h4 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-size: 1rem;
  line-height: 1.1;
  @media (max-width: ${size.tablet}) {
    font-size: 0.85rem;
  }
}
h5 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-size: 0.85028rem;
  line-height: 1.1;
  @media (max-width: ${size.tablet}) {
    font-size: 0.7rem;
  }
}
h6 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-size: 0.78405rem;
  @media (max-width: ${size.tablet}) {
    font-size: 0.65rem;
  }
}
img {
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
a, span {
  margin:0;
  margin-bottom: 0rem;
  padding: 0;
  transition: all 0.2s ease-in-out;
  @media (max-width: ${size.tablet}) {
  }
}
p {
  margin-left: 0;
  margin-right: 0;
  line-height: 1.3;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  font-size: 1rem;
  @media (max-width: ${size.mobileM}) {
    font-size: 1.1rem;
    line-height:1.4;
    > a {
      font-size:1em;
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
`



export const hideDisplayForTablet = css`
  ${"" /* display: ${props => (props.hideInMobile ? "inherit" : "inherit")}; */}
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.hideInTablet ? "none" : "inherit")};
  }
`

export const hideDisplayForMobile = css`
  ${"" /* display: ${props => (props.hideInMobile ? "inherit" : "inherit")}; */}
  @media (max-width: ${size.mobileM}) {
    display: ${props => (props.hideInMobile ? "none" : "none")};
  }
`

export const showDisplayForTablet = css`
  display: ${props => (props.showInMobile ? "none" : "inherit")};
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.showInMobile ? "inherit" : "none")};
  }
`

export const showDisplayForTabletFunc = variable => css`
  display: ${props => (props.showInMobile ? "none" : `${variable}`)};
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.showInMobile ? `${variable}` : "none")};
  }
`

export const changeGridToOneRow = css`
  @media (max-width: ${size.tablet}) {
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
export const changeNthChild = css`
  @media (max-width: ${size.desktop}) {
    &:nth-child(4n) {
      border-right: none;
    }
  }
  @media (max-width: ${size.tablet}) {
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
    @media (max-width: ${size.tablet}) {
      ${props};
    }
  `
}



export const UnderlinedText = styled.p`
  text-decoration: none;
  border-bottom: solid thin;
  border-color: ${props => props.red ? Color.red : 'black'};
  color: ${props => props.red ? Color.red : 'black'}
`

export const Section = styled.section`
  padding: 1em;
  @media (max-width: ${size.mobileM}) {
    padding: 0.7em
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
    color: ${ props => props.colour};
  }
`

export const LargeButton = styled.button`
  margin: 0.0em 0 0 10px;
  font-size: 1em;
  display: inline-block;
  border-radius: 0;
  background: ${props => props.bgColour};
  border: 1px solid black;
  padding: 8px 16px;
  :hover {
    cursor: pointer;
  }
  @media (max-width: ${size.mobileM}) {
    margin: 0.2em 0 0 10px;
  }
`

export const TextSection = styled.section`
`
