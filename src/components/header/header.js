import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { HeaderWrapper, Left, Right, RightHeading } from "./header.styles";


const Header = props => {
  const experience = props.experience;
  return (
  <HeaderWrapper className={props.className} hideInMobile>
    <div>
      <RightHeading> sept 7 — nov 11,  2019</RightHeading>
    </div>
    <Left>
      <RightHeading> exp.</RightHeading>
      <RightHeading> the bones </RightHeading>
      <RightHeading> the  </RightHeading>
    </Left>
    <Right>
      <RightHeading> {experience} </RightHeading>
      <RightHeading> of </RightHeading>
      <RightHeading> world </RightHeading>
    </Right>
  </HeaderWrapper>
)}

Header.propTypes = {
  className: PropTypes.string,
  hideInMobile: PropTypes.bool
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
