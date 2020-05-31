import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import scrollIntoView from "scroll-into-view-if-needed"
import { TwoColumnPageWrapper } from "../../templates/page.styles"
import { getCurrentLanguageString } from "../../utility/helper"
import { Color } from "../../index.styles"
import striptags from "striptags"
import PublicationItem from "./publication-item";

const PublicationListWrapper = styled(TwoColumnPageWrapper)``



const PublicationAnchorLink = styled.p`
  color: ${props => (props.inView ? Color.red : "black")};
`

const PublicationAnchorLinkWrapper = styled.div`
  overflow-y: hidden;
`

class PublicationList extends Component {
  language

  scrollToAnchor = id => {
    const parent = document.getElementById(`column-one`)
    const element = document.getElementById(`pub-${id}`)
    if (element) {
      scrollIntoView(element, {
        scrollMode: "if-needed",
        block: "center",
        inline: "nearest",
        behavior: "smooth",
        boundary: parent,
        skipOverflowHiddenElements: true,
      })
    }
  }

  inView = id => {
    const element = document.getElementById(`pub-${id}`)
    if (!element) {
      return false
    }

    let rect = element.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;
    let isVisible = elemTop >= 0 && elemBottom <= window.innerHeight
    return isVisible;
  }
  render() {
    this.language = getCurrentLanguageString(this.props.languages)

    return (
      <PublicationListWrapper>
        <PublicationAnchorLinkWrapper>
          {this.props.publications.map((pub, i) => (
            <PublicationAnchorLink
              inView={this.inView(pub.slug)}
              key={i}
              onClick={() => this.scrollToAnchor(pub.slug)}
            >
              {" "}
              {striptags(pub[this.language].title)}
            </PublicationAnchorLink>
          ))}
        </PublicationAnchorLinkWrapper>
        <div>
          {this.props.publications.map((publication, index) => (
            <PublicationItem key={index} publication={publication}/>
          ))}
        </div>
      </PublicationListWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    publications: state.publications,
  }
}

export default connect(mapStateToProps, null)(PublicationList)
