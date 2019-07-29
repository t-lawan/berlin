import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery, Link } from "gatsby"

const HeaderWrapper = styled.header`
  position: fixed;
  border-bottom: 1px solid black;
`

const Header = props => (
  <HeaderWrapper className={props.className}>
    <p> bornemannstraße 9, berlin / wedding</p>
  </HeaderWrapper>
)

Header.propTypes = {
  className: PropTypes.string,
}

export default Header
