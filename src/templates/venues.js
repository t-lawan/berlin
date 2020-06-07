import React from "react"
import { connect } from "react-redux"
import {
  getCurrentLanguageString,
  createProperty
} from "../utility/helper"
import NewsList from "../components/news/newslist"
import UpcomingEvents from "../components/events/upcomingevents"
import SEO from "../components/seo/seo"
// import { getCurrentLanguageString, pageMap } from "../utility/helper"
import Layout from "../components/layout/layout"
import VenueList from "../components/venues/venue-list";
import { PageWrapper, PageTitle } from "./page.styles";

const Venues = props => {
  const language = getCurrentLanguageString(props.languages)
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

let content = {
    EN: {
      title: "Venues",
    },
    DE: {
      title: "Orte",
    },
  }

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(mapStateToProps, null)(Venues)
