import React from "react"
import PropTypes from "prop-types"
import Column from "./column"
import LanguageController from "../languagecontroller/languagecontroller"
import Header from "../header/header"
import Navbar from "../navbar/navbar"
import Jumbotron from "../jumbotron/jumbotron"
import JumbotronMob from "../jumbotron/jumbotronmob"
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
  FixedHeader,
  StickyFooterWithHighZIndex,
  FixedTopExpMob,
  MobTitleCard,
  MobAnimCard,
} from "./columns.styles"
import SocialMedia from "../socialmedia/socialmedia"
import Logo from "../logo/logo"
import ExperienceControllerMobile from "../experiencecontroller/experiencecontroller.mobile"
import DataPrivacy from "../data-privacy/data-privacy"
import FooterComponent from "../footer/footer"
import NavbarMobile from "../navbar/navbar-mobile"
import ImageContainer from "../image-container/image-container"
import NewsList from "../news/newslist";
class Columns extends React.Component {
  renderedComponents
  numberOfColumnsIsTwo = this.props.numberOfColumnsIsTwo
  constructor(props) {
    super(props);
    this.state = {
      showEvents: false
    }
  }
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
        <Column rightBorder={true} hideInTablet hideInMobile>
          <ExperienceController left={true} />
        </Column>
        <FixedTopExpMob showInMobile={true}>
              <ExperienceControllerMobile showInMobile={true} />
              {/* <Header hideInMobile={true} /> */}
        </FixedTopExpMob>
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
          
          <StickyTopHeader hideInMobile={true}>
            <Header hideInMobile={true} />
          </StickyTopHeader>

          <StickyTopHeader hideInMobile={true}>
            <Jumbotron hideInMobile={true} />
          </StickyTopHeader>          
          
          {/* Second Column */}
          <Column rightBorder={true}>
            <MobTitleCard showInMobile={true}>
              <JumbotronMob showInMobile={true} />
            </MobTitleCard>
            <MobAnimCard showInMobile={true}>
              <img className="bg_anim" src="https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/600x834_Animation_exp2_PRELIM.gif"/>
            </MobAnimCard>
            <RelativeHeader>
              <ImageContainer
                hideOnHomePage={!this.props.isHome}
                hideInTablet={true}
              />
            </RelativeHeader>
            <StickyHeader>
              <Navbar hideInTablet={true} />
            </StickyHeader>

            {this.renderedComponents}
            {/* Only In Mobile */}
            <StickyFooter showInTablet>
              <DataPrivacy show={!this.props.agreed_to_terms} />
            </StickyFooter>
            {/* Only In Mobile */}
            <FixedFooter showInTablet>
              <FooterComponent />
            </FixedFooter>
            {/* Only In Mobile */}
            
          </Column>
          {/* Third Column */}
          {/* Only In Desktop */}
          <Column rightBorder={true} hideInMobile={!this.props.show_events_in_mobile}>
            {/* <StickyTopHeader>
              <Jumbotron />
            </StickyTopHeader> */}
            {this.props.thirdColumn}
            <StickyFooterWithHighZIndex>
              <SocialMedia />
            </StickyFooterWithHighZIndex>
          </Column>

          {/* Only In Desktop */}
          <StickyFooter hideInTablet>
            <DataPrivacy show={!this.props.agreed_to_terms} />
          </StickyFooter>
          {/* Only In Desktop */}
          <FixedFooter hideInTablet>
            <FooterComponent />
          </FixedFooter>
        </AnimatedColumn>
        <FixedNavbar>
              <NavbarMobile showInTablet />
        </FixedNavbar>
        {/* Fourth Column */}
        {/* Only In Mobile */}
        <Column rightBorder={false} hideInTablet hideInMobile>
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
    show_events_in_mobile: state.show_events_in_mobile
  }
}
export default connect(
  mapStateToProps,
  null
)(Columns)
