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
  NavLink,
  NavMobileLinkParagraph,
} from "./navbar.styles"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import LanguageController from "../languagecontroller/languagecontroller"
import SocialMedia, { socialMediaLinks } from "../socialmedia/socialmedia"
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

  toggleEventList = () => {
    this.props.toggleEvents()
    this.toggleContent()
  }

  showEventList = () => {
    this.props.showEvents()
    this.toggleContent()
  }

  hideEventList = () => {
    this.props.hideEvents()
    this.toggleContent()
  }

  showModal = () => {
    this.props.showModal()
  }
  render() {
    this.language = getCurrentLanguageString(this.props.languages)

    return (
      <NavMobileWrapper showInMobile>
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
              cover
              direction="down"
              bg={transitionBackground}
              to={createPath(this.language, "")}
              onClick={() => this.hideEventList()}
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
            <NavMobileLinkParagraph onClick={() => this.showEventList()}>
              {" "}
              current{" "}
            </NavMobileLinkParagraph>
            {this.props.navbar.map((item, index) =>
              generateLink(item, this.language)
            )}
          </NavMobileInner>

          <NavMobileLinks>
            {this.navLinks.map((navLink, index) => (
              <NavMobileLink
                cover
                direction="down"
                bg={transitionBackground}
                key={index}
                to={createPath(this.language, `about/${navLink.path}`)}
              >
                {navLink[this.language]}
              </NavMobileLink>
            ))}
          </NavMobileLinks>

          <NavMobileLinks>
            <div>
              <NavMobileModal onClick={() => this.showModal()}>
                {" "}
                newsletter{" "}
              </NavMobileModal>
              {socialMediaLinks.map(link => (
                <NavMobileLinkSmall
                  key={link.name}
                  target="_blank"
                  href={link.url}
                >
                  {link.name}
                </NavMobileLinkSmall>
              ))}
            </div>
            <div>
              <NavMobileLinkSmall
                cover
                direction="down"
                bg={transitionBackground}
                to={createPath(this.language, "imprint")}
              >
                imprint
              </NavMobileLinkSmall>
              <NavMobileLinkSmall
                cover
                direction="down"
                bg={transitionBackground}
                to={createPath(this.language, "data-privacy")}
              >
                data privacy
              </NavMobileLinkSmall>
            </div>
          </NavMobileLinks>
        </NavMobileContent>
      </NavMobileWrapper>
    )
  }
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
    navbar: state.navbar,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showModal: () => dispatch({ type: actionTypes.SHOW_MODAL }),
    toggleEvents: () =>
      dispatch({ type: actionTypes.TOGGLE_EVENTS_DISPLAY_IN_MOBILE }),
    showEvents: () =>
      dispatch({ type: actionTypes.SHOW_EVENTS_DISPLAY_IN_MOBILE }),
    hideEvents: () =>
      dispatch({ type: actionTypes.HIDE_EVENTS_DISPLAY_IN_MOBILE }),
  }
}

NavbarMobile.propTypes = {
  showInMobile: PropTypes.bool,
  showContent: PropTypes.bool,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarMobile)
