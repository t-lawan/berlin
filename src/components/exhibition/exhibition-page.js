import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { size } from "../../index.styles"
import { getDocument } from "../../store/selector"
import { getCurrentLanguageString } from "../../utility/helper";

const ExhibitionPageWrapper = styled.div`
  z-index: 6000;
  left: 5%;
  padding: 1rem;
  width: calc(100% - 10%);
  height: 100vh;
  position: fixed;
  background: #fbf95d;
  display: ${props => (props.show ? "inherit" : "none")};
  @media (max-width: ${size.tablet}) {
    width: 100%;
    left: 0;
    bottom: 45px;
    height: calc(100vh - 91px);
    top: 45px;
  }
`

const ExhibitionPageImage = styled.img`
  width: 30%;
`
class ExhibitionPage extends React.Component {
  language;
  image;
  render() {
    let exhibition = this.props.exhibitions.find(ex => {
      return ex.experience == this.props.experience
    })

    this.language = getCurrentLanguageString(this.props.languages);

    this.image = getDocument(this.props.documents, exhibition[this.language].temp_exp_graphic)

    return (
      <ExhibitionPageWrapper show={exhibition.temporary_uploaded}>
        {this.image ? <ExhibitionPageImage src={this.image.url} /> : null}
      </ExhibitionPageWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    experience: state.experience,
    exhibitions: state.exhibitions,
    documents: state.documents,
    languages: state.languages
  }
}

export default connect(
  mapStateToProps,
  null
)(ExhibitionPage)
