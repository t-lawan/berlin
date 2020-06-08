import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import scrollIntoView from "scroll-into-view-if-needed"
import { TwoColumnPageWrapper } from "../../templates/page.styles"
import VenueItem from "./venue-item"
import { getCurrentLanguageString } from "../../utility/helper"
import { size, Color } from "../../index.styles"
// import striptags from "striptags"

const VenueListWrapper = styled(TwoColumnPageWrapper)`
padding-top: 0 !important;
position: relative;

`
const VenuesAnchorLinkWrapper = styled.div`
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
const VenueAnchorLink = styled.p`
  /* color: ${props => (props.inView ? Color.red : "black")}; */
  width: 75%;
  transition: all 0.2s ease-in-out;
  :hover {
    color: ${Color.red};
    cursor: pointer;
  }
  @media (max-width: ${size.tabletL}) {
    width: 100%;
  }
`

const AnchorDiv = styled.div`
  position: fixed;
  overflow-y: scroll;
  @media (max-width: ${size.tabletL}) {
    position: relative;
  }
`

class VenueList extends Component {
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
      const element = document.getElementById(`ven-${id}`)
      if (element) {
        this.setState({
          isScrolling: true,
        })
        scrollIntoView(element, {
          scrollMode: "if-needed",
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
      const element = document.getElementById(`ven-${id}`)
      if (!element) {
        return false
      }
      const parent = document.getElementById(`column-one`)
      let parentRect = parent.getBoundingClientRect()
      let rect = element.getBoundingClientRect()
      let elemTop = rect.top
      let elemBottom = rect.bottom
      let isVisible = elemTop >= 0 && elemBottom <= window.innerHeight
      return isVisible
    } 
    return false;
  }

  render() {
    this.language = getCurrentLanguageString(this.props.languages)
    return (
      <VenueListWrapper>
        <VenuesAnchorLinkWrapper>
          <AnchorDiv>
            {this.props.venues.map((ven, i) => (
              <VenueAnchorLink
                inView={this.inView(ven.slug)}
                key={i}
                onClick={() => this.scrollToAnchor(ven.slug)}
              >
                {ven[this.language].venue_name}
              </VenueAnchorLink>
            ))}
          </AnchorDiv>
        </VenuesAnchorLinkWrapper>
        <div>
          {this.props.venues.map((ven, i) => (
            <VenueItem key={i} venue={ven} />
          ))}
        </div>
      </VenueListWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    venues: state.venues,
  }
}

export default connect(mapStateToProps, null)(VenueList)