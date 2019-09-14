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
} from "./columns.styles"
import SocialMedia from "../socialmedia/socialmedia"
import Logo from "../logo/logo"
import ExperienceControllerMobile from "../experiencecontroller/experiencecontroller.mobile"
import DataPrivacy from "../data-privacy/data-privacy"
import FooterComponent from "../footer/footer"
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
        <Column rightBorder={true} hideInMobile>
          <ExperienceController left={true} />
        </Column>
        <AnimatedColumn
          animationIn={this.props.experience_transition.animationIn}
          animationOut={this.props.experience_transition.animationOut}
          isVisible={this.props.experience_transition.isVisible}
          animateOnMount={false}
          animationInDuration={500}
        >
          <Column rightBorder={true}>
            <StickyHeader>
              <ExperienceControllerMobile showInMobile={true} />
              <Header hideInMobile />
              <Navbar hideInMobile />
            </StickyHeader>

            {this.renderedComponents}
            <StickyFooter>
              <DataPrivacy show={!this.props.agreed_to_terms} />
            </StickyFooter>
            <FixedFooter>
              <FooterComponent />
            </FixedFooter>
          </Column>

          <Column rightBorder={true} hideInMobile>
            <StickyHeader>
              <Jumbotron />
            </StickyHeader>
            <Logo />
            {this.props.thirdColumn}
            <SocialMedia />
          </Column>
          {/* <FixedFooter>
            <FooterComponent />
          </FixedFooter> */}
        </AnimatedColumn>

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
