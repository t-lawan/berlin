import React from "react"
import UpcomingEvents from "../components/events/upcomingevents"
import Layout from "../components/layout/layout"
import { PageWrapper,PageTitle } from "./page.styles"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import SEO from "../components/seo/seo"
import NewsList from "../components/news/newslist";
import ImageGalleryResource from "../partials/ImageGalleryResource";


const ExRotaprint = props => {
  const language = getCurrentLanguageString(props.languages)
  let content = props.pageContext;
  let title = content.title ? content.title : '';
  const renderComponent = (
    <PageWrapper>
      <SEO
        title={title}
        description={`${props.pageContext.slug}`}
        lang={props.pageContext.language}
      />

      <PageTitle> {title} </PageTitle>
        {content.acf[language].image_gallery ? <ImageGalleryResource ids={content.acf[language].image_gallery} /> : null}
      <div
        dangerouslySetInnerHTML={{
          __html: content.acf[language].exrota_info,
        }}
      />
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

export default connect(
  mapStateToProps,
  null
)(ExRotaprint)
