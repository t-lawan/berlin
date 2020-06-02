import React from "react"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import { connect } from "react-redux"
import { AboutSideNavbar, AboutNavItem, AboutNavItemLink } from "./about.styles"
import PropTypes from "prop-types"
import * as actionTypes from '../../store/action'
const AboutNavbar = props => {

  let items = [
    {
      EN: {
        title: "About",
        slug: "about"
      },
      DE: {
        title: "über",
        slug: "uber"
      },
    },
    {
      EN: {
        title: "team",
        slug: "about/team"
      },
      DE: {
        title: "team",
        slug: "uber/team"
      },
    },
    {
      EN: {
        title: "organization",
        slug: "about/organization"
      },
      DE: {
        title: "verein",
        slug: "uber/verein"
      },
    },
    {
      EN: {
        title: "advisory board",
        slug: "about/advisory-board"
      },
      DE: {
        title: "beirat",
        slug: "uber/beirat"
      },
    },
    {
      EN: {
        title: "support",
        slug: "about/support"
      },
      DE: {
        title: "unterstützung",
        slug: "uber/unterstutzung"
      },
    },
  ]

  let language = getCurrentLanguageString(props.languages)

  const isCurrentPage = index => {
    let slug = language === "DE" ? `/de/${items[index][language].slug}` : `/${items[index][language].slug}`
    return slug === props.currentPage
  }

  return (
    <AboutSideNavbar>
      {items.map((item, index) => (
        <AboutNavItemLink to={createPath(language, item[language].slug)} key={index} onClick={() => props.startTransition()}>
        {/* <AboutNavItemLink cover direction="down" bg={transitionBackground} to={createPath(language, item['EN'].slug)} key={index}> */}
          <AboutNavItem current={isCurrentPage(index)}>
            {item[language].title.toLowerCase()}
          </AboutNavItem>
        </AboutNavItemLink>
      ))}
    </AboutSideNavbar>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startTransition: () =>
      dispatch({ type: actionTypes.START_TRANSITION}),
  }
}

AboutNavbar.propTypes = {
  currentPage: PropTypes.string,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutNavbar)
