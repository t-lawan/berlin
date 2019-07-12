import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  position: fixed;
  /* top: 0; */
  padding: 0.5 auto ;
  height: 7.5%;
  width: 100%;
  border-bottom: 1px solid black;
`;

const Header = (props) => (
  <HeaderWrapper>
    {props.children}
  </HeaderWrapper>
)

Header.propTypes = {
  children: PropTypes.node.isRequired
}


export default Header;
