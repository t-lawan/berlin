import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Columns from "../columns/columns"
import { GlobalStyle } from "../../index.styles"
import State from "../state/state"
import Modal from "../modal/modal";
import { connect } from "react-redux"

const LayoutWrapper = styled.div`
  width: 100vw;
  width: 100%;
`

const Layout = props => {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <State />
      <Modal show={props.modal.show} />
      <Columns
        firstColumn={props.firstColumn}
        secondColumn={props.secondColumn}
        thirdColumn={props.thirdColumn}
        numberOfColumnsIsTwo={props.numberOfColumnsIsTwo}
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
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  }
}

export default connect(
  mapStateToProps,
  null
)(Layout)

