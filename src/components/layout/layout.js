import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Columns from "../columns/columns"
import { GlobalStyle } from "../../index.styles"
import State from "../state/state"
import Modal from "../modal/modal"
import { connect } from "react-redux"
import PageLoader from "../page-loader/page-loader";
const LayoutWrapper = styled.div`
  width: 100vw;
  width: 100%;
`

const Layout = props => {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <State />
      <PageLoader isHome={props.isHome} />
      <Modal show={props.modal.show} />
      {/* <ExhibitionPage /> */}
      <Columns
        firstColumn={props.firstColumn}
        secondColumn={props.secondColumn}
        thirdColumn={props.thirdColumn}
        numberOfColumnsIsTwo={props.numberOfColumnsIsTwo}
        isHome={props.isHome}
        exhibitionExperience={props.experience}
      />
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  firstColumn: PropTypes.node.isRequired,
  secondColumn: PropTypes.node,
  thirdColumn: PropTypes.node.isRequired,
  numberOfColumnsIsTwo: PropTypes.bool.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  isHome: PropTypes.bool,
}

Layout.defaultProps = {
  isHome: false,
}

const mapStateToProps = state => {
  return {
    modal: state.modal,
    agreed_to_terms: state.agreed_to_terms,
  }
}

export default connect(
  mapStateToProps,
  null
)(Layout)
