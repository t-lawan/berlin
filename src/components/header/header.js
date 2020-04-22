import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import {
  HeaderWrapper,
  HeaderLink,
  HeaderImage,
  HeaderImageMob,
} from "./header.styles"
import {
  getCurrentLanguageString,
  createPath,
} from "../../utility/helper"
import { getDocument } from "../../store/selector"
import * as actionTypes from "../../store/action"

const Header = props => {
  const language = getCurrentLanguageString(props.languages)
  const experience = props.experience
  let exhibitions = props.exhibitions.filter(exhibition => {
    return parseInt(exhibition.experience) === experience
  })

  if (exhibitions.length === 0) {
    exhibitions = props.exhibitions
  }
  let dateHeaderSvg = getDocument(
    props.documents,
    exhibitions[0][language].exp_dates_header
  )
  let titleHeaderSvg = getDocument(
    props.documents,
    exhibitions[0][language].exp_title_header
  )
  let titleHeaderSvgMob = getDocument(
    props.documents,
    exhibitions[0][language].exp_title_header_mobile
  )

  const click = () => {
    props.startTransition();
    props.isViewing();
  }

  return (
    <HeaderWrapper
      showOnHomePage={props.showOnHomePage}
      hideInMobile={props.hideInMobile}
    >
      <HeaderLink
        // fade
        onClick={() => click()}
        to={createPath(language, "")}
      >
        {/* <HeaderLink
        cover
        direction="down"
        bg={transitionBackground}
        to={createPath(language, "")}
      > */}
        {dateHeaderSvg ? (
          <HeaderImage hideInMobile alt="date" src={dateHeaderSvg.url} />
        ) : null}
        {titleHeaderSvg ? (
          <HeaderImage hideInMobile alt="title" src={titleHeaderSvg.url} />
        ) : null}
        {titleHeaderSvgMob ? (
          <HeaderImageMob alt="title" src={titleHeaderSvgMob.url} />
        ) : null}
      </HeaderLink>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  hideInMobile: PropTypes.bool,
  showInMobile: PropTypes.bool,
  showOnHomePage: PropTypes.bool,
}

const mapStateToProps = state => {
  return {
    experience: state.experience,
    languages: state.languages,
    documents: state.documents,
    exhibitions: state.exhibitions,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    startTransition: () => dispatch({ type: actionTypes.START_TRANSITION }),
    isViewing: () => dispatch(actionTypes.isViewing()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
