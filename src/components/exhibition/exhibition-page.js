import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { size } from "../../index.styles"

const ExhibitionPageWrapper = styled.div`
  z-index: 6000;
  left: 5%;
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
    top:45px;
  }
`
class ExhibitionPage extends React.Component {
  render() {
    let exhibition = this.props.exhibitions.find((ex) => {
        return ex.experience == this.props.experience;
    })
    return (
      <ExhibitionPageWrapper show={exhibition.temporary_uploaded}>
        <p> eh exhibition no work (spanish accent)</p>
      </ExhibitionPageWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    experience: state.experience,
    exhibitions: state.exhibitions,
  }
}

export default connect(
  mapStateToProps,
  null
)(ExhibitionPage)
