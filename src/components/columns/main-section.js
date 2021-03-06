import React from "react"
import PropTypes from "prop-types"
import Header from "../header/header"
import Column from "./column"
import Navbar from "../navbar/navbar"
import Jumbotron from "../jumbotron/jumbotron"
import Ticker from "../ticker/ticker"
import JumbotronMob from "../jumbotron/jumbotronmob"
import {
  FirstColumnWrapper,
  StickyHeader,
  StickyFooter,
  FixedFooter,
  StickyTopHeader,
  RelativeHeader,
  StickyFooterWithHighZIndex,
  MobTitleCard,
  MobAnimCard,
  FixedTicker,
  ResourcesOnlyInMobile,
  FixedTickerOnlyInMobile,
  ExperienceContainer,
  ScrollNavContainer,
} from "./columns.styles"
import SocialMedia from "../socialmedia/socialmedia"
import DataPrivacy from "../data-privacy/data-privacy"
import FooterComponent from "../footer/footer"
import ImageContainer from "../image-container/image-container"
import { getDocument } from "../../store/selector"
import ResourcesList from "../resources/resources-list"
import ExhibitionPage from "../exhibition/exhibition-page"
import { connect } from "react-redux"
import TransitionPage from "../transition/transition-page"

class MainSection extends React.Component {
  renderedComponents
  numberOfColumnsIsTwo = this.props.numberOfColumnsIsTwo
  footerRef
  columnOneRef
  columnTwoRef
  constructor(props) {
    super(props)
    this.footerRef = React.createRef()
    this.columnOneRef = React.createRef()
    this.columnTwoRef = React.createRef()
  }

  scroll = () => {
    let columnOne = this.columnOneRef.current.columnRef.current
    let columnTwo = this.columnTwoRef.current.columnRef.current
    let footer = this.footerRef.current

    if (!columnOne || !columnTwo) {
      return false
    } else {
      let columnOnePercent =
        (columnOne.scrollTop + columnOne.clientHeight) / columnOne.scrollHeight
      let columnTwoPercent =
        (columnTwo.scrollTop + columnTwo.clientHeight) / columnTwo.scrollHeight

      if (
        (columnOnePercent > 0.95 && columnOne.scrollTop !== 0) ||
        (columnTwoPercent > 0.99 && columnTwo.scrollTop !== 0)
      ) {
        footer.classList.remove("hide-footer")
        footer.classList.add("show-footer")
      } else {
        footer.classList.remove("show-footer")
        footer.classList.add("hide-footer")
      }
    }
  }

  render() {
    if (this.numberOfColumnsIsTwo) {
      this.renderedComponents = (
        <FirstColumnWrapper twoColumns>
          <TransitionPage />
          <Column hideInMobile rightBorder={true}>
            {this.props.firstColumn}{" "}
          </Column>
          <Column>{this.props.secondColumn} </Column>
        </FirstColumnWrapper>
      )
    } else {
      this.renderedComponents = (
        <FirstColumnWrapper twoColumns={false}>
          <TransitionPage />
          <Column>{this.props.firstColumn} </Column>
        </FirstColumnWrapper>
      )
    }

    let exhibition = this.props.exhibitions.find(exh => {
      return exh.experience == this.props.experience
    })

    let image = getDocument(this.props.documents, exhibition.animation)

    return (
      <ExperienceContainer onScroll={x => this.scroll(x)}>
        {exhibition.temporary_uploaded ? <ExhibitionPage /> : null}

        <StickyTopHeader
          hideOnHomePage={!this.props.isHome}
          hideInMobile={this.props.isHome}
          hideInTablet={false}
        >
          <Header
            showOnHomePage={this.props.isHome}
            hideInMobile={this.props.isHome}
          />
        </StickyTopHeader>

        <StickyTopHeader hideInMobile={true}>
          <Jumbotron hideInTablet={true} />
        </StickyTopHeader>
        {/* Second Column */}
        <Column id="column-one" ref={this.columnOneRef} rightBorder={true}>
          <ScrollNavContainer>
            <MobTitleCard showInMobile={this.props.isHome}>
              <JumbotronMob showInMobile={true} />
            </MobTitleCard>
            <MobAnimCard showInMobile={this.props.isHome}>
              {image ? <img className="bg_anim" src={image.publicUrl} /> : null}
            </MobAnimCard>
            <RelativeHeader>
              <ImageContainer
                isHome={this.props.isHome}
                hideOnHomePage={!this.props.isHome}
                hideInMobile={true}
                exhibitionExperience={this.props.exhibitionExperience}
              />
            </RelativeHeader>
            <StickyHeader hideInTablet={true}>
              <Navbar hideInTablet={true} />
            </StickyHeader>

            {this.renderedComponents}
            <ResourcesOnlyInMobile hide={!this.props.isHome}>
              <ResourcesList />
            </ResourcesOnlyInMobile>
            <FixedTickerOnlyInMobile hide={!this.props.isHome}>
              <Ticker />
            </FixedTickerOnlyInMobile>

            {/* Only In Mobile */}
            <FixedFooter isHome={this.props.isHome} hideInTablet={true} showInMobile={true}>
              <FooterComponent />
            </FixedFooter>
            {/* Only In Mobile */}
          </ScrollNavContainer>
        </Column>
        {/* Third Column */}
        {/* Only In Desktop */}
        <Column ref={this.columnTwoRef} hideInMobile={true} rightBorder={true}>
          {/* <StickyTopHeader>
              <Jumbotron />
            </StickyTopHeader> */}
          {this.props.thirdColumn}
          <FixedTicker hide={!this.props.isHome}>
            <Ticker />
          </FixedTicker>
          <StickyFooterWithHighZIndex>
            <SocialMedia />
          </StickyFooterWithHighZIndex>
        </Column>
        {/* Only In Desktop */}
        <StickyFooter show={this.props.agreed_to_terms} hideInTablet>
          <DataPrivacy show={!this.props.agreed_to_terms} />
        </StickyFooter>
        {/* Only In Desktop */}
        <FixedFooter ref={this.footerRef} hideInMobile>
          <FooterComponent />
        </FixedFooter>
      </ExperienceContainer>
    )
  }
}

MainSection.propTypes = {
  firstColumn: PropTypes.node.isRequired,
  secondColumn: PropTypes.node,
  thirdColumn: PropTypes.node,
  numberOfColumnsIsTwo: PropTypes.bool,
  isHome: PropTypes.bool,
}

const mapStateToProps = state => {
  return {
    agreed_to_terms: state.agreed_to_terms,
    show_events_in_mobile: state.show_events_in_mobile,
    exhibitions: state.exhibitions,
    experience: state.experience,
    documents: state.documents,
  }
}
export default connect(mapStateToProps, null)(MainSection)
