import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { size } from "../../index.styles"
import { getDocument } from "../../store/selector"
import { getCurrentLanguageString } from "../../utility/helper";

const ExhibitionPageWrapper = styled.div`
  z-index: 6000;
  left: 0%;
  padding: 0.7em 1em;
  width: calc(100% - 0%);
  height: 100vh;
  position: absolute;
  background: #fbf95d;
  display: ${props => (props.show ? "inherit" : "none")};
  @media (max-width: ${size.mobileM}) {
    width: 100%;
    left: 0;
    padding: 1em 0.7em;
    bottom: 45px;
    height: calc(100vh - 87px);
    top: 40px;
  }
  @media (min-width: ${size.mobileL}) {
    padding: 0.7em 0.7em;
    z-index: 6000;
    top:40px;
    left:0;
    width:100%;
    bottom:0;
    height: calc(100vh - 40px);
  }
  @media (min-width: ${size.laptop}) {
    padding: 0.7em 1em;
    width: calc(100% - 10%);
    height: 100vh;
    left: 5%;
    top:0;
  }
`

const ExhibitionPageImage = styled.img`
  width: 30%;
  @media (max-width: ${size.mobileM}) {
    width:100%;
  }
  @media (max-width: ${size.tablet}) {
    width:50%;
  }
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
