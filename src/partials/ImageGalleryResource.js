import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import { getDocuments } from "../store/selector"
import styled from "styled-components"
import { Animated } from "react-animated-css"
import ImageResource from "./ImageResource"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons"

export const NavigatingButton = styled.div`
  color: ${props => (props.show ? "black" : "grey")};
  cursor: ${props => (props.show ? "pointer" : "inherit")};
  font-size: 2rem;
  /* display:inline-block; */
  /* text-align: center; */
  margin: auto;
  position: relative;
  z-index: 1000;
  width: 50%;
`

export const NavigationSpace = styled.div`
  position: relative;
`
export const NavigationButtons = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding: 1rem;
  visibility: hidden;
  ${NavigationSpace}:hover & {
    visibility:visible;
  }
`

export const AnimatedSpace = styled(Animated)`
  z-index: 100;
`

export const NavigationIcon = styled(FontAwesomeIcon)`
  width: 0.25rem;
  align-content: center;
  margin: auto;
  float: ${props => (props.floatRight ? "right" : "left")};
`

export const GalleryImage = styled.img``
class ImageGalleryResource extends React.Component {
  static propTypes = {
    ids: PropTypes.arrayOf(PropTypes.number),
  }

  constructor(props) {
    super(props)
  }
  state = {
    index: 0,
    animationIn: "slideInLeft",
    animationOut: "slideOutRight",
    isVisible: true,
    isTransitioning: false,
  }
  imageResources
  language
  previousImage = () => {
    if (this.state.index !== 0 && !this.state.isTransitioning) {
      this.setState({
        isVisible: false,
      })
      this.setState({
        index: this.state.index - 1,
        animationIn: "slideInRight",
        animationOut: "slideOutLeft",
        isTransitioning: true,
      })
    }
  }
  nextImage = () => {
    if (
      this.state.index + 1 < this.imageResources.length &&
      !this.state.isTransitioning
    ) {
      this.setState({
        isVisible: false,
      })

      this.setState({
        index: this.state.index + 1,
        animationIn: "slideInLeft",
        animationOut: "slideOutRight",
        isTransitioning: true,
      })
    }
  }
  isLastImage = () => {
    return this.imageResources.length === this.state.index + 1 ? true : false
  }
  setVisibleToTrue = () => {
    this.setState({ isVisible: true, isTransitioning: false })
  }
  isFirstImage = () => {
    if (this.state.index === 0) {
      return true
    }
    return false
  }

  changeImage = event => {
    console.log(event)
    console.log(1)
  }
  render() {
    this.language = getCurrentLanguageString(this.props.languages)
    this.imageResources = getDocuments(this.props.documents, this.props.ids)
    return (
      <>
        <NavigationSpace>
          <NavigationButtons>
            <NavigatingButton
              show={!this.isFirstImage()}
              onClick={() => this.previousImage()}
            >
              <NavigationIcon icon={faLongArrowAltLeft} />
            </NavigatingButton>
            <NavigatingButton
              show={!this.isLastImage()}
              onClick={() => this.nextImage()}
            >
              <NavigationIcon icon={faLongArrowAltRight} floatRight />
            </NavigatingButton>
          </NavigationButtons>

          <AnimatedSpace
            animationIn={this.state.animationIn}
            animationOut={this.state.animationOut}
            isVisible={this.state.isVisible}
            animateOnMount={false}
          >
            <ImageResource
              onClick={event => this.changeImage(event)}
              onLoad={() => this.setVisibleToTrue()}
              id={this.props.ids[this.state.index]}
              withCaption={false}
            />
          </AnimatedSpace>
        </NavigationSpace>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
  }
}
export default connect(
  mapStateToProps,
  null
)(ImageGalleryResource)
