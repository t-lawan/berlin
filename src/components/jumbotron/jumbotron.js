import React from "react"
import PropTypes from "prop-types"
import { JumbotronWrapper } from "./jumbotron.styles";

const Jumbotron = props => (
  <JumbotronWrapper className={props.className}>
    <h5> berlin biennale for contemporary art </h5>
    <h5> sept7 — oct14, 2019 </h5>
    <p> experience 1</p>
  </JumbotronWrapper>
)
Jumbotron.propTypes = {
  className: PropTypes.string,
}

export default Jumbotron
