import React from "react"
import PropTypes from "prop-types"
import { JumbotronWrapper, JumbotronHeader } from "./jumbotron.styles"
import { BerlinJumbotron } from "../../images/berlin-jumbotron"
import {ReactComponent as Heading} from "../../images/berlin-heading.svg"
const svg = BerlinJumbotron()
const Jumbotron = props => (
  <JumbotronWrapper showInMobile={props.showInMobile}>
    <JumbotronHeader to={'/'}>
      {svg}
    </JumbotronHeader>
  </JumbotronWrapper>
)
Jumbotron.propTypes = {
  showInMobile: PropTypes.bool
}

export default Jumbotron
