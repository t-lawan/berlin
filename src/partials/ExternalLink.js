import React, { Component } from "react"
import PropTypes from "prop-types"
import { getDocument } from "../store/selector"
import { connect } from "react-redux"
import styled from "styled-components"

const Link = styled.a`
    color: black;
    text-decoration: none;
`
class ExternalLink extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    children: PropTypes.node,
  }
  doc;

  render() {
    this.doc = getDocument(this.props.documents, this.props.id)
    return (
      <Link target="_blank" rel="noopener noreferrer" href={this.doc.url}>
        {this.props.children}
      </Link>
    )
  }
}

const mapStateToProps = state => {
  return {
    documents: state.documents,
  }
}

export default connect(
  mapStateToProps,
  null
)(ExternalLink)
