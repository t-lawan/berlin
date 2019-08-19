import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Columns from "../columns/columns"
import { GlobalStyle } from "../../index.styles";


const LayoutWrapper = styled.div`
  width: 100vw;
  width: 100%;
`

const Layout = props => (
  <LayoutWrapper>
    <GlobalStyle />
    <Columns
      firstColumn={props.firstColumn}
      secondColumn={props.secondColumn}
      thirdColumn={props.thirdColumn}
      numberOfColumnsIsTwo={props.numberOfColumnsIsTwo}
    />
  </LayoutWrapper>
)

Layout.propTypes = {
  firstColumn: PropTypes.node.isRequired,
  secondColumn: PropTypes.node,
  thirdColumn: PropTypes.node.isRequired,
  numberOfColumnsIsTwo: PropTypes.bool.isRequired,
}

export default Layout
