import React from "react"
import PropTypes from "prop-types"
import { JumbotronWrapper, JumbotronHeader } from "./jumbotron.styles"

const Jumbotron = props => (
  <JumbotronWrapper>
    <JumbotronHeader to="/">
      <h1> berlin biennale for contemporary art </h1>
    </JumbotronHeader>
  </JumbotronWrapper>
)
Jumbotron.propTypes = {
  className: PropTypes.string,
}

export default Jumbotron
