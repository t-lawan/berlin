import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import scrollIntoView from "scroll-into-view-if-needed"
import { TwoColumnPageWrapper } from "../../templates/page.styles";
import VenueItem from "./venue-item";
// import striptags from "striptags"

const VenueListWrapper = styled(TwoColumnPageWrapper)``
const VenuesAnchorLinkWrapper = styled.div`
  overflow-y: hidden;
`
const VenueAnchorLink = styled.p`
  color: ${props => (props.inView ? "red" : "black")};
`

class VenueList extends Component {
  language;
  
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
    const element = document.getElementById(`ven-${id}`)
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
      console.log('VENUE', this.props.venues)
    return (
        <VenueListWrapper>
            <VenuesAnchorLinkWrapper>
                {this.props.venues.map((ven, i) => (
                    <VenueAnchorLink
                        inView={this.inView(ven.slug)}
                        key={i}
                        onClick={() => this.scrollToAnchor(ven.slug)}
                    >
                        Hello
                    </VenueAnchorLink>
                ))}
            </VenuesAnchorLinkWrapper>
            <div>
            {this.props.venues.map((ven, i) => (
                <VenueItem key={i} venue={ven}/>
            ))}
            </div>
        </VenueListWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    venues: state.venues
  }
}

export default connect(mapStateToProps, null)(VenueList)
