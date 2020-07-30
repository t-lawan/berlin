import React from "react"
import UpcomingEvents from "../components/events/upcomingevents"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import {
  getCurrentLanguageString,
  truncateText,
  pageMap,
} from "../utility/helper"
import SEO from "../components/seo/seo"
import {
  TwoColumnPageWrapper,
  PaddingDiv,
  PageTitle,
  TextBlockSideBarPage,
  ResourcePublisherLink,
} from "./page.styles"
import NewsList from "../components/news/newslist"
import striptags from "striptags"
import PracticalInformationNavbar from "../components/practical-information/practical-information-navbar"
import PracticalInformationComponents from "../components/practical-information/practical-information-components";

const PracticalInformation = props => {
  const language = getCurrentLanguageString(props.languages)
  const pageInfo = props.pageContext
  let title =  PracticalInformationTitle[pageInfo.title] ? PracticalInformationTitle[pageInfo.title][`${pageInfo.language.toUpperCase()}`] : PracticalInformationTitle['Practical Information'][`${pageInfo.language.toUpperCase()}`]
  // let title = truncateText(striptags(pageInfo.acf[`${pageInfo.language.toUpperCase()}`]))
  let description = truncateText(
    striptags(
      pageInfo.acf[`${pageInfo.language.toUpperCase()}`].venue_description
    )
  )
  let path = pageMap.find(pg => {
    return pg["EN"] == "practical-information"
  })

  const renderComponent = (
    <TwoColumnPageWrapper>
      <SEO
        title={`${title}`}
        description={description}
        lang={pageInfo.language}
        pathname={`${path[props.pageContext.language.toUpperCase()]}`}
      />
      <PracticalInformationNavbar currentPage={pageInfo.slug} />
      <PracticalInformationComponents content={pageInfo}/>

    </TwoColumnPageWrapper>
  )

  let thirdColumn = (
    <>
      <NewsList />
      <UpcomingEvents />
    </>
  )

  return (
    <Layout
      firstColumn={renderComponent}
      numberOfColumnsIsTwo={false}
      thirdColumn={thirdColumn}
    />
  )
}
const content = {
  EN: {
    opening_hours: "Opening hours",
    access: "Access",
    title: "practical information",
    directions: "Directions",
    seo_title: "Practical information",
  },
  DE: {
    opening_hours: "Öffnungszeiten",
    title: "praktische information",
    access: "Anfahrt",
    directions: "Karte",
    seo_title: "Praktische Information",
  },
}

const PracticalInformationTitle  = {
  "Practical Information": {
    EN: 'Practical information',
    DE: 'Praktische information'
  },
  "Admission": {
    EN: 'Admission',
    DE: 'Eintritt'
  },
  "Accommodation": {
    EN: 'Accommodation',
    DE: 'Unterkunft'
  },
  "Access": {
    EN: 'Access',
    DE: 'Anfahrt'
  },
  "Opening Hours": {
    EN: 'Opening hours',
    DE: 'Öffnungszeiten'
  },
  "Anti-discrimination clause": {
    EN: 'Anti-discrimination clause',
    DE: 'Antidiskriminierungsklausel'
  },
  "FAQ": {
    EN: 'FAQ',
    DE: 'FAQ'
  },

}
const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
  }
}

export default connect(mapStateToProps, null)(PracticalInformation)
