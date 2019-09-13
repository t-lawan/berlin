import React from "react"
import UpcomingEvents from "../components/events/upcomingevents"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString, createProperty } from "../utility/helper"
import SEO from "../components/seo/seo"
import { PageWrapper } from "./page.styles"
import styled from "styled-components"
import { getDocument } from "../store/selector"
import { changeGridToOneRow } from "../index.styles"

const PressWrapper = styled.div`
  padding: 2em 1em;
  display: grid;
  grid-template-columns: 3fr 6fr;
  ${changeGridToOneRow}
`

const PressReleaseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 1em;
`
const PressReleaseText = styled.span`
  margin-right: 2.5em;
`

const PressReleaseLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: red;
  }
`

const Press = props => {
  const language = getCurrentLanguageString(props.languages)
  const pressInfo = props.pageContext
  const renderComponent = (
    <PressWrapper>
      <SEO
        title={`${pressInfo.slug}`}
        description={`${pressInfo.slug}`}
        lang={pressInfo.language}
      />
      {/* firstColumn */}
      <div>
        <p>Contact</p>
        {pressInfo.acf.contact_people.map((person, index) => (
          <div key={index}>
            <p> {person.full_name}</p>
            <p> {person[createProperty("position", language)]}</p>
          </div>
        ))}

        {pressInfo.acf.contact_data.map((contact_data, index) => (
          <div key={index}>
            <p> {contact_data.contact_data_line}</p>
          </div>
        ))}
      </div>
      {/* secondColumn */}

      <div>
        <p> Press Releases</p>
        {pressInfo.acf.press_releases.map((press_release, index) => (
          <PressReleaseWrapper key={index}>
            <PressReleaseText> {press_release.date}</PressReleaseText>
            <PressReleaseText>
              <PressReleaseLink
                target="_blank"
                href={getPdf(props.documents, press_release, language)}
              >
                {
                  press_release[
                    createProperty("title_of_press_release_in", language)
                  ]
                }
              </PressReleaseLink>
            </PressReleaseText>
          </PressReleaseWrapper>
        ))}

        <p> Images </p>
        <div
          dangerouslySetInnerHTML={{
            __html: pressInfo.acf[language].images_note,
          }}
        />
      </div>
    </PressWrapper>
  )
  return (
    <Layout
      firstColumn={renderComponent}
      numberOfColumnsIsTwo={false}
      thirdColumn={<UpcomingEvents />}
    />
  )
}

const getPdf = (documents, press_release, language) => {
  const id = press_release[`${language.toLowerCase()}_press_release_pdf`]
  const pdf = getDocument(documents, id)
  return pdf ? pdf.url : ""
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
  }
}

export default connect(
  mapStateToProps,
  null
)(Press)
