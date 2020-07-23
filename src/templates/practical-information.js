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
// import PracticalInformationComponents from "../components/practical-information/practical-information-components";
import PracticalInformationPage from "../components/practical-information/practical-information-page"

const PracticalInformation = props => {
  const language = getCurrentLanguageString(props.languages)
  const pageInfo = props.pageContext
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
        title={`${content[pageInfo.language.toUpperCase()].seo_title}`}
        description={description}
        lang={pageInfo.language}
        pathname={`${path[props.pageContext.language.toUpperCase()]}`}
      />
      <div>
        <PageTitle
          dangerouslySetInnerHTML={{
            __html: content[language].title,
          }}
        />
        {pageInfo.acf[language].address_info ? (
          <TextBlockSideBarPage>
            {pageInfo.acf[language].address_info.map((address, index) => (
              <p key={index}> {address.address_line} </p>
            ))}
          </TextBlockSideBarPage>
        ) : null}
        {pageInfo.acf[language].opening_times ? (
          <TextBlockSideBarPage>
            <p>{content[language].opening_hours}</p>
            {pageInfo.acf[language].opening_times.map((time, index) => (
              <p key={index}> {time.opening_time_line} </p>
            ))}
          </TextBlockSideBarPage>
        ) : null}
        {pageInfo.acf.directions ? (
          <TextBlockSideBarPage>
            <p>{content[language].access}</p>
            {pageInfo.acf.directions.map((directions, index) => (
              <p key={index}> {directions.directions_line} </p>
            ))}
            <ResourcePublisherLink
              target="_blank"
              rel="noopener noreferrer"
              href={pageInfo.acf.google_map_venue_link}
            >
              {" "}
              {content[language].directions}
            </ResourcePublisherLink>
          </TextBlockSideBarPage>
        ) : null}
        {pageInfo.acf[language].access_block ?
        <TextBlockSideBarPage>
          {pageInfo.acf[language].access_block.map((item, index) => (
            <p key={index}> {item.access_line} </p>
          ))}
        </TextBlockSideBarPage> : null}
        {/* <PracticalInformationNavbar currentPage={pageInfo.slug} /> */}
      </div>
      <div>
        <PracticalInformationPage content={pageInfo} />
        <PaddingDiv> </PaddingDiv>
      </div>
      {/* <PracticalInformationComponents content={pageInfo}/> */}
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
const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
  }
}

export default connect(mapStateToProps, null)(PracticalInformation)
