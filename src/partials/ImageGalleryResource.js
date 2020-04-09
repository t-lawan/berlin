import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import { Caption } from "./ImageResource"
import { Color, size } from "../index.styles"
import styled from "styled-components"
import { Animated } from "react-animated-css"
import ImageResource from "./ImageResource"
import "../assets/carousel.css"
import { Carousel } from "react-responsive-carousel"

const leftArrow =
  "https://admin11.berlinbiennale.de/wp-content/themes/bb11-exp3/images/img_gallery_prev.png"
const rightArrow =
  "https://admin11.berlinbiennale.de/wp-content/themes/bb11-exp3/images/img_gallery_next.png"
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


const ImageGalleryWrapper = styled.div`
`
const ImageWrapper = styled.div`
  height: 100%;
  margin: 0rem auto 0.5rem;
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
  padding: 1rem 1rem 0 1rem;
  transition: all 0.5s ease-in-out;
  visibility: hidden;
  ${NavigationSpace}:hover & {
    visibility: visible;
  }
`

export const AnimatedSpace = styled(Animated)`
  z-index: 100;
  /* > ${Caption} {
    margin-bottom: 0.7em;
  } */
`

export const AnimatedCarousel = styled(Carousel)`
  z-index: 100;
  > ${Caption} {
    margin-bottom: 0.7em !important;
    color: black !important;
  }
  .carousel .slide {
    background: transparent;
    list-style-type: none;
  }
  @media (min-width: ${size.laptop}) {
    margin-bottom: -0.5em;
  }
  @media (min-width: ${size.laptopM}) {
    margin-bottom: -0.7em;
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
      <ImageGalleryWrapper>
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
              <ImageWrapper key={index}>
                <ImageResource
                  onLoad={() => this.setVisibleToTrue()}
                  id={id}
                  isGallery={true}
                  withCaption={true}
                />
              </ImageWrapper>
            ))}
          </AnimatedCarousel>
        </NavigationSpace>
      </ImageGalleryWrapper>
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
