import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import styled from "styled-components"
import { getDocument } from "../store/selector"
import Img from "gatsby-image"

export const GalleryImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 0;
  transition: opacity 500ms ease 0s;
`

export const Caption = styled.section`
  font-size: 0.6rem;
`

class ImageResource extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    withCaption: PropTypes.bool.isRequired,
    onLoad: PropTypes.func,
  }
  language

  constructor(props) {
    super(props);
    this.state = {
      image: null
    }
  }


  componentWillMount() {
    this.setState({
      image: getDocument(this.props.documents, this.props.id)
    });
    // this.image = getDocument(this.props.documents, this.props.id)
  }

  componentDidUpdate(prevProps) {
    if(this.props.id !== prevProps.id) {
      this.setState({
        image: getDocument(this.props.documents, this.props.id)
      });
    }

    // this.image = getDocument(this.props.documents, this.props.id)
  }

  render() {
    this.language = getCurrentLanguageString(this.props.languages);
    console.log(this.state.image, this.props.id)

    return (
      <>
        <Img fadeIn={true} onLoad={this.props.onLoad} fluid={this.state.image ? this.state.image.fluid: null} /> 
        <Caption
          hidden={!this.props.withCaption}
          dangerouslySetInnerHTML={{
            __html: this.state.image ? this.state.image[this.language].caption : '',
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
export default connect(
  mapStateToProps,
  null
)(ImageResource)
