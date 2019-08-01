import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"
import Columns from "./columns"

const GlobalStyle = createGlobalStyle`
    html,
    body {
      width: 100vw;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      }
`

const LayoutWrapper = styled.div`
  width: 100vw;
  width: 100%;
`
const Layout = ({ children }) => (
  <LayoutWrapper>
    <GlobalStyle />
    <Columns>{children}</Columns>
  </LayoutWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
