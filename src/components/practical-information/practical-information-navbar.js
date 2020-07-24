import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { startTransition } from "../../store/action"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import {
  AboutNavItemLink,
  AboutNavItem,
  AboutSideNavbar,
  DesktopSub,
  MobileSub,
} from "../about/about.styles"

const PracticalInformationNavbar = props => {
  let items = [
    {
      EN: {
        title: "practical information",
        slug: "practical-information",
      },
      DE: {
        title: "praktische information",
        slug: "praktische-information",
      },
      isLive: true,
    },
    {
      EN: {
        title: "opening hours",
        slug: "practical-information/opening-hours",
      },
      DE: {
        title: "öffnungszeiten",
        slug: "praktische-information/oeffnungszeiten",
      },
      isLive: true,
    },
    {
      EN: {
        title: "admission",
        slug: "practical-information/admission",
      },
      DE: {
        title: "eintritt",
        slug: "praktische-information/eintritt",
      },
      isLive: true,
    },
    {
      EN: {
        title: "access",
        slug: "practical-information/access",
      },
      DE: {
        title: "anfahrt",
        slug: "praktische-information/anfahrt",
      },
      isLive: true,
    },
    {
      EN: {
        title: "accommodation",
        slug: "practical-information/accommodation",
      },
      DE: {
        title: "unterkunft",
        slug: "praktische-information/unterkunft",
      },
      isLive: false,
    },
    EN: {
        title: "anti-discrimination clause",
        slug: "practical-information/anti-discrimination-clause",
      },
      DE: {
        title: "antidiskriminierungsklausel",
        slug: "praktische-information/antidiskriminierungsklausel",
      },
      isLive: true,
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
      isLive: true,
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
            <DesktopSub>{item[language].title.toLowerCase()}</DesktopSub>
            <MobileSub>{item[language].title.toLowerCase()}</MobileSub>
            {/* {item[language].title.toLowerCase()} */}
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
