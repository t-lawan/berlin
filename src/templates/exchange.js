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
import { TwoColumnPageWrapper, PaddingDiv, PageTitle, TextBlockSideBarPage, ResourcePublisherLink } from "./page.styles"
import NewsList from "../components/news/newslist"
import striptags from "striptags"
import ExchangeNavbar from "../components/exchange/exchange-navbar"
import ExchangeComponents from "../components/exchange/exchange-components";

const Exchange = props => {
  const language = getCurrentLanguageString(props.languages)
  const pageInfo = props.pageContext
  let title =  ExchangeTitle[pageInfo.title] ? ExchangeTitle[pageInfo.title][`${pageInfo.language.toUpperCase()}`] : ExchangeTitle['Exchange'][`${pageInfo.language.toUpperCase()}`]
  // let title = truncateText(striptags(pageInfo.acf[`${pageInfo.language.toUpperCase()}`]))
  let description = truncateText(
    striptags(
      pageInfo.acf[`${pageInfo.language.toUpperCase()}`].venue_description
    )
  )
  let path = pageMap.find(pg => {
    return pg["EN"] == "exchange"
  })

  const renderComponent = (
    <TwoColumnPageWrapper>
      <SEO
        title={`${title}`}
        description={description}
        lang={pageInfo.language}
        pathname={`${path[props.pageContext.language.toUpperCase()]}`}
      />
      <ExchangeNavbar currentPage={pageInfo.slug} />
      <ExchangeComponents content={pageInfo}/>
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
    seo_title: "Exchange",
  },
  DE: {
    seo_title: "Austausch",
  },
}

const ExchangeTitle  = {
  "Exchange": {
    EN: 'Exchange',
    DE: 'Austausch'
  },
  "Gatherings": {
    EN: 'Gatherings',
    DE: 'Gatherings'
  },
  "Tours": {
    EN: 'Tours',
    DE: 'Rundgänge'
  },
  "Tandem Thursday": {
    EN: 'Tandem Thursday',
    DE: 'Tandem-Donnerstag'
  },
  "Family Hours": {
    EN: 'Family hours',
    DE: 'Familienzeit'
  },
  "Curatorial workshop": {
    EN: 'Curatorial workshop',
    DE: 'Curatorial Workshop'
  },
}
const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
  }
}

export default connect(mapStateToProps, null)(Exchange)
