import React from "react"
import PropTypes from "prop-types"
import Column from "./column"
import LanguageController from "../languagecontroller/languagecontroller"
import Header from "../header/header"
import Navbar from "../navbar/navbar"
import Jumbotron from "../jumbotron/jumbotron"
import Ticker from "../ticker/ticker"
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
  FixedTicker,
  ResourcesOnlyInMobile,
} from "./columns.styles"
import SocialMedia from "../socialmedia/socialmedia"
import ExperienceControllerMobile from "../experiencecontroller/experiencecontroller.mobile"
import DataPrivacy from "../data-privacy/data-privacy"
import FooterComponent from "../footer/footer"
import NavbarMobile from "../navbar/navbar-mobile"
import ImageContainer from "../image-container/image-container"
import { getDocument } from "../../store/selector";
import ResourcesList from "../resources/resources-list";
import ExhibitionPage from "../exhibition/exhibition-page";
class Columns extends React.Component {
  renderedComponents
  numberOfColumnsIsTwo = this.props.numberOfColumnsIsTwo
  animationInDuration = 1000;
  animationOutDuration = 1300;
  footerRef;
  columnOneRef;
  columnTwoRef;
  constructor(props) {
    super(props);
    this.footerRef = React.createRef();
    this.columnOneRef = React.createRef();
    this.columnTwoRef = React.createRef();
    this.state = {
      showFooter: false,
      scrollHeight: 0,
      scrollTop: 0
    }
  }

  scroll = (e) => {
    let columnOne = this.columnOneRef.current.columnRef.current
    let columnTwo = this.columnTwoRef.current.columnRef.current
    let footer = this.footerRef.current;


    if(!columnOne || !columnTwo) {
      return false;
    } else {
      let columnOnePercent = (columnOne.scrollTop + columnOne.clientHeight)/columnOne.scrollHeight
      let columnTwoPercent = (columnTwo.scrollTop + columnTwo.clientHeight)/columnTwo.scrollHeight

      if(columnOnePercent > 0.95 || columnTwoPercent > 0.95) {
        footer.classList.remove('hide-footer');
        footer.classList.add('show-footer');
      } else {
        footer.classList.remove('show-footer');
        footer.classList.add('hide-footer');
        // return false
      }
    }
  }
  render() {
    if (this.numberOfColumnsIsTwo) {
      this.renderedComponents = (
        <FirstColumnWrapper twoColumns>
          <Column hideInMobile rightBorder={true}>{this.props.firstColumn} </Column>
          <Column >{this.props.secondColumn} </Column>
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
      <ColumnsWrapper onScroll={(x) => this.scroll(x)}>
        {/* First Column */}
        <Column rightBorder={true} hideInMobile={true} hideInTablet>
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
          {exhibition.temporary_uploaded ? <ExhibitionPage /> : null} 
          
          <StickyTopHeader hideOnHomePage={!this.props.isHome} hideInMobile={this.props.isHome} hideInTablet={false}>
            <Header showOnHomePage={this.props.isHome} hideInMobile={this.props.isHome} />
          </StickyTopHeader>

          <StickyTopHeader hideInMobile={true}>
            <Jumbotron hideInTablet={true} />
          </StickyTopHeader>             
          {/* Second Column */}
          <Column ref={this.columnOneRef} rightBorder={true}>
            <MobTitleCard showInMobile={this.props.isHome}>
              <JumbotronMob showInMobile={true}/>
            </MobTitleCard>
            <MobAnimCard showInMobile={this.props.isHome}>
              <img className="bg_anim" src={image.url}/>
            </MobAnimCard>
            <RelativeHeader>
              <ImageContainer
                hideOnHomePage={!this.props.isHome}
                hideInMobile={true}
              />
            </RelativeHeader>
            <StickyHeader hideInTablet={true}>
              <Navbar hideInTablet={true} />
            </StickyHeader>

            {this.renderedComponents}
            <ResourcesOnlyInMobile hide={!this.props.isHome}>
              <ResourcesList />    
            </ResourcesOnlyInMobile>
            {/* Only In Mobile */}
            <StickyFooter show={!this.props.agreed_to_terms} showInTablet>
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
          <Column ref={this.columnTwoRef} hideInMobile={true} rightBorder={true}>
            {/* <StickyTopHeader>
              <Jumbotron />
            </StickyTopHeader> */}
            {this.props.thirdColumn}
            <FixedTicker>
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
        </AnimatedColumn>
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
    documents: state.documents
  }
}
export default connect(
  mapStateToProps,
  null
)(Columns)
