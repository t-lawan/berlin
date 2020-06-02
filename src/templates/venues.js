import React from "react"
import { connect } from "react-redux"
import NewsList from "../components/news/newslist"
import UpcomingEvents from "../components/events/upcomingevents"
import SEO from "../components/seo/seo"
// import { getCurrentLanguageString, pageMap } from "../utility/helper"
import Layout from "../components/layout/layout"
import VenueList from "../components/venues/venue-list";
import { PageWrapper } from "./page.styles";

const Venues = props => {
  const renderComponent = (
    <PageWrapper>
      <SEO
        title={content[props.pageContext.language.toUpperCase()].title}
        description={content[props.pageContext.language.toUpperCase()].title}
        lang={props.pageContext.language}
        // pathname={`${path[props.pageContext.language.toUpperCase()]}/${
        //   publication.slug
        // }`}
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

let content = {
    EN: {
      title: "Venues",
    },
    DE: {
      title: "Venues",
    },
  }

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(mapStateToProps, null)(Venues)
