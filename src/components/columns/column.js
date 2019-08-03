import React from "react"
import PropTypes from "prop-types"
import { ColumnLayout } from "./column.styles";

const Column = props => {
  return <ColumnLayout rightBorder={props.rightBorder}>{props.children}</ColumnLayout>
}

Column.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number,
  className: PropTypes.string,
  rightBorder: PropTypes.bool,
}

export default Column
