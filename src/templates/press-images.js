import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { getCurrentLanguageString, createProperty } from "../utility/helper"
import SEO from "../components/seo/seo"
import UpcomingEvents from "../components/events/upcomingevents"
import { PageWrapper, TextBlock } from "./page.styles"
import Layout from "../components/layout/layout"
import ImageGalleryResource from "../partials/ImageGalleryResource"
import ImageResource from "../partials/ImageResource"
import { Color } from "../index.styles";
import NewsList from "../components/news/newslist";

const PressImagesGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  padding: 1em;
  border-bottom: ${props =>
    props.borderBottom ? "1px solid rgba(0,0,0,0.1)" : "none"};
  a {
    text-decoration-color: ${Color.red};
  }
`
const PressImages = props => {
  const language = getCurrentLanguageString(props.languages)
  const pageInfo = props.pageContext
  const generateSection = (item, index) => {
    let renderSection
    switch (item.press_row_type) {
      case "section":
        renderSection = (
          <TextBlock key={index}>
            <div
              dangerouslySetInnerHTML={{
                __html: item[createProperty("section_header", language)],
              }}
            />
          </TextBlock>
        )
        break
      case "grouptitle":
        renderSection = (
          <p key={index}>
            {" "}
            {item[createProperty("photo_group_title", language)]}
          </p>
        )
        break
      case "groupdownload":
        renderSection = (
          <div key={index}>
            <p key={index}>
              {" "}
              {item[createProperty("image_group_download_label", language)]}
            </p>
            <ImageGalleryResource ids={ids} />
          </div>
        )
        break
      case "images":
        renderSection = <p key={index}> images</p>
        break
      default:
        renderSection = <p key={index}> def</p>
        break
    }

    return renderSection
  }

  const renderComponent = (
    <PageWrapper>
      <SEO
        title={`${pageInfo.title}`}
        description={`${pageInfo.slug}`}
        lang={pageInfo.language}
      />
      <p>Press images</p>
      <TextBlock>
        <div
          dangerouslySetInnerHTML={{
            __html:
              pageInfo.acf.press_images[0][
                createProperty("section_header", language)
              ],
          }}
        />
      </TextBlock>
      <PressImagesGrid>
        <p>
          {" "}
          {
            pageInfo.acf.press_images[1][
              createProperty("photo_group_title", language)
            ]
          }
        </p>
        <a href="" target="_blank">
          {" "}
          {
            pageInfo.acf.press_images[2][
              createProperty("image_group_download_label", language)
            ]
          }
        </a>
      </PressImagesGrid>
      <div>
        {pageInfo.acf.press_images[3].images.map((item, index) => (
          <PressImagesGrid key={index} borderBottom>
            <ImageResource id={item.wordpress_id} withCaption={false} />
            <div
              dangerouslySetInnerHTML={{
                __html: item.acf[createProperty("caption", language)],
              }}
            />
          </PressImagesGrid>
        ))}
      </div>
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
)(PressImages)
