import React from "react"
import PropTypes from "prop-types"
import Column from "./column"
import LanguageController from "../languagecontroller/languagecontroller"
import ExperienceController from "../experiencecontroller/experiencecontroller"
import { connect } from "react-redux"
import {
  ColumnsWrapper,
  FirstColumnWrapper,
  FixedNavbar,
  FixedTopExpMob,
  ExperienceCarousel,
} from "./columns.styles"
import ExperienceControllerMobile from "../experiencecontroller/experiencecontroller.mobile"
import NavbarMobile from "../navbar/navbar-mobile"
import { getDocument } from "../../store/selector"
import { transitionTimes } from "../../utility/helper"
import MainSection from "./main-section"
class Columns extends React.Component {
  renderedComponents
  numberOfColumnsIsTwo = this.props.numberOfColumnsIsTwo
  animationInDuration = transitionTimes.animationInDuration
  animationOutDuration = transitionTimes.animationOutDuration
  footerRef
  columnOneRef
  columnTwoRef
  constructor(props) {
    super(props)
    this.footerRef = React.createRef()
    this.columnOneRef = React.createRef()
    this.columnTwoRef = React.createRef()
    this.state = {
      showFooter: false,
      scrollHeight: 0,
      scrollTop: 0,
    }
  }

  render() {
    if (this.numberOfColumnsIsTwo) {
      this.renderedComponents = (
        <FirstColumnWrapper twoColumns>
          <Column hideInMobile rightBorder={true}>
            {this.props.firstColumn}{" "}
          </Column>
          <Column>{this.props.secondColumn} </Column>
        </FirstColumnWrapper>
      )
    } else {
      this.renderedComponents = (
        <FirstColumnWrapper twoColumns={false}>
          <Column>{this.props.firstColumn} </Column>
        </FirstColumnWrapper>
      )
    }

    let exhibition = this.props.exhibitions.find(exh => {
      return exh.experience == this.props.experience
    })

    let image = getDocument(this.props.documents, exhibition.animation)
    return (
      <ColumnsWrapper>
        {/* First Column */}
        <Column rightBorder={true} hideInMobile={true} hideInTablet>
          <ExperienceController left={true} />
        </Column>
        <FixedTopExpMob showInTablet={true}>
          <ExperienceControllerMobile showInTablet={true} />
          {/* <Header hideInMobile={true} /> */}
        </FixedTopExpMob>
        {/* Middle Column */}
        <ExperienceCarousel
          selectedItem={this.props.experience - 1}
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          centerMode={false}
        >
          <div>
            <MainSection
              firstColumn={this.props.firstColumn}
              secondColumn={this.props.secondColumn}
              thirdColumn={this.props.thirdColumn}
              numberOfColumnsIsTwo={this.props.numberOfColumnsIsTwo}
              isHome={this.props.isHome}
            />
          </div>

          <div>
            <MainSection
              firstColumn={this.props.firstColumn}
              secondColumn={this.props.secondColumn}
              thirdColumn={this.props.thirdColumn}
              numberOfColumnsIsTwo={this.props.numberOfColumnsIsTwo}
              isHome={this.props.isHome}
            />
          </div>
          <div>
            <MainSection
              firstColumn={this.props.firstColumn}
              secondColumn={this.props.secondColumn}
              thirdColumn={this.props.thirdColumn}
              numberOfColumnsIsTwo={this.props.numberOfColumnsIsTwo}
              isHome={this.props.isHome}
            />
          </div>
          <div>
            <MainSection
              firstColumn={this.props.firstColumn}
              secondColumn={this.props.secondColumn}
              thirdColumn={this.props.thirdColumn}
              numberOfColumnsIsTwo={this.props.numberOfColumnsIsTwo}
              isHome={this.props.isHome}
            />
          </div>
        </ExperienceCarousel>
        <FixedNavbar>
          <NavbarMobile showInTablet={true} />
        </FixedNavbar>
        {/* Fourth Column */}
        {/* Only In Mobile */}
        <Column rightBorder={false} hideInMobile={true} hideInTablet>
          <LanguageController />
          <ExperienceController left={false} />
        </Column>
      </ColumnsWrapper>
    )
  }
}

Columns.propTypes = {
  firstColumn: PropTypes.node.isRequired,
  secondColumn: PropTypes.node,
  thirdColumn: PropTypes.node,
  numberOfColumnsIsTwo: PropTypes.bool,
  isHome: PropTypes.bool,
}
const mapStateToProps = state => {
  return {
    experience_transition: state.experience_transition,
    agreed_to_terms: state.agreed_to_terms,
    show_events_in_mobile: state.show_events_in_mobile,
    exhibitions: state.exhibitions,
    experience: state.experience,
    documents: state.documents,
  }
}
export default connect(
  mapStateToProps,
  null
)(Columns)
