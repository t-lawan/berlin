import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { pageMap } from "../utility/helper"
import SEO from "../components/seo/seo"
import {
  TwoColumnPageWrapper,
} from "./page.styles"
import { Convert } from "../utility/convert"
import UpcomingEvents from "../components/events/upcomingevents"
import ResourceImage from "../components/resources/resource-image"
import ResourceImageGallery from "../components/resources/resource-image-gallery"
import ResourceText from "../components/resources/resource-text"
import ResourceAudio from "../components/resources/resource-audio";
import NewsList from "../components/news/newslist";
import ResourceVideo from "../components/resources/resource-video";

const Resource = props => {
  const resourceInfo = props.pageContext
  const r = Convert.toResourceModel(resourceInfo);

  let renderComponent
  let path = pageMap.find((pg) => {
    return pg["EN"] == "resource"
  })


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

  let thirdColumn = (
    <>
      <NewsList />
      <UpcomingEvents />
    </>
  )


  return (
    <>
      <SEO
        title={`${resourceInfo.acf.title}`}
        description={`${resourceInfo.acf.title}`}
        lang={resourceInfo.language}
        pathname={`${path[resourceInfo.language.toUpperCase()]}/${r.slug}`}

      />
      <Layout
        firstColumn={renderComponent}
        numberOfColumnsIsTwo={false}
        thirdColumn={thirdColumn}
      />
    </>
  )
}
const mapStateToProps = state => {
  return {
    documents: state.documents,
  }
}

export default connect(
  mapStateToProps,
  null
)(Resource)
