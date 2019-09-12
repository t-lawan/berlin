import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import SEO from "../components/seo/seo"
import { TwoColumnPageWrapper, PageWrapper } from "./page.styles"
import { Convert } from "../utility/convert"
import UpcomingEvents from "../components/events/upcomingevents"
import { getDocument } from "../store/selector"
import ImageResource from "../partials/ImageResource"
import ImageGalleryResource, {
  GalleryImage,
} from "../partials/ImageGalleryResource"
import ExternalLink from "../partials/ExternalLink";

const Resource = props => {
  const language = getCurrentLanguageString(props.languages)
  const resourceInfo = props.pageContext
  const r = Convert.toResourceModel(resourceInfo)
  let renderComponent

  console.log("Resource", r)

  switch (r.type) {
    case "image":
      const image = getDocument(props.documents, r.image)
      renderComponent = (
        <PageWrapper colour={`rgb(249,239,132)`}>
          <h4> {r.title}</h4>
          <h4> {r.author}</h4>
        </PageWrapper>
      )
      break
    case "imagegallery":
      r.image_gallery = r.image_gallery.map(image => {
        return image.wordpress_id
      })
      renderComponent = (
        <PageWrapper colour={`rgb(249,239,132)`}>
          <PageWrapper>
            <ImageGalleryResource ids={r.image_gallery} />
          </PageWrapper>
          <TwoColumnPageWrapper>
            <div>
              <h4> {r.title}</h4>
              <h4> {r.author}</h4>
              <h4> {r[language].year}</h4>
            </div>
            <div>
              <h4
                dangerouslySetInnerHTML={{
                  __html: r.description,
                }}
              />
            </div>
          </TwoColumnPageWrapper>
        </PageWrapper>
      )
      break
    case "text":
      renderComponent = (
        <PageWrapper colour={`rgb(249,239,132)`}>
          <TwoColumnPageWrapper>
            <div>
              <ImageResource id={r.thumbnail_image} withCaption={false} />
              <ExternalLink id={r.text_based_resource[0].document_upload}> <p> Download</p>  </ExternalLink>
              <p> Language: {r.text_based_resource[0].document_language}</p>

            </div>
            <div>
              <h2> {r.title}</h2>
              <p> {r.author}</p>
              <p> In: {r.publisher.title}</p>
              <p> {r[language].year}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: r.text_based_resource[0].free_text_entry,
                }}
              />
            </div>
          </TwoColumnPageWrapper>
        </PageWrapper>
      )
      break
    default:
      renderComponent = (
        <TwoColumnPageWrapper>
          <div>
            <h4>Hello </h4>
            <h4>Hello </h4>
            <h4>Hello </h4>
            <h4>Hello </h4>
            <h4>Hello </h4>
          </div>
          <div></div>
        </TwoColumnPageWrapper>
      )
  }
  return (
    <Layout
      firstColumn={renderComponent}
      numberOfColumnsIsTwo={false}
      thirdColumn={<UpcomingEvents />}
    />
  )
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
)(Resource)
