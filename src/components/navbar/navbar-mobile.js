import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  getCurrentLanguageString,
  createPath,
  createProperty,
} from "../../utility/helper"
import {
  NavMobileWrapper,
  NavMobileHeader,
  NavIcon,
  NavImage,
  NavMobileContent,
  NavInner,
  NavMobileInner,
  NavMobileLinks,
  NavMobileLink,
  NavMobileOuterLink,
  NavMobileModal,
  NavImageLink,
  NavLink,
} from "./navbar.styles"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import LanguageController from "../languagecontroller/languagecontroller"
import SocialMedia, { socialMediaLinks } from "../socialmedia/socialmedia"
import * as actionTypes from "../../store/action"
class NavbarMobile extends React.Component {
  language
  navLinks = [
    {
      EN: 'team',
      DE: 'team',
      path: 'team'
    },
    {
      EN: 'organisation',
      DE: 'verein',
      path: 'organisation-2'
    },
    {
      EN: 'advisory board',
      DE: 'beirat',
      path: 'advisory-board'
    },
    {
      EN: 'support',
      DE: 'support',
      path: 'support'
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
      <NavMobileWrapper showInMobile>
        <NavMobileHeader>
          <div onClick={() => this.toggleContent()}>
            <NavIcon icon={faBars} show={this.state.showContent ? 0 : 1} />
            <NavIcon icon={faTimes} show={this.state.showContent ? 1 : 0} />
          </div>
          <div>
            <NavImageLink fade to={createPath(this.language, '')}>
              <NavImage src="https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans/images/bb11_logo_mob.svg" />
            </NavImageLink>
          </div>
          <div>
            <LanguageController />
          </div>
        </NavMobileHeader>

        <NavMobileContent show={this.state.showContent}>
          <NavMobileInner>
            {this.props.navbar.map((item, index) => generateLink(item, this.language))}
          </NavMobileInner>

          <NavMobileLinks>
              {this.navLinks.map((navLink, index) => (
                <NavMobileLink fade key={index} to={createPath(this.language, `about/${navLink.path}`)}>
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
                <NavMobileOuterLink
                  key={link.name}
                  target="_blank"
                  href={link.url}
                >
                  {" "}
                  {link.name}
                </NavMobileOuterLink>
              ))}
            </div>
            <div>
              <NavMobileLink fade to={createPath(this.language, "imprint")}>
                imprint
              </NavMobileLink>
              <NavMobileLink fade to={createPath(this.language, "data-privacy")}>
                data privacy
              </NavMobileLink>
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
        activeStyle={{ color: "#990033" }}
        to={createPath(language, item.slug)}
        key={item.slug}
        fade
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
