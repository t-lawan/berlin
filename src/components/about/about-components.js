import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { AboutComponentWrapper, AboutPageContent } from "./about.styles"
import AboutFunding from "./about-funding"
import AboutTeamBlock from "./about-team-block"
import AboutAdvisoryBoard from "./about-advisory-board"
import AboutOrganisation from "./about-organisation"
import { PageTitle } from "../../templates/page.styles";

const AboutComponents = props => {
  const content = props.content
  let renderComponent
  const language = getCurrentLanguageString(props.languages)
  switch (content.slug) {
    case "about":
      renderComponent = (
        <>
          <PageTitle> {language === "EN" ? "About" : "über"}</PageTitle>
          <AboutPageContent
            dangerouslySetInnerHTML={{
              __html: content.acf[`${language}_row`].description,
            }}
          />
        </>
      )
      break
    case "uber":
    renderComponent = (
      <>
        <PageTitle> {language === "EN" ? "About" : "über"}</PageTitle>
        <AboutPageContent
          dangerouslySetInnerHTML={{
            __html: content.acf[`${language}_row`].description,
          }}
        />
      </>
    )
      break
    case "/about/advisory-board":
      renderComponent = (
        <AboutAdvisoryBoard team_block={content.acf.team_block} />
      )
      break
    case "/de/uber/beirat":
      renderComponent = (
        <AboutAdvisoryBoard team_block={content.acf.team_block} />
      )
      break
    case "/about/support":
      renderComponent = <AboutFunding funding={content.acf.funding} />
      break
    case "/de/uber/unterstutzung":
      renderComponent = <AboutFunding funding={content.acf.funding} />
      break
    case "/about/team":
      renderComponent = <AboutTeamBlock team={content.acf.team_block} />
      break
    case "/de/uber/team":
      renderComponent = <AboutTeamBlock team={content.acf.team_block} />
      break
    case "/about/organization-2":
      renderComponent = (
        <AboutOrganisation team_block={content.acf.team_block} />
      )
      break
    case "/de/uber/verein":
      renderComponent = (
        <AboutOrganisation team_block={content.acf.team_block} />
      )
      break
    default:
      renderComponent = <div></div>
  }

  return <AboutComponentWrapper>{renderComponent}</AboutComponentWrapper>
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

AboutComponents.propTypes = {
  content: PropTypes.object,
}

export default connect(
  mapStateToProps,
  null
)(AboutComponents)
