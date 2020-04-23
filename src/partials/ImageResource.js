import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import styled from "styled-components"
import { size } from "../index.styles"
import { getDocument } from "../store/selector"
import Img from "gatsby-image"
import striptags from "striptags"
export const GalleryImage = styled(Img)`
  picture img {
    object-fit: contain;
  }
`
export const Image = styled(Img)`
  max-height: ${props => (props.isGallery ? "650px !important" : "")};
  /* padding-bottom: 5rem !important; */
  > picture > img {
    object-fit: ${props =>
      props.isLandscape ? "cover !important" : "contain !important"};
    max-height: ${props => (props.isGallery ? "650px !important" : "")};
    display: block;
    margin: 0 auto;
    /* width: auto !important; */
    position: relative;
    padding-bottom: ${props =>
      props.withCaption ? (props.isGallery ? "4rem !important" : "0") : "0"};
  }

  > img {
    padding-bottom: ${props =>
      props.withCaption ? (props.isGallery ? "4rem !important" : "0") : "0"};
    /* position: relative !important; */
  }
`

export const Caption = styled.section`
  font-size: 0.65rem;
  text-align: left;
  /* margin-top: -4rem; */

  margin-top: ${props => (props.isGallery ? "-4rem" : "0")};
  p {
    font-size: 0.65rem;
    max-width: 100%;
    margin: 0.7em 0;
    @media (min-width: ${size.mobileL}) {
      font-size: 0.55rem;
    }
    @media (min-width: ${size.tablet}) {
      font-size: 0.65rem;
    }
    @media (min-width: ${size.laptopL}) {
      font-size: 0.72rem;
      margin: 0.9em 0;
    }
  }
  @media (min-width: ${size.laptop}) {
    margin-bottom: 2em;
  }
  @media (min-width: ${size.laptopL}) {
    margin-bottom: 3em;
  }
`

class ImageResource extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    withCaption: PropTypes.bool.isRequired,
    onLoad: PropTypes.func,
  }
  language

  constructor(props) {
    super(props)
    this.state = {
      image: null,
    }
  }

  componentDidMount() {
    this.setState({
      image: getDocument(this.props.documents, this.props.id),
    })
    // this.image = getDocument(this.props.documents, this.props.id)
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.setState({
        image: getDocument(this.props.documents, this.props.id),
      })
    }

    // this.image = getDocument(this.props.documents, this.props.id)
  }

  render() {
    this.language = getCurrentLanguageString(this.props.languages)
    let isLandscape = true
    if (this.state.image) {
      isLandscape = this.state.image.fluid.aspectRatio < 1 ? false : true
    }

    return (
      <>
        {this.state.image ? (
          <>
            <Image
              isLandscape={isLandscape}
              alt={
                this.state.image && this.state.image.EN.caption
                  ? striptags(this.state.image[this.language].caption)
                  : ""
              }
              isGallery={this.props.isGallery}
              withCaption={this.props.withCaption}
              fadeIn={true}
              onLoad={this.props.onLoad}
              fluid={this.state.image.fluid}
            />
            <Caption
              hidden={!this.props.withCaption}
              isGallery={this.props.isGallery}
              dangerouslySetInnerHTML={{
                __html: this.state.image
                  ? this.state.image[this.language].caption
                  : "",
              }}
            />{" "}
          </>
        ) : null}
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
export default connect(mapStateToProps, null)(ImageResource)
