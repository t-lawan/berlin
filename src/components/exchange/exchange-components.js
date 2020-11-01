import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import styled from 'styled-components';
import { startTransition } from "../../store/action"
import { getCurrentLanguageString } from "../../utility/helper"
import { AboutComponentWrapper } from "../about/about.styles"
import ExchangePage from "./exchange-page"
import ExchangeGatherings from "./exchange-gatherings"
import ExchangeTours from "./exchange-tours"
import ExchangeTandemThursday from "./exchange-tandem-thursday"
import ExchangeFamilyHours from "./exchange-family-hours"
import ExchangeCuratorialWorkshop from "./exchange-curatorial-workshop"
import ExchangeMediationKit from "./exchange-mediation-kit"

const ExchangeWrapper = styled(AboutComponentWrapper)`
  overflow-y: scroll;
`

const ExchangeComponents = props => {
  const content = props.content
  let renderComponent
  let language = getCurrentLanguageString(props.languages)

  switch (content.slug) {
    case "/exchange":
      renderComponent = <ExchangePage content={content} />
      break
    case "/de/austausch":
      renderComponent = <ExchangePage content={content} />
      break
    case "/exchange/gatherings":
      renderComponent = <ExchangeGatherings content={content} />
      break
    case "/de/austausch/gatherings":
      renderComponent = <ExchangeGatherings content={content} />
      break
    case "/exchange/tours":
      renderComponent = <ExchangeTours content={content} />
      break
    case "/de/austausch/rundgaenge":
      renderComponent = <ExchangeTours content={content} />
      break
    case "/exchange/tandem-thursday":
      renderComponent = <ExchangeTandemThursday content={content} />
      break
    case "/de/austausch/tandem-donnerstag":
      renderComponent = <ExchangeTandemThursday content={content} />
      break
    case "/exchange/family-hours":
      renderComponent = <ExchangeFamilyHours content={content} />
      break
    case "/de/austausch/familienzeit":
      renderComponent = <ExchangeFamilyHours content={content} />
      break
    case "/exchange/curatorial-workshop":
      renderComponent = <ExchangeCuratorialWorkshop content={content} />
      break
    case "/de/austausch/curatorial-workshop":
      renderComponent = <ExchangeCuratorialWorkshop content={content} />
      break
    case "/exchange/mediation-kit":
      renderComponent = <ExchangeMediationKit content={content} />
      break
    case "/de/austausch/vermittlungskit":
      renderComponent = <ExchangeMediationKit content={content} />
      break
    default:
      renderComponent = <p> </p>
  }
  return <ExchangeWrapper> {renderComponent}</ExchangeWrapper>
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

ExchangeComponents.propTypes = {
  currentPage: PropTypes.string,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeComponents)
