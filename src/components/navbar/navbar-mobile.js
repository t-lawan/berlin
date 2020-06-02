import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  getCurrentLanguageString,
  createPath,
} from "../../utility/helper"
import {
  NavMobileWrapper,
  NavMobileHeader,
  NavIconSVG,
  NavImage,
  NavMobileContent,
  NavMobileInner,
  NavMobileLinks,
  NavMobileLink,
  NavMobileLinkSmall,
  NavMobileOuterLink,
  NavMobileModal,
  NavImageLink,
  NavMobileOuterLinkSmall,
  NavMobileInactiveLink,
} from "./navbar.styles"
import LanguageController from "../languagecontroller/languagecontroller"
import { socialMediaLinks } from "../socialmedia/socialmedia"
import * as actionTypes from "../../store/action"
class NavbarMobile extends React.Component {
  language
  navLinks = [
    {
      EN: "team",
      DE: "team",
      path: "team",
    },
    {
      EN: "organization",
      DE: "verein",
      path: "organization",
    },
    {
      EN: "advisory board",
      DE: "beirat",
      path: "advisory-board",
    },
    {
      EN: "support",
      DE: "unterstützung",
      path: "support",
    },
  ]
  constructor() {
    super()
    this.state = {
      showContent: false,
    }
  }

  toggleContent = (withTransition = false) => {
    this.setState({
      showContent: this.state.showContent ? false : true,
    })
    if(withTransition) {
      this.props.startTransition();
    }
  }

  showModal = () => {
    this.props.showModal()
  }
  render() {
    this.language = getCurrentLanguageString(this.props.languages);
    let navbarItems = [...this.props.navbar_top, ...this.props.navbar_bottom]
    return (
      <NavMobileWrapper
        showInTablet={this.props.showInTablet}
        showInMobile={this.props.showInMobile}
      >
        <NavMobileHeader>
          <div onClick={() => this.toggleContent(false)}>
            <NavIconSVG
              src="https://admin11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/hamburger_menu_mob_blk.svg"
              show={this.state.showContent ? 0 : 1}
            />
            <NavIconSVG
              src="https://admin11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/hamburger_menu_mob_blk_close.svg"
              show={this.state.showContent ? 1 : 0}
            />
          </div>
          <div>
            <NavImageLink
              // cover
              // direction="down"
              // bg={transitionBackground}
              onClick={() =>
                this.props.changeExperience(this.props.active_experience)
              }
              fade
              to={createPath(this.language, "")}
            >
              <NavImage src="https://admin11.berlinbiennale.de/wp-content/themes/bb11-car-trans/images/bb11_logo_mob.svg" />
            </NavImageLink>
          </div>
          <div>
            <LanguageController />
          </div>
        </NavMobileHeader>

        <NavMobileContent show={this.state.showContent}>
          <NavMobileInner>
            <NavMobileLink
              to={createPath(this.language, `current`)}
              onClick={() => this.toggleContent(true)}
            >
              {this.language === "EN" ? "current" : "aktuell"}
            </NavMobileLink>
            {navbarItems.map(item =>
              generateLink(item, this.language, this.props)
            )}
          </NavMobileInner>

          <NavMobileLinks>
            {this.navLinks.map((navLink, index) => (
              <NavMobileLink
                key={index}
                to={createPath(this.language, `about/${navLink.path}`)}
                onClick={() => this.toggleContent(true)}
              >
                {navLink[this.language]}
              </NavMobileLink>
            ))}
          </NavMobileLinks>

          <NavMobileLinks>
            <div>
              <NavMobileModal onClick={() => this.showModal()}>
                {content[this.language]["newsletter"]}
              </NavMobileModal>
              {socialMediaLinks.map(link => (
                <NavMobileOuterLinkSmall
                  key={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.url}
                >
                  {link.name}
                </NavMobileOuterLinkSmall>
              ))}
            </div>
            <div>
              <NavMobileLinkSmall
                to={createPath(this.language, "imprint")}
                onClick={() => this.toggleContent(true)}
              >
                {content[this.language]["imprint"]}
              </NavMobileLinkSmall>
              <NavMobileLinkSmall
                to={createPath(this.language, "data-privacy")}
                onClick={() => this.toggleContent(true)}
              >
                {content[this.language]["data-privacy"]}
              </NavMobileLinkSmall>
            </div>
          </NavMobileLinks>
        </NavMobileContent>
      </NavMobileWrapper>
    )
  }
}

const content = {
  EN: {
    imprint: "imprint",
    "data-privacy": "data privacy",
    newsletter: "newsletter",
  },
  DE: {
    imprint: "impressum",
    "data-privacy": "datenschutz",
    newsletter: "newsletter",
  },
}

const generateLink = (item, language, props) => {
  let comp
  if (item.isExternal) {
    comp = (
      <NavMobileOuterLink key={item.slug} href={item.slug} target="__blank">
        {item[language].title.toLowerCase()}
      </NavMobileOuterLink>
    )
  } else {
    comp = (
      <NavMobileLink
        activeStyle={{ color: "#D9515C" }}
        to={createPath(language, item.slug)}
        key={item.slug}
        onClick={() => props.startTransition()}
      >
        {item[language].title.toLowerCase()}
      </NavMobileLink>
    )
  }

  if (!item.isActive) {
    comp = (
      <NavMobileInactiveLink key={item.slug}>
        {" "}
        {item[language].title.toLowerCase()}{" "}
      </NavMobileInactiveLink>
    )
  }

  return comp
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
    navbar_top: state.navbar_top,
    navbar_bottom: state.navbar_bottom,
    active_experience: state.active_experience,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showModal: () => dispatch({ type: actionTypes.SHOW_MODAL }),
    changeExperience: experience =>
      dispatch(actionTypes.changeExperience(experience)),
    startTransition: () => dispatch({ type: actionTypes.START_TRANSITION }),
  }
}

NavbarMobile.propTypes = {
  showInTablet: PropTypes.bool,
  showInMobile: PropTypes.bool,
  showContent: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarMobile)
