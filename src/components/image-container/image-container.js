import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import ImageResource from "../../partials/ImageResource"
import styled from "styled-components"
import {
  hideDisplayForTablet,
  hideDisplayForMobile,
  size,
  increaseHeightKeyFrames,
  decreaseHeightKeyFrames,
} from "../../index.styles"
import ImageGalleryResource from "../../partials/ImageGalleryResource"
import { CSSTransition } from "react-transition-group"

let transitionName = "image-contain"

const ImageContainerWrapper = styled.section`
  /* max-height: 0; */
  transition: max-height 1.5s cubic-bezier(0, 1, 0, 1);
  overflow: hidden;
  z-index: 0;
  /* padding: 0 0.7em; */
  padding-top: 0.7em;
  /* transition: max-height 3s ease-in-out;
  transition-delay: 4s; */

  @media (min-width: ${size.laptop}) {
    padding: 0 1em;
  }
  @media (max-width: ${size.tablet}) {
    padding: 0.7em;
  }

  /* > img {
    margin: 0 0.7em;
    @media (min-width: ${size.laptop}) {
      margin: 0 1em;
    }
    @media (max-width: ${size.tablet}) {
      margin: 0.7em;
    }
  } */
  position: relative;
  ${hideDisplayForMobile};
  display: ${props => (props.hideOnHomePage ? "none" : "block")};
  /* animation-name: ${increaseHeightKeyFrames};
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-delay: 1.5s; */
`

export const Animation = styled(CSSTransition)`
  &.${transitionName}-enter {
    max-height: 0 !important;
  }

  &.${transitionName}-enter-active {
    animation-name: ${increaseHeightKeyFrames};
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-delay: 1.5s;
  }

  &.${transitionName}-exit {
    /* max-height: 1000px !important; */
  }

  &.${transitionName}-exit-active {
    animation-name: ${decreaseHeightKeyFrames};
    animation-duration: 3s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: 1.5s;
    
  }
`

class ImageContainer extends React.Component {
  experience
  language
  exhibitions
  exhibition
  ref

  constructor(props) {
    super(props)
    this.ref = React.createRef();
    this.state = {
      experience_changed: false
    }
  }

  componentDidMount() {
    this.experience = this.props.experience
    this.language = getCurrentLanguageString(this.props.languages)
  }

  componentDidUpdate(prevProps) {
    if(this.props.experience !== prevProps.experience) {
      this.setState({
        experience_changed: true
      })
      console.log('CHANGE');
    }
  }

  setExperienceChangeToFalse = () => {
    this.setState({
      experience_changed: false
    })

    console.log('HEY')
  }

  render() {
    this.exhibitions = this.props.exhibitions.filter((item, index) => {
      return item.experience === this.props.experience.toString()
    })
    this.exhibition = this.exhibitions[0]
    return (
      <Animation
        in={this.state.experience_changed}
        onExited={() => this.setExperienceChangeToFalse()}
        timeout={{
          appear: 100,
          enter: 3000,
          exit: 500,
        }}
        classNames={{
          enter: `${transitionName}-enter`,
          enterActive: `${transitionName}-active-enter`,
          exit: `${transitionName}-exit`,
          exitActive: `${transitionName}-active-exit`,
        }}
        mountOnEnter
        unmountOnExit
      >
        <ImageContainerWrapper
          hideOnHomePage={this.props.hideOnHomePage}
          hideInMobile={this.props.hideInMobile}
          hideInTablet={this.props.hideInTablet}
        >
          {this.exhibition && this.exhibition.has_gallery_images ? (
            <ImageGalleryResource
              ids={
                this.exhibition.has_gallery_images
                  ? this.exhibition.gallery_images
                  : []
              }
            />
          ) : null}
          {this.exhibition && !this.exhibition.has_gallery_images ? (
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

const mapStateToProps = state => {
  return {
    experience: state.experience,
    languages: state.languages,
    exhibitions: state.exhibitions,
    show_overlay: state.show_overlay,
  }
}

export default connect(mapStateToProps, null)(ImageContainer)
