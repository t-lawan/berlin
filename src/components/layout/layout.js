import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"
import Columns from "../columns/columns"
import NewsList from "../news/newslist"
import UpcomingEvents from "../events/upcomingevents"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Raleway:400,400i&display=swap');
    html,
    body {
      width: 100vw;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      font-family: 'Raleway', sans-serif;
      }
`

const LayoutWrapper = styled.div`
  width: 100vw;
  width: 100%;
`

const Layout = (props) => (
  <LayoutWrapper>
    <GlobalStyle />
    <Columns
      firstColumn={props.firstColumn}
      secondColumn={props.secondColumn}
      thirdColumn={props.thirdColumn} 
      numberOfColumnsIsTwo={true} />
  </LayoutWrapper>
)

Layout.propTypes = {
  firstColumn: PropTypes.node.isRequired,
  secondColumn: PropTypes.node,
  thirdColumn: PropTypes.node.isRequired,
  numberOfColumnsIsTwo: PropTypes.bool.isRequired
}

export default Layout
