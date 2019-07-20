import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Column = props => {
  const borderRight = props.rightBorder ? "1px solid black" : 0

  const ColumnLayout = styled.div`
    border-right: ${borderRight};
    height: 100%;
    height: 100vh;
    overflow-y: auto;
  `

  return <ColumnLayout className={props.className}>{props.children}</ColumnLayout>
}

Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  rightBorder: PropTypes.bool
}

export default Column
