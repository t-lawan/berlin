import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  border-bottom: 1px solid black;
`;

const Header = (props) => (
  <HeaderWrapper className={props.className}>
    {props.children}
  </HeaderWrapper>
)

Header.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}


export default Header;
