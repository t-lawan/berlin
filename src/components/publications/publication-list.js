import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import scrollIntoView from "scroll-into-view-if-needed"
import { TwoColumnPageWrapper } from "../../templates/page.styles"
import { getCurrentLanguageString } from "../../utility/helper"
import { Color, size } from "../../index.styles"
import striptags from "striptags"
import PublicationItem from "./publication-item"

const PublicationListWrapper = styled(TwoColumnPageWrapper)`
  height: 100%;
  padding-top: 0 !important;
`

const AnchorDiv = styled.div`
  position: fixed;
  overflow-y: scroll;
  @media (max-width: ${size.tabletL}) {
    position: relative;
    margin-bottom: 1rem;
  }
`

const PublicationAnchorLink = styled.div`
  /* color: ${props => (props.inView ? Color.red : "black")}; */
  p {
    width: 30%;
    line-height: 1.3;
  } 
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    color: ${Color.red};
  }
  @media (max-width: ${size.tabletL}) {
    p {
    width: 100%;
    } 
  }

  @media (min-width: ${size.laptop}) and (max-width: ${size.laptop}) {
    p {
    width: 25%;
    } 
  }
`

const PublicationAnchorLinkWrapper = styled.div`
  overflow-y: hidden;
  position: relative;
  @media (max-width: ${size.tabletL}) {
    position: relative;
    margin-bottom: 1rem;
  }
  display: none;
  @media (min-width: ${size.tabletL}) {
    display: block;
  }
`

const PublicationContentWrapper = styled.div`
  overflow-y: scroll;
  height: 100%;
`

class PublicationList extends Component {
  language

  constructor(props) {
    super(props)
    this.state = {
      isScrolling: false,
    }
  }

  scrollToAnchor = id => {
    if (typeof window !== "undefined") {
      const parent = document.getElementById(`column-one`)
      const element = document.getElementById(`pub-${id}`)
      if (element) {
        // this.setState({
        //   isScrolling: true,
        // })
        scrollIntoView(element, {
          // scrollMode: "if-needed",
          block: "start",
          inline: "nearest",
          behavior: "smooth",
          boundary: parent,
          skipOverflowHiddenElements: true,
        })

        this.setState({
          isScrolling: false,
        })
      }
    }
  }

  inView = id => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(`pub-${id}`)
      if (!element) {
        return false
      }

      let rect = element.getBoundingClientRect()
      let elemTop = rect.top
      let elemBottom = rect.bottom

      let isVisible = elemTop >= 0 && elemBottom <= window.innerHeight
      return isVisible
    }
    return false
  }
  render() {
    this.language = getCurrentLanguageString(this.props.languages)
    return (
      <PublicationListWrapper>
        <PublicationAnchorLinkWrapper>
          <AnchorDiv>
            {this.props.publications.map((pub, i) => (
              <PublicationAnchorLink
                inView={this.inView(pub.slug)}
                key={i}
                onClick={() => this.scrollToAnchor(pub.slug)}
                dangerouslySetInnerHTML={{
                  __html: striptags(pub[this.language].title, ['p', 'em']),
                }}
              />
            ))}
          </AnchorDiv>
        </PublicationAnchorLinkWrapper>
        <PublicationContentWrapper>
          {this.props.publications.map((publication, index) => (
            <PublicationItem key={index} publication={publication} />
          ))}
        </PublicationContentWrapper>
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
