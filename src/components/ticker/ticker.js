import React from "react"
import { TickerWrapper } from "./ticker.styles"
import { connect } from "react-redux"
import {
  getCurrentLanguageString
} from "../../utility/helper"
import { getDocument } from "../../store/selector"

const Ticker = props => {
  let experience = props.experience
  let language = getCurrentLanguageString(props.languages);
  let exhibition = props.exhibitions.filter(ex => {
    return ex.experience == experience
  })[0];
  let image = getDocument(props.documents, exhibition.animation);

  return (
    <TickerWrapper show={exhibition[language].promotional_sticker_for_homepage}>
      {exhibition[language].promotional_sticker_for_homepage ? (<p> {exhibition[language].promotional_sticker_for_homepage}</p>) : null }
    </TickerWrapper>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
    exhibitions: state.exhibitions,
    documents: state.documents,
  }
}

export default connect(
  mapStateToProps,
  null
)(Ticker)
