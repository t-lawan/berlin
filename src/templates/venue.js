import React from "react"
import { connect } from "react-redux"
import Layout from "../components/layout/layout"
import UpcomingEvents from "../components/events/upcomingevents"
import { Convert } from "../utility/convert"
import { getCurrentLanguageString, pageMap } from "../utility/helper"
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
      <VenueItem venue={venue} />
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
const content = {
  EN: {
    title: "venues",
  },
  DE: {
    title: "orte",
  },
}

const mapStateToProps = state => {
   return {
    languages: state.languages,
  }
 }

export default connect(
  mapStateToProps,
  null
)(Venue)
// export default Venue;