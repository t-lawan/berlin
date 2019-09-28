import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import SEO from "../components/seo/seo"
import {
  TwoColumnPageWrapper,
  PageWrapper,
  ResourcePublisherLink,
  PressArrowDown,
  PressReleaseLink,
  ResourceImageWrapper,
} from "./page.styles"
import { Convert } from "../utility/convert"
import UpcomingEvents from "../components/events/upcomingevents"
import { getDocument } from "../store/selector"
import ImageResource from "../partials/ImageResource"
import ImageGalleryResource from "../partials/ImageGalleryResource"
import ExternalLink from "../partials/ExternalLink"
import { Color } from "../index.styles"
import RelatedResources from "../components/resources/related-resources"
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons"
import ResourceNavigator from "../components/resources/resource-navigator"

const Resource = props => {
  const language = getCurrentLanguageString(props.languages)
  const resourceInfo = props.pageContext
  const r = Convert.toResourceModel(resourceInfo)
  let renderComponent

  let resourceIds = []
  if (props.resources.length !== 0) {
    resourceIds = props.resources.map(res => {
      return res.id
    })
    resourceIds = getRandomIds(props.resources, 4)
  }
  switch (r.type) {
    case "image":
      const image = getDocument(props.documents, r.image)
      renderComponent = (
        <PageWrapper colour={Color.yellow}>
          <ResourceNavigator id={r.id} />
          <ImageResource id={r.image} withCaption={false} />
          <TwoColumnPageWrapper>
            <div>
              <p> {r.title}</p>
              <p> {r.author}</p>
              <ResourcePublisherLink target="_blank" href={r.external_url}>
                {" "}
                {r.external_url_label}
              </ResourcePublisherLink>
            </div>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: r.description,
                }}
              />
            </div>
          </TwoColumnPageWrapper>
          <RelatedResources ids={resourceIds} />
        </PageWrapper>
      )
      break
    case "imagegallery":
      r.image_gallery = r.image_gallery.map(image => {
        return image.wordpress_id
      })
      renderComponent = (
        <PageWrapper colour={Color.yellow}>
          <ResourceNavigator id={r.id} />
          <ResourceImageWrapper>
            <ImageGalleryResource ids={r.image_gallery} />
          </ResourceImageWrapper>
          <TwoColumnPageWrapper>
            <div>
              <p> {r.title}</p>
              <p> {r.author}</p>
              <p> {r[language].year}</p>
            </div>
            <div>
              <p
                dangerouslySetInnerHTML={{
                  __html: r.description,
                }}
              />
            </div>
          </TwoColumnPageWrapper>
          <RelatedResources ids={resourceIds} />
        </PageWrapper>
      )
      break
    case "text":
      renderComponent = (
        <PageWrapper colour={Color.yellow}>
          <ResourceNavigator id={r.id} />
          <TwoColumnPageWrapper>
            <div>
              {/* <ImageResource id={r.thumbnail_image} withCaption={false} /> */}
              {/* <ExternalLink id={r.text_based_resource[0].document_upload}>
                <PressArrowDown icon={faLongArrowAltDown} />
                <span> Download</span>{" "}
              </ExternalLink> */}
              <p> Language: {r.text_based_resource[0].document_language}</p>
            </div>
            <div>
              <h1> {r.title}</h1>
              <p> {r.author}</p>
              <p>
                In:{" "}
                <ResourcePublisherLink
                  target="_blank"
                  href={r.publisher.external_url}
                >
                  {r.publisher.title}
                </ResourcePublisherLink>
              </p>
              <p> {r[language].year}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: r.text_based_resource[0].free_text_entry,
                }}
              />
            </div>
          </TwoColumnPageWrapper>
          <RelatedResources ids={resourceIds} />
        </PageWrapper>
      )
      break
    default:
      renderComponent = (
        <TwoColumnPageWrapper>
          <div>
            <p>Hello </p>
          </div>
          <div></div>
        </TwoColumnPageWrapper>
      )
  }

  return (
    <>
      <SEO
        title={`${resourceInfo.slug}`}
        description={`${resourceInfo.slug}`}
        lang={resourceInfo.language}
      />
      <Layout
        firstColumn={renderComponent}
        numberOfColumnsIsTwo={false}
        thirdColumn={<UpcomingEvents />}
      />
    </>
  )
}

const getRandomIds = (resources, numberOfIds) => {
  let ints = []
  for (let i = 0; i < numberOfIds; i++) {
    ints.push(resources[Math.floor(Math.random() * resources.length)].id)
  }
  return ints
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
    resources: state.resources,
  }
}

export default connect(
  mapStateToProps,
  null
)(Resource)
