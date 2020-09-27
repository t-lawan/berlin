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

const ExchangeNavbar = props => {
  let items = [
    {
      EN: {
        title: "exchange",
        slug: "exchange",
      },
      DE: {
        title: "austausch",
        slug: "austausch",
      },
      isLive: true,
    },
    {
      EN: {
        title: "gatherings",
        slug: "exchange/gatherings",
      },
      DE: {
        title: "gatherings",
        slug: "austausch/gatherings",
      },
      isLive: true,
    },
    {
      EN: {
        title: "tours",
        slug: "exchange/tours",
      },
      DE: {
        title: "rundgänge",
        slug: "austausch/rundgaenge",
      },
      isLive: true,
    },
    {
      EN: {
        title: "tandem thursday",
        slug: "exchange/tandem-thursday",
      },
      DE: {
        title: "tandem-donnerstag",
        slug: "austausch/tandem-donnerstag",
      },
      isLive: true,
    },
    {
      EN: {
        title: "family hours",
        slug: "exchange/family-hours",
      },
      DE: {
        title: "familienzeit",
        slug: "austausch/familienzeit",
      },
      isLive: true,
    },
    {
      EN: {
        title: "curatorial workshop",
        slug: "exchange/curatorial-workshop",
      },
      DE: {
        title: "curatorial workshop",
        slug: "austausch/curatorial-workshop",
      },
      isLive: true,
    },
    {
      EN: {
        title: "mediation kit",
        slug: "exchange/mediation-kit",
      },
      DE: {
        title: "vermittlungskit",
        slug: "austausch/vermittlungskit",
      },
      isLive: true,
    }
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

ExchangeNavbar.propTypes = {
  currentPage: PropTypes.string,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeNavbar)
