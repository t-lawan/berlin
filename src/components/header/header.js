import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import {
  HeaderWrapper,
  HeaderLink,
  HeaderImage,
} from "./header.styles"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import { getDocument } from "../../store/selector";

const Header = props => {
  const language = getCurrentLanguageString(props.languages)
  const experience = props.experience;
  let exhibitions = props.exhibitions.filter(exhibition => {
    return parseInt(exhibition.experience) === experience;
  });

  if(exhibitions.length === 0){
    exhibitions = props.exhibitions;
  }
  let dateHeaderSvg = getDocument(props.documents, exhibitions[0][language].exp_dates_header);
  let titleHeaderSvg = getDocument(props.documents, exhibitions[0][language].exp_title_header);
  let titleHeaderSvgMob = getDocument(props.documents, exhibitions[0][language].exp_title_header_mobile);


  return (
    <HeaderWrapper>
        <HeaderLink cover direction="down" bg="url(https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/waitaminute1.gif) center no-repeat fixed white" to={createPath(language, '')}>
        <HeaderImage hideInMobile alt="date" src={dateHeaderSvg.url}/>
        <HeaderImage hideInMobile alt="title" src={titleHeaderSvg.url}/>
        <HeaderImage showInMobile alt="title" src={titleHeaderSvgMob.url}/>
      </HeaderLink>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  hideInMobile: PropTypes.bool,
  showInMobile: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    experience: state.experience,
    languages: state.languages,
    documents: state.documents,
    exhibitions: state.exhibitions
  }
}

export default connect(
  mapStateToProps,
  null
)(Header)
