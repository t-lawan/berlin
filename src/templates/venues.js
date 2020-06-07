import React from "react"
import Layout from "../components/layout/layout"
import UpcomingEvents from "../components/events/upcomingevents"
import {
  getCurrentLanguageString,
  pageMap,
} from "../utility/helper"
import { Convert } from "../utility/convert"
import SEO from "../components/seo/seo"
import { PageWrapper, PageTitle } from "./page.styles"
import { Color } from "../index.styles"
import NewsList from "../components/news/newslist";
import VenueItem from "../components/venues/venue-item";

const Venue = props => {
  const language = getCurrentLanguageString(props.languages)
  const venuePageInfo = props.pageContext
  const venue = Convert.toVenueModel(props.pageContext)

  const renderComponent = (
    <PageWrapper colour={Color.yellow}>
      <SEO
        title={venue[venuePageInfo.language.toUpperCase()].venue_name}
        description={venue[venuePageInfo.language.toUpperCase()].venue_name}
        lang={venuePageInfo.language}
      />
      <PageTitle
          dangerouslySetInnerHTML={{
            __html: content[language].title,
          }}
        />
      <VenueList />
    </PageWrapper>
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

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

let content = {
    EN: {
      title: "Venues",
    },
    DE: {
      title: "Orte",
    },
}



export default connect(mapStateToProps, null)(Venues)
