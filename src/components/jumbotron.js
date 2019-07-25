import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const JumbotronWrapper = styled.div`
  border-bottom: 1px solid black;
`
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
