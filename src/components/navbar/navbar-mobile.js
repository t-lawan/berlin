import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  getCurrentLanguageString,
  createPath,
  createProperty,
  transitionBackground,
} from "../../utility/helper"
import {
  NavMobileWrapper,
  NavMobileHeader,
  NavIcon,
  NavIconSVG,
  NavImage,
  NavMobileContent,
  NavInner,
  NavMobileInner,
  NavMobileLinks,
  NavMobileLink,
  NavMobileLinkSmall,
  NavMobileOuterLink,
  NavMobileModal,
  NavImageLink,
  NavMobileOuterLinkSmall,
} from "./navbar.styles"
import LanguageController from "../languagecontroller/languagecontroller"
import SocialMedia, { socialMediaLinks } from "../socialmedia/socialmedia"
import * as actionTypes from "../../store/action"
import { navigate } from "gatsby"
class NavbarMobile extends React.Component {
  language
  navLinks = [
    {
      EN: "team",
      DE: "team",
      path: "team",
    },
    {
      EN: "organisation",
      DE: "verein",
      path: "organization-2",
    },
    {
      EN: "advisory board",
      DE: "beirat",
      path: "advisory-board",
    },
    {
      EN: "support",
      DE: "unterstutzung",
      path: "support",
    },
  ]
  constructor() {
    super()
    this.state = {
      showContent: false,
    }
  }

  toggleContent = () => {
    this.setState({
      showContent: this.state.showContent ? false : true,
    })
  }

  showModal = () => {
    this.props.showModal()
  }
  render() {
    this.language = getCurrentLanguageString(this.props.languages)
    return (
      <NavMobileWrapper showInTablet={this.props.showInTablet} showInMobile={this.props.showInMobile}>
        <NavMobileHeader>
          <div onClick={() => this.toggleContent()}>
            <NavIconSVG
              src="https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/hamburger_menu_mob_blk.svg"
              show={this.state.showContent ? 0 : 1}
            />
            <NavIconSVG
              src="https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/hamburger_menu_mob_blk_close.svg"
              show={this.state.showContent ? 1 : 0}
            />
          </div>
          <div>
            <NavImageLink
              // cover
              // direction="down"
              // bg={transitionBackground}
              onClick={() => this.props.changeExperience(this.props.active_experience)}
              fade
              to={createPath(this.language, "")}
            >
              <NavImage src="https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans/images/bb11_logo_mob.svg" />
            </NavImageLink>
          </div>
          <div>
            <LanguageController />
          </div>
        </NavMobileHeader>

        <NavMobileContent show={this.state.showContent}>
          <NavMobileInner>
            <NavMobileLink
              // cover
              // direction="down"
              // bg={transitionBackground}
              fade
              to={createPath(this.language, `current`)}
              onClick={() => this.toggleContent()}
            >
              {this.language === "EN" ? "current" : "aktuell"}
            </NavMobileLink>
            {this.props.navbar_top.map((item, index) =>
              generateLink(item, this.language)
            )}
          </NavMobileInner>

          <NavMobileLinks>
            {this.navLinks.map((navLink, index) => (
              <NavMobileLink
                fade
                // cover
                // direction="down"
                // bg={transitionBackground}
                key={index}
                to={createPath(this.language, `about/${navLink.path}`)}
                onClick={() => this.toggleContent()}

              >
                {navLink[this.language]}
              </NavMobileLink>
            ))}
          </NavMobileLinks>

          <NavMobileLinks>
            <div>
              <NavMobileModal onClick={() => this.showModal()}>
                {content[this.language]['newsletter']}

              </NavMobileModal>
              {socialMediaLinks.map(link => (
                <NavMobileOuterLinkSmall
                  key={link.name}
                  target="_blank"
                  href={link.url}
                >
                  {link.name}
                </NavMobileOuterLinkSmall>
              ))}
            </div>
            <div>
              <NavMobileLinkSmall
                fade
                // cover
                // direction="down"
                // bg={transitionBackground}
                to={createPath(this.language, "imprint")}
                onClick={() => this.toggleContent()}

              >
                {content[this.language]['imprint']}

              </NavMobileLinkSmall>
              <NavMobileLinkSmall
                fade
                // cover
                // direction="down"
                // bg={transitionBackground}
                to={createPath(this.language, "data-privacy")}
                onClick={() => this.toggleContent()}
              >
                {content[this.language]['data-privacy']}
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
    newsletter: 'newsletter'
  },
  DE: {
    imprint: "impressum",
    "data-privacy": "datenschutz",
    newsletter: 'newsletter'
  },
}

const generateLink = (item, language) => {
  if (item.isExternal) {
    return (
      <NavMobileOuterLink key={item.slug} href={item.slug} target="__blank">
        {item[language].title.toLowerCase()}
      </NavMobileOuterLink>
    )
  } else {
    return (
      <NavMobileLink
        activeStyle={{ color: "#D9515C" }}
        to={createPath(language, item.slug)}
        key={item.slug}
        bg={transitionBackground}
      >
        {item[language].title.toLowerCase()}
      </NavMobileLink>
    )
  }
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
    navbar_top: state.navbar_top,
    active_experience: state.active_experience
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showModal: () => dispatch({ type: actionTypes.SHOW_MODAL }),
    changeExperience: (experience) => dispatch(actionTypes.changeExperience(experience))
  }
}

NavbarMobile.propTypes = {
  showInTablet: PropTypes.bool,
  showInMobile: PropTypes.bool,
  showContent: PropTypes.bool,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarMobile)
