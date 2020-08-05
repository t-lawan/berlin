import React from "react"
import PropTypes from "prop-types"
import { JumbotronWrapperMob, JumbotronHeader } from "./jumbotron.styles"
import { createPath, getCurrentLanguageString } from "../../utility/helper";
import { connect } from "react-redux"
import { getDocument } from "../../store/selector";

const Jumbotron = props => {
  const language = getCurrentLanguageString(props.languages)
  let experience = props.experience
  let exhibition = props.exhibitions.filter(ex => {
    return ex.experience == experience
  })[0];
  let image = getDocument(props.documents, exhibition[language].exp_bb11_right_header);
  let imagedate = getDocument(props.documents, exhibition[language].exp_dates_header);
  return(
  <JumbotronWrapperMob isExperience4={props.experience == 4} showOnHomePage={props.showOnHomePage} showInTablet={props.showInTablet} showInMobile={props.showInMobile}>
    <JumbotronHeader to={createPath(language, '')}>
      {imagedate ? <img src={imagedate.publicUrl} alt={imagedate.slug}/> : null}
      {image ? <img src={image.publicUrl} alt={image.slug}/> : null}
    </JumbotronHeader>
  </JumbotronWrapperMob>
)
}
Jumbotron.propTypes = {
  showInMobile: PropTypes.bool,
  showInTablet: PropTypes.bool,
  showOnHomePage: PropTypes.bool
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
