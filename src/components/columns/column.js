import React from "react"
import PropTypes from "prop-types"
import { ColumnLayout } from "./column.styles";

class Column extends React.Component {
  columnRef;
  constructor(props) {
    super(props);
    this.columnRef = React.createRef();
  }
  render() {
    return <ColumnLayout id={this.props.id ? this.props.id : ''} ref={this.columnRef} rightBorder={this.props.rightBorder} hideInMobile={this.props.hideInMobile} hideInTablet={this.props.hideInTablet}>{this.props.children}</ColumnLayout>

  }
}

Column.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number,
  className: PropTypes.string,
  rightBorder: PropTypes.bool,
  hideInMobile: PropTypes.bool,
  hideInTablet: PropTypes.bool,
  id: PropTypes.string
}

export default Column
