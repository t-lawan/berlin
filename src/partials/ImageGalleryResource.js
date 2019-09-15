import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import { getDocuments } from "../store/selector"
import styled from "styled-components"
import { Animated } from "react-animated-css"
import ImageResource from "./ImageResource";

export const NavigatingButton = styled.span`
  color: ${props => (props.show ? "black" : "grey")};
  cursor: ${props => (props.show ? "pointer" : "inherit")};
  font-size: 1.5em;
`

export const NavigationSpace = styled.div`
  position: absolute;
  width: 50%;
  /* background: red; */
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
    isTransitioning: false
  }
  imageResources
  language
  time = 1250

  nextImage = () => {
    if (this.state.index + 1 < this.imageResources.length && !this.state.isTransitioning) {

      this.setState({
        isVisible: false,
      })

      this.setState({
        index: this.state.index + 1,
        animationIn: "slideInLeft",
        animationOut: "slideOutRight",
        isTransitioning: true
      })
    }
  }

  previousImage = () => {
    if (this.state.index !== 0 && !this.state.isTransitioning) {
      this.setState({
        isVisible: false,
      })
      this.setState({
        index: this.state.index - 1,
        animationIn: "slideInRight",
        animationOut: "slideOutLeft",
        isTransitioning: true
      })
    }
  }

  isLastImage = () => {
    return this.imageResources.length === this.state.index + 1 ? true : false
  }
  setVisibleToTrue = () => {
    setTimeout(() => {
      this.setState({ isVisible: true, isTransitioning: false })
    }, 1000)
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
        <div>
          <NavigatingButton
            show={!this.isFirstImage()}
            onClick={() => this.previousImage()}
          >
            &lt;
          </NavigatingButton>
          <NavigatingButton
            show={!this.isLastImage()}
            onClick={() => this.nextImage()}
          >
            &gt;
          </NavigatingButton>
        </div>
        <Animated
          animationIn={this.state.animationIn}
          animationOut={this.state.animationOut}
          isVisible={this.state.isVisible}
          animateOnMount={false}
        >
          <NavigationSpace></NavigationSpace>
          <ImageResource
            onLoad={() => this.setVisibleToTrue()}
            id={this.props.ids[this.state.index]}
            withCaption={false}
          />
        </Animated>
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
