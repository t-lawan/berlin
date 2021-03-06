import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../../utility/helper"
import ImageResource from "../../partials/ImageResource"
import styled from "styled-components"
import {
  hideDisplayForMobile,
  size,
} from "../../index.styles"
import ImageGalleryResource from "../../partials/ImageGalleryResource"
import { CSSTransition } from "react-transition-group"
import * as actionTypes from "../../store/action"
let transitionName = "image-contain"

export const ImageGalleryWrapper = styled.div`
  display: ${props => (props.hideInTablet ? "inherit" : "none")};
  @media (max-width: ${size.tabletL}) {
    display: ${props => (props.hideInTablet ? "none" : "inherit")};
  }
`
const ImageContainerWrapper = styled.section`
  transition: max-height 1.5s ease;
  overflow: hidden;
  z-index: 0;

  @media (min-width: ${size.laptop}) {
    padding:${props => props.hasImage ? '0.2em 1em 0' : '0'};
  }
  @media (max-width: ${size.tabletL}) {
    padding:${props => props.hasImage ? '0.7em 0.7em 0' : '0'};

  }

  &.${transitionName}-enter {
    max-height: 0 !important;
  }

  &.${transitionName}-enter-active {
    max-height: 1000px !important;
  }

  &.${transitionName}-exit {
    max-height: 1000px !important;
  }

  &.${transitionName}-exit-active {
  }
  position: relative;
  ${hideDisplayForMobile};
  display: ${props => (props.hideOnHomePage ? "none" : "block")};
`

export const Animation = styled(CSSTransition)``

class ImageContainer extends React.Component {
  experience
  language
  exhibitions
  exhibition
  ref

  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.state = {
      experience_changed: false,
    }
  }

  componentDidMount() {
    this.experience = this.props.experience
    this.language = getCurrentLanguageString(this.props.languages)
  }

  componentDidUpdate(prevProps) {
    if (this.props.experience !== prevProps.experience) {
      this.setState({
        experience_changed: true,
      })
    }
  }

  setExperienceChangeToFalse = () => {
    this.setState({
      experience_changed: false,
    })
    if (this.props.isViewing) {
      this.props.setIsViewingToFalse()
    }
  }

  render() {
    this.exhibitions = this.props.exhibitions.filter((item) => {
      let exp = this.props.exhibitionExperience ? this.props.exhibitionExperience : this.props.experience.toString();
      return item.experience === exp
    })
    this.exhibition = this.exhibitions[0]
    return (
      <Animation
        in={this.props.isViewing || this.state.experience_changed}
        onEntered={() => this.setExperienceChangeToFalse()}
        mountOnEnter
        // unmountOnExit
        timeout={{
          enter: 1000,
          exit: 500,
        }}
        classNames={{
          enter: `${transitionName}-enter`,
          enterActive: `${transitionName}-active-enter`,
          exit: `${transitionName}-exit`,
          exitActive: `${transitionName}-active-exit`,
        }}
      >
        <ImageContainerWrapper
          hideOnHomePage={this.props.hideOnHomePage}
          hideInMobile={this.props.hideInMobile}
          hideInTablet={this.props.hideInTablet}
          hasImage={this.exhibition && (this.exhibition.has_gallery_images || this.exhibition.floor_plan)}
        >
          {this.exhibition && this.exhibition.has_gallery_images ? (
            <>
              <ImageGalleryWrapper hideInTablet={true}>
                <ImageGalleryResource
                  ids={
                    this.exhibition.has_gallery_images
                      ? this.exhibition.gallery_images
                      : []
                  }
                />
              </ImageGalleryWrapper>

              <ImageGalleryWrapper hideInTablet={false}>
                <ImageResource
                  id={
                    this.exhibition && this.exhibition.floor_plan
                      ? this.exhibition.gallery_images[0]
                      : 411
                  }
                  withCaption={true}
                />
              </ImageGalleryWrapper>
            </>
          ) : null}
          {this.exhibition && !this.exhibition.has_gallery_images && this.exhibition.floor_plan ? (
            <ImageResource
              id={
                this.exhibition && this.exhibition.floor_plan
                  ? this.exhibition.floor_plan
                  : 411
              }
              withCaption={true}
            />
          ) : null}
        </ImageContainerWrapper>
      </Animation>
    )
  }
}

ImageContainer.propTypes = {
  hideInMobile: PropTypes.bool,
  hideInTablet: PropTypes.bool,
  showInMobile: PropTypes.bool,
  hideOnHomePage: PropTypes.bool,
}

ImageContainer.defaultProps = {
  hideOnHomePage: false,
}

const mapDispatchToProps = dispatch => {
  return {
    setIsViewingToFalse: () =>
      dispatch({ type: actionTypes.SET_IS_VIEWING_TO_FALSE }),
  }
}
const mapStateToProps = state => {
  return {
    experience: state.experience,
    languages: state.languages,
    exhibitions: state.exhibitions,
    show_overlay: state.show_overlay,
    isViewing: state.isViewing,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer)
