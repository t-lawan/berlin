import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { startTransition } from "../../store/action"
import { getCurrentLanguageString } from "../../utility/helper"
import { AboutComponentWrapper } from "../about/about.styles"
import PracticalInformationPage from "./practical-information-page"
import PracticalInformationAdmission from "./practical-information-admission";

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
    case "/de/praktische-information/admission":
      renderComponent = <PracticalInformationAdmission content={content} />
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
