import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { startTransition } from "../../store/action"
import { getCurrentLanguageString } from "../../utility/helper"
import { AboutComponentWrapper } from "../about/about.styles"
import PracticalInformationPage from "./practical-information-page"
import PracticalInformationAdmission from "./practical-information-admission"
import PracticalInformationAccess from "./practical-information-access"
import PracticalInformationOpening from "./practical-information-opening"
import PracticalInformationAntidisc from "./practical-information-anti-discrimination-clause"
import PracticalInformationFaq from "./practical-information-faq"
import PracticalInformationAccommodation from "./practical-information-accommodation";
import PracticalInformationAntiDiscriminationClause from "./practical-information-anti-discrimination-clause";

const PracticalInformationComponents = props => {
  const content = props.content
  let renderComponent
  let language = getCurrentLanguageString(props.languages)

  switch (content.slug) {
    case "/practical-information":
      renderComponent = <PracticalInformationPage content={content} />
      break
    case "/de/praktische-information":
      renderComponent = <PracticalInformationPage content={content} />
      break
    case "/practical-information/admission":
      renderComponent = <PracticalInformationAdmission content={content} />
      break
    case "/de/praktische-information/eintritt":
      renderComponent = <PracticalInformationAdmission content={content} />
      break
    case "/practical-information/accommodation":
      renderComponent = <PracticalInformationAccommodation content={content} />
      break
    case "/de/praktische-information/unterkunft":
      renderComponent = <PracticalInformationAccommodation content={content} />
      break
    case "/practical-information/access":
      renderComponent = <PracticalInformationAccess content={content} />
      break
    case "/de/praktische-information/anfahrt":
      renderComponent = <PracticalInformationAccess content={content} />
      break
    case "/practical-information/opening-hours":
      renderComponent = <PracticalInformationOpening content={content} />
      break
    case "/de/praktische-information/öffnungszeiten":
      renderComponent = <PracticalInformationOpening content={content} />
      break
    case "/practical-information/anti-discrimination-clause":
      renderComponent = <PracticalInformationAntiDiscriminationClause content={content} />
      break
    case "/de/praktische-information/antidiskriminierungsklausel":
      renderComponent = <PracticalInformationAntiDiscriminationClause content={content} />
      break
    case "/practical-information/faq":
      renderComponent = <PracticalInformationFaq content={content} />
      break
    case "/de/praktische-information/faq":
      renderComponent = <PracticalInformationFaq content={content} />
      break
    default:
      renderComponent = <p> </p>
  }
  return <AboutComponentWrapper> {renderComponent}</AboutComponentWrapper>
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

PracticalInformationComponents.propTypes = {
  currentPage: PropTypes.string,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PracticalInformationComponents)
