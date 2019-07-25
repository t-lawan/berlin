import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import LanguageController from "./languagecontroller"
import Columns from "./columns"


const GlobalStyle = createGlobalStyle`
    html,
    body {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      }
`
const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <Columns>{children}</Columns>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
