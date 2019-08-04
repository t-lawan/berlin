import React from "react"
import PropTypes from "prop-types"
import { JumbotronWrapper } from "./jumbotron.styles";

const Jumbotron = props => (
  <JumbotronWrapper className={props.className}>
    <h1> berlin biennale for contemporary art </h1>

  </JumbotronWrapper>
)
Jumbotron.propTypes = {
  className: PropTypes.string,
}

export default Jumbotron
