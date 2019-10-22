import React from "react"
import PropTypes from "prop-types"
import Column from "./column"
import LanguageController from "../languagecontroller/languagecontroller"
import Header from "../header/header"
import Navbar from "../navbar/navbar"
import Jumbotron from "../jumbotron/jumbotron"
import ExperienceController from "../experiencecontroller/experiencecontroller"
import { connect } from "react-redux"
import {
  ColumnsWrapper,
  FirstColumnWrapper,
  StickyHeader,
  AnimatedColumn,
  StickyFooter,
  FixedFooter,
  FixedNavbar,
  StickyTopHeader,
  RelativeHeader,
} from "./columns.styles"
import SocialMedia from "../socialmedia/socialmedia"
import Logo from "../logo/logo"
import ExperienceControllerMobile from "../experiencecontroller/experiencecontroller.mobile"
import DataPrivacy from "../data-privacy/data-privacy"
import FooterComponent from "../footer/footer"
import NavbarMobile from "../navbar/navbar-mobile"
import ImageContainer from "../image-container/image-container"
class Columns extends React.Component {
  renderedComponents
  numberOfColumnsIsTwo = this.props.numberOfColumnsIsTwo
  render() {
    if (this.numberOfColumnsIsTwo) {
      this.renderedComponents = (
        <FirstColumnWrapper twoColumns>
          <Column rightBorder={true}>{this.props.firstColumn} </Column>
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

    return (
      <ColumnsWrapper>
        {/* First Column */}
        <Column rightBorder={true} hideInMobile>
          <ExperienceController left={true} />
        </Column>
        {/* Middle Column */}
        <AnimatedColumn
          animationIn={this.props.experience_transition.animationIn}
          animationOut={this.props.experience_transition.animationOut}
          isVisible={this.props.experience_transition.isVisible}
          animateOnMount={false}
          animationInDuration={1000}
          animationOutDuration={200}
          style={{ zIndex: 0 }}
        >
          {/* Second Column */}
          <Column rightBorder={true}>
            <StickyTopHeader>
              <ExperienceControllerMobile showInMobile={true} />
              <Header hideInMobile={true} />
            </StickyTopHeader>
            <RelativeHeader>
              <ImageContainer
                hideOnHomePage={!this.props.isHome}
                hideInMobile={true}
              />
            </RelativeHeader>
            <StickyHeader>
              <Navbar hideInMobile={true} />
            </StickyHeader>

            {this.renderedComponents}
            <StickyFooter showInMobile>
              <DataPrivacy show={!this.props.agreed_to_terms} />
            </StickyFooter>
            <FixedFooter showInMobile>
              <FooterComponent />
            </FixedFooter>
            <FixedNavbar>
              <NavbarMobile showInMobile />
            </FixedNavbar>
          </Column>
          {/* Third Column */}
          <Column rightBorder={true} hideInMobile>
            <StickyTopHeader>
              <Jumbotron />
            </StickyTopHeader>
            {this.props.thirdColumn}
            <SocialMedia />
          </Column>

          <StickyFooter hideInMobile>
            <DataPrivacy show={!this.props.agreed_to_terms} />
          </StickyFooter>

          <FixedFooter hideInMobile>
            <FooterComponent />
          </FixedFooter>
        </AnimatedColumn>
        {/* Fourth Column */}
        <Column rightBorder={false} hideInMobile>
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
  }
}
export default connect(
  mapStateToProps,
  null
)(Columns)
