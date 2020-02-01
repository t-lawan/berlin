import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import { getDocuments } from "../store/selector"
import styled from "styled-components"
import { Animated } from "react-animated-css"
import ImageResource from "./ImageResource"

const leftArrow =
  "https://11.berlinbiennale.de/wp-content/themes/bb11-exp3/images/img_gallery_prev.png"
const rightArrow =
  "https://11.berlinbiennale.de/wp-content/themes/bb11-exp3/images/img_gallery_next.png"
export const NavigatingButton = styled.div`
  opacity: ${props => (props.show ? "1" : "0.2")};
  color: black;
  font-size: 2rem;
  margin: auto;
  position: relative;
  z-index: 1000;
  width: 50%;
  height: 100%;
  :hover {
    cursor: url(${props => (props.left ? (props.show ? leftArrow : 'none') : (props.show ? rightArrow : 'none'))}) 0 0, none;
  }
`

export const NavigationSpace = styled.div`
  position: relative;
  height: 100%;
`
export const NavigationButtons = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 1rem;
  transition: all 0.5s ease-in-out;
  visibility: hidden;
  ${NavigationSpace}:hover & {
    visibility: visible;
  }
`

export const AnimatedSpace = styled(Animated)`
  z-index: 100;
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
  render() {
    this.language = getCurrentLanguageString(this.props.languages)
    this.imageResources = getDocuments(this.props.documents, this.props.ids)
    return (
      <>
        <NavigationSpace>
          <NavigationButtons>
            <NavigatingButton
              left={true}
              show={!this.isFirstImage()}
              onClick={() => this.previousImage()}
            />
            <NavigatingButton
              left={false}
              show={!this.isLastImage()}
              onClick={() => this.nextImage()}
            />
          </NavigationButtons>

          <AnimatedSpace
            animationIn={this.state.animationIn}
            animationOut={this.state.animationOut}
            isVisible={this.state.isVisible}
            animateOnMount={false}
          >
            <ImageResource
              onLoad={() => this.setVisibleToTrue()}
              id={this.props.ids[this.state.index]}
              withCaption={true}
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
