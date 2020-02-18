import React from "react"
import { TickerWrapper } from "./ticker.styles"
import { connect } from "react-redux"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import { getDocument } from "../../store/selector"
import { Link } from "gatsby";

const Ticker = props => {
  let experience = props.experience
  let language = getCurrentLanguageString(props.languages)
  let exhibition = props.exhibitions.filter(ex => {
    return ex.experience == experience
  })[0]
  let image = getDocument(props.documents, exhibition[language].promotional_sticker_for_homepage)
  return (
    <TickerWrapper
      show={exhibition[language].promotional_sticker_for_homepage.length > 0}
    >
      {exhibition[language].promotional_sticker_for_homepage ? 
          createComp(
            exhibition,
            (<div>
              <span>
                <img className="tickergraf" src={image.url} />
              </span>
            </div>),
            exhibition[language].external_link_url,
            language
          )
      : null}
    </TickerWrapper>
  )
}

const createComp = (exhibition, comp, external_link = true, lang) => {
  if (external_link) {
    return (
      <a href={exhibition[lang].promotional_sticker_url} target="__blank">
        {comp}
      </a>
    )
  } else {
    return <Link to={createPath(lang, '/')}>{comp}</Link>
  }
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
