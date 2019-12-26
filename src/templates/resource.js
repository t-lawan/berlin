import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import SEO from "../components/seo/seo"
import {
  TwoColumnPageWrapper,
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
import ResourceImage from "../components/resources/resource-image"
import ResourceImageGallery from "../components/resources/resource-image-gallery"
import ResourceText from "../components/resources/resource-text"
import ResourceAudio from "../components/resources/resource-audio";
import resourceVideo from "../components/resources/resource-video";

const Resource = props => {
  const language = getCurrentLanguageString(props.languages)
  const resourceInfo = props.pageContext
  const r = Convert.toResourceModel(resourceInfo);

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
      renderComponent = <ResourceImage resource={r} />
      break;
    case "imagegallery":
      r.image_gallery = r.image_gallery.map(image => {
        return image.wordpress_id
      })
      renderComponent = <ResourceImageGallery resource={r} />
      break;
    case "text":
      renderComponent = <ResourceText resource={r} />
      break;
    case "mp3":
      renderComponent = <ResourceAudio resource={r} />
      break;
    case "video":
      renderComponent = <ResourceVideo resource={r} />
      break;
    default:
      renderComponent = (
        <TwoColumnPageWrapper>
          <div>
            <p> </p>
          </div>
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
