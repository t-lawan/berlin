import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import { Caption } from "./ImageResource"
import { getDocuments } from "../store/selector"
import styled from "styled-components"
import { Animated } from "react-animated-css"
import ImageResource from "./ImageResource"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

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
  > ${Caption} {
    margin-bottom: 0.7em;
  }
`

export const AnimatedCarousel = styled(Carousel)`
  z-index: 100;
  > ${Caption} {
    margin-bottom: 0.7em;
  }
  .carousel .slide {
    background: transparent;
    list-style-type: none;
  }
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
  }
  imageResources
  language
  previousImage = () => {
    if (this.state.index !== 0) {
      this.setState({
        isVisible: false,
      })
      this.setState({
        index: this.state.index - 1,
      })
    }
  }
  nextImage = () => {
    if (
      this.state.index + 1 < this.props.ids.length 
    ) {
      this.setState({
        isVisible: false,
      })

      this.setState({
        index: this.state.index + 1,
      })
    }
  }
  isLastImage = () => {
    return this.props.ids.length === this.state.index + 1 ? true : false
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

          <AnimatedCarousel
            selectedItem={this.state.index}
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            centerMode={false}
            swipeable={true}
            dynamicHeight={true}
          >
            {this.props.ids.map((id, index) => (
              <div key={index}>
                <ImageResource
                  onLoad={() => this.setVisibleToTrue()}
                  id={id}
                  withCaption={true}
                />
              </div>
            ))}
          </AnimatedCarousel>
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
export default connect(mapStateToProps, null)(ImageGalleryResource)
