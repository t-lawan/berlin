import React from "react"
import PropTypes from "prop-types"
import { JumbotronWrapper, JumbotronHeader } from "./jumbotron.styles"
import { BerlinJumbotron } from "../../images/berlin-jumbotron"
import {ReactComponent as Heading} from "../../images/berlin-heading.svg"
import { createPath, getCurrentLanguageString } from "../../utility/helper";
import { connect } from "react-redux"

const svg = BerlinJumbotron()
const Jumbotron = props => {
  const language = getCurrentLanguageString(props.languages)

  return(
  <JumbotronWrapper showInMobile={props.showInMobile}>
    <JumbotronHeader to={createPath(language, '')}>
      <img src={`https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans/images/animation_${language.toLowerCase()}.svg`} />
    </JumbotronHeader>
  </JumbotronWrapper>
)
}
Jumbotron.propTypes = {
  showInMobile: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(
  mapStateToProps,
  null
)(Jumbotron)
