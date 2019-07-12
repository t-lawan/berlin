import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Column = props => {
  const padding = props.padding ? "0.5em" : "0";
  const ColumnLayout = styled.div`
    border-right: 1px solid black;
    width: ${props.width};
    padding: ${padding};
    overflow-y: auto;
  `

  return <ColumnLayout>{props.children}</ColumnLayout>
}

Column.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string.isRequired,
  padding: PropTypes.bool.isRequired
}

export default Column
