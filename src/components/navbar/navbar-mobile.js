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
} from "./navbar.styles"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import LanguageController from "../languagecontroller/languagecontroller"
import SocialMedia, { socialMediaLinks } from "../socialmedia/socialmedia"
import * as actionTypes from "../../store/action"
class NavbarMobile extends React.Component {
  language

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
            <NavIcon icon={faBars} />
          </div>
          <div>
            <NavImageLink to={createPath(this.language, '')}>
              <NavImage src="https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans/images/bb11_logo_mob.svg" />
            </NavImageLink>
          </div>
          <div>
            <LanguageController />
          </div>
        </NavMobileHeader>

        <NavMobileContent show={this.state.showContent}>
          <NavMobileInner>
            {this.props.navbar.map((item, index) => (
              <NavMobileLink
                to={createPath(this.language, item.slug)}
                key={index}
              >
                {" "}
                {item[this.language].title.toLowerCase()}{" "}
              </NavMobileLink>
            ))}
          </NavMobileInner>

          <NavMobileLinks>
            <div>
              <NavMobileLink to={createPath(this.language, "team")}>
                {" "}
                team
              </NavMobileLink>
              <NavMobileLink to={createPath(this.language, "organisation-2")}>
                {" "}
                organisation
              </NavMobileLink>
            </div>
            <div>
              <NavMobileLink to={createPath(this.language, "advisory-board")}>
                {" "}
                advisory board
              </NavMobileLink>
              <NavMobileLink to={createPath(this.language, "support")}>
                {" "}
                support
              </NavMobileLink>
            </div>
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
              <NavMobileLink to={createPath(this.language, "imprint")}>
                imprint
              </NavMobileLink>
              <NavMobileLink to={createPath(this.language, "data-privacy")}>
                data privacy
              </NavMobileLink>
            </div>
          </NavMobileLinks>
        </NavMobileContent>
      </NavMobileWrapper>
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
