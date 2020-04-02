import React from "react"
import PropTypes from "prop-types"
import { JumbotronWrapper, JumbotronHeader } from "./jumbotron.styles"
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
  return(
  <JumbotronWrapper showInTablet={props.showInTablet} showInMobile={props.showInMobile}>
    <JumbotronHeader 
      fade
      to={createPath(language, '')}>
    {/* <JumbotronHeader 
    bg={transitionBackground}
    cover direction="down"
    to={createPath(language, '')}> */}
      {image ? <img src={image.url} alt={image.slug}/> : null}
    </JumbotronHeader>
  </JumbotronWrapper>
)
}
Jumbotron.propTypes = {
  showInMobile: PropTypes.bool,
  showInTablet: PropTypes.bool,
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
