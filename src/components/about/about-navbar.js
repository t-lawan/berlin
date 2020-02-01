import React from "react"
import { getCurrentLanguageString, createPath, transitionBackground } from "../../utility/helper"
import { connect } from "react-redux"
import { AboutSideNavbar, AboutNavItem, AboutNavItemLink } from "./about.styles"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

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
        slug: "de/uber/team"
      },
    },
    {
      EN: {
        title: "organization",
        slug: "about/organization-2"
      },
      DE: {
        title: "verein",
        slug: "de/uber/organization-2"
      },
    },
    {
      EN: {
        title: "advisory board",
        slug: "about/advisory-board"
      },
      DE: {
        title: "beirat",
        slug: "de/uber/advisory-board"
      },
    },
    {
      EN: {
        title: "support",
        slug: "about/support"
      },
      DE: {
        title: "support",
        slug: "de/uber/support"
      },
    },
  ]

  const language = getCurrentLanguageString(props.languages)

  const isCurrentPage = index => {
    return `/${items[index][language].slug}` === props.currentPage
  }

  return (
    <AboutSideNavbar>
      {items.map((item, index) => (
        <AboutNavItemLink fade to={createPath(language, item['EN'].slug)} key={index}>
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

AboutNavbar.propTypes = {
  currentPage: PropTypes.string,
}

export default connect(
  mapStateToProps,
  null
)(AboutNavbar)
