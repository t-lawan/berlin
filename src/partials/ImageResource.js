import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import styled from "styled-components"
import { size } from "../index.styles"
import { getDocument } from "../store/selector"
import Img from "gatsby-image"

export const GalleryImage = styled(Img)`
  picture img {
    object-fit: contain;
  }
`
export const Image = styled(Img)`
  max-height: 650px;
  > picture > img {
    object-fit: contain !important;
    max-height: 650px !important;
    display: block;
    margin: 0 auto;
  }
`

export const Caption = styled.section`
  font-size: 0.65rem;
  p {
    font-size: 0.65rem;
    margin: 0.7em 0;
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

  componentWillMount() {
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

    return (
      <>
        <Image fadeIn={true} onLoad={this.props.onLoad} fluid={this.state.image ? this.state.image.fluid: null} /> 
        <Caption
          hidden={!this.props.withCaption}
          dangerouslySetInnerHTML={{
            __html: this.state.image
              ? this.state.image[this.language].caption
              : "",
          }}
        />
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
