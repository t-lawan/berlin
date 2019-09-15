import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import Layout from "../components/layout/layout"
import { Convert } from "../utility/convert"
import { getCurrentLanguageString } from "../utility/helper"
import UpcomingEvents from "../components/events/upcomingevents";
import SEO from "../components/seo/seo";
const ExhibitionPageWrapper = styled.div`
  padding: 2em 1em;
`

const Exhibition = props => {
  const language = getCurrentLanguageString(props.languages)
  const exhibition = Convert.toExhibitionModel(props.pageContext)
  const renderComponent = (
    <ExhibitionPageWrapper>
      <SEO
          title={`${exhibition.slug}`}
          description={`${exhibition.slug}`}
          lang={props.pageContext.language}
        />
      <h4>{exhibition[language].title}</h4>
      <h5>{exhibition[language].subtitle}</h5>
      <p
        dangerouslySetInnerHTML={{
          __html: exhibition[language].description,
        }}
      />
    </ExhibitionPageWrapper>
  )
  return (
    <Layout
      firstColumn={renderComponent}
      numberOfColumnsIsTwo={false}
      thirdColumn={<UpcomingEvents/>}
    />
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(
  mapStateToProps,
  null
)(Exhibition)
