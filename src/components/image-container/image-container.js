import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"

import { getCurrentLanguageString, createPath } from "../../utility/helper"
import ImageResource from "../../partials/ImageResource";
import styled from "styled-components"
import { hideDisplayForTablet, hideDisplayForMobile } from "../../index.styles";
import ImageGalleryResource from "../../partials/ImageGalleryResource";

const ImageContainerWrapper = styled.section`
  padding: 1em;
  ${hideDisplayForMobile};
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
      {exhibition.has_gallery_images ? <ImageGalleryResource ids={exhibition.has_gallery_images ? exhibition.gallery_images : []}  /> : null}
      {!exhibition.has_gallery_images ? <ImageResource id={exhibition && exhibition.floor_plan ? exhibition.floor_plan : 411} withCaption={true} /> : null} 
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
