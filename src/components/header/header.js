import PropTypes from "prop-types"
import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import { connect } from "react-redux"
import { HeaderWrapper, Left, Right, RightHeading } from "./header.styles";


const Header = props => (
  <HeaderWrapper className={props.className}>
    <div>
      <h2> sept 7 — nov 11,  2019</h2>
    </div>
    <Left>
      <h3> experience</h3>
      <h3> the bones </h3>
      <h3> the  </h3>
    </Left>
    <Right>
      <RightHeading> 1</RightHeading>
      <h3> of </h3>
      <h3> world </h3>
    </Right>
  </HeaderWrapper>
)

Header.propTypes = {
  className: PropTypes.string,
}

const mapStateToProps = state => {
  return {
    experience: state.experience,
  }
}

export default connect(
  mapStateToProps,
  null
)(Header)
