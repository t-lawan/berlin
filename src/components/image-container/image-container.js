import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"

import { getCurrentLanguageString, createPath } from "../../utility/helper"
import ImageResource from "../../partials/ImageResource";
import styled from "styled-components"
import { hideDisplayForTablet } from "../../index.styles";

const ImageContainerWrapper = styled.section`
  padding: 1em;
  ${hideDisplayForTablet};
  display: ${props => props.hideOnHomePage ? 'none': 'inherit'};
`

const ImageContainer = props => {
  const experience = props.experience
  const language = getCurrentLanguageString(props.languages)
  const exhibitions = props.exhibitions.filter((item, index)=> {
    return item.experience === experience.toString();
  });
  const exhibition = exhibitions[0];
  return (
    <ImageContainerWrapper hideOnHomePage={props.hideOnHomePage} hideInMobile={props.hideInMobile} hideInTablet={props.hideInTablet}>
      <ImageResource id={exhibition ? exhibition.floor_plan : 411} withCaption={true} />
    </ImageContainerWrapper>
  )
}

ImageContainer.propTypes = {
  hideInMobile: PropTypes.bool,
  hideInTablet: PropTypes.bool,
  showInMobile: PropTypes.bool,
  hideOnHomePage: PropTypes.bool
}

ImageContainer.defaultProps = {
  hideOnHomePage: false
};

const mapStateToProps = state => {
  return {
    experience: state.experience,
    languages: state.languages,
    exhibitions: state.exhibitions
  }
}

export default connect(
  mapStateToProps,
  null
)(ImageContainer)
