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
`

const ImageContainer = props => {
  const experience = props.experience
  const language = getCurrentLanguageString(props.languages)
  return (
    <ImageContainerWrapper>
      <ImageResource id={411} withCaption={true} />

    </ImageContainerWrapper>
  )
}

ImageContainer.propTypes = {
  hideInMobile: PropTypes.bool,
  showInMobile: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    experience: state.experience,
    languages: state.languages,
  }
}

export default connect(
  mapStateToProps,
  null
)(ImageContainer)
