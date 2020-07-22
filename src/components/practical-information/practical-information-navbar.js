import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { startTransition } from "../../store/action"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import {
  AboutNavItemLink,
  AboutNavItem,
  AboutSideNavbar,
} from "../about/about.styles"

const PracticalInformationNavbar = props => {
  let items = [
    {
      EN: {
        title: "Practical Information",
        slug: "practical-information",
      },
      DE: {
        title: "Praktische Information",
        slug: "praktische-information",
      },
      isLive: true,
    },
    {
      EN: {
        title: "Opening Hours",
        slug: "practical-information/opening-hours",
      },
      DE: {
        title: "Opening Hours",
        slug: "praktische-information/öffnungszeiten",
      },
      isLive: false,
    },
    {
      EN: {
        title: "Admission",
        slug: "practical-information/admission",
      },
      DE: {
        title: "Admission",
        slug: "praktische-information/eintritt",
      },
      isLive: true,
    },
    {
      EN: {
        title: "Access",
        slug: "practical-information/access",
      },
      DE: {
        title: "Access",
        slug: "praktische-information/anfahrt",
      },
      isLive: true,
    },
    {
      EN: {
        title: "Accommodation",
        slug: "practical-information/accommodation",
      },
      DE: {
        title: "Accommodation",
        slug: "praktische-information/unterkunft",
      },
      isLive: false,
    },


    {
      EN: {
        title: "FAQ",
        slug: "practical-information/faq",
      },
      DE: {
        title: "FAQ",
        slug: "praktische-information/faq",
      },
      isLive: false,
    },
  ]
  let language = getCurrentLanguageString(props.languages)
  const isCurrentPage = index => {
    let slug =
      language === "DE"
        ? `/de/${items[index][language].slug}`
        : `/${items[index][language].slug}`
    return slug === props.currentPage
  }

  items = items.filter((x) => {
    return x.isLive;
  })

  return (
    <AboutSideNavbar>
      {items.map((item, index) => (
        <AboutNavItemLink
          to={createPath(language, item[language].slug)}
          key={index}
          onClick={() => props.startTransition()}
        >
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
    startTransition: () => dispatch(startTransition()),
  }
}

PracticalInformationNavbar.propTypes = {
  currentPage: PropTypes.string,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PracticalInformationNavbar)
