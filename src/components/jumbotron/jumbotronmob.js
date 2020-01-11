import React from "react"
import PropTypes from "prop-types"
import { JumbotronWrapperMob, JumbotronHeader } from "./jumbotron.styles"
import { BerlinJumbotron } from "../../images/berlin-jumbotron"
import {ReactComponent as Heading} from "../../images/berlin-heading.svg"
import { createPath, getCurrentLanguageString } from "../../utility/helper";
import { connect } from "react-redux"
import { getDocument } from "../../store/selector";

const svg = BerlinJumbotron()
const Jumbotron = props => {
  const language = getCurrentLanguageString(props.languages)
  let experience = props.experience
  let exhibition = props.exhibitions.filter(ex => {
    return ex.experience == experience
  })[0];
  let image = getDocument(props.documents, exhibition[language].exp_bb11_right_header);
  let imagedate = getDocument(props.documents, exhibition[language].exp_dates_header);
  return(
  <JumbotronWrapperMob showInMobile={props.showInMobile}>
    <JumbotronHeader to={createPath(language, '')}>
      <img src={imagedate.url} alt={imagedate.slug}/>
      <img src={image.url} alt={image.slug}/>
    </JumbotronHeader>
  </JumbotronWrapperMob>
)
}
Jumbotron.propTypes = {
  showInMobile: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
    exhibitions: state.exhibitions,
    documents: state.documents
  }
}

export default connect(
  mapStateToProps,
  null
)(Jumbotron)
