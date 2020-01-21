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
import ExperienceControllerMobile from "../experiencecontroller/experiencecontroller.mobile"
import DataPrivacy from "../data-privacy/data-privacy"
import FooterComponent from "../footer/footer"
import NavbarMobile from "../navbar/navbar-mobile"
import ImageContainer from "../image-container/image-container"
import { getDocument } from "../../store/selector";
class Columns extends React.Component {
  renderedComponents
  numberOfColumnsIsTwo = this.props.numberOfColumnsIsTwo
  animationInDuration = 600;
  animationOutDuration = 500;
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

    let exhibition = this.props.exhibitions.find((exh) => {
      return exh.experience == this.props.experience;
    });

    let image = getDocument(this.props.documents, exhibition.animation)

    return (
      <ColumnsWrapper>
        {/* First Column */}
        <Column rightBorder={true} hideInTablet hideInMobile>
          <ExperienceController left={true} />
        </Column>
        <FixedTopExpMob showInTablet={true}>
          <ExperienceControllerMobile showInTablet={true} />
          {/* <Header hideInMobile={true} /> */}
        </FixedTopExpMob>
        {/* Middle Column */}
        <AnimatedColumn
          animationIn={this.props.experience_transition.animationIn}
          animationOut={this.props.experience_transition.animationOut}
          isVisible={this.props.experience_transition.isVisible}
          animateOnMount={false}
          animationInDuration={this.props.animationInDuration}
          animationOutDuration={this.props.animationOutDuration}
          style={{ zIndex: 0 }}
        >
          
          <StickyTopHeader hideOnHomePage={!this.props.isHome} hideInMobile={true}>
            <Header hideOnHomePage={!this.props.isHome} hideInMobile={true} />
          </StickyTopHeader>

          <StickyTopHeader hideInMobile={true}>
            <Jumbotron hideInMobile={true} />
          </StickyTopHeader>          
          
          {/* Second Column */}
          <Column rightBorder={true}>
            <MobTitleCard showInTablet={true}>
              <JumbotronMob showInTablet={true} />
            </MobTitleCard>
            <MobAnimCard showInTablet={true}>
              <img className="bg_anim" src={image.url}/>
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
          <Column hideInMobile={true} rightBorder={true}>
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
            <NavbarMobile showInTablet={true} />
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
    show_events_in_mobile: state.show_events_in_mobile,
    exhibitions: state.exhibitions,
    experience: state.experience,
    documents: state.documents
  }
}
export default connect(
  mapStateToProps,
  null
)(Columns)
