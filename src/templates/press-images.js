import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { getCurrentLanguageString, createProperty } from "../utility/helper"
import SEO from "../components/seo/seo"
import UpcomingEvents from "../components/events/upcomingevents"
import { PageWrapper, PageTitle, } from "./page.styles"
import Layout from "../components/layout/layout"
import ImageResource from "../partials/ImageResource"
import { Color, size } from "../index.styles"
import NewsList from "../components/news/newslist"
import { getDocument } from "../store/selector"

const PressImagesGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  padding: 1em 0em;
  border-bottom: ${props =>
    props.borderBottom ? "1px solid rgba(0,0,0,0.1)" : "none"};
  a {
    text-decoration-color: ${Color.red};
  }
  @media (max-width: ${size.mobileM}) {
    padding: 0.5rem 0;
  }
`
const PressImageTitleHeader = styled.h1`
  font-size: 1.55em;
  margin: -0.3em 0 1em;
  text-transform: lowercase;
  @media (max-width: ${size.tabletL}) {
    display: block;
  }
  @media (min-width: ${size.mobileL}) {
    font-size: 1.2em;
    margin-bottom: 1.5em;
  }
  @media (min-width: ${size.laptop}) {
    font-size: 1.0em;
    text-transform: none;
    margin-bottom: 1em;
  }
  @media (min-width: ${size.laptopM}) {
    font-size: 1.05em;
    margin-bottom: 1em;
  }
  @media (min-width: ${size.laptopL}) {
    font-size: 1.1em;
    margin-bottom: 1em;
  }
`
const PressImageTitle = styled.p`
  margin-top: 0.5rem;
  @media (max-width: ${size.mobileM}) {
    margin-top: 0.2rem;
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
          <div key={index}>
            <PressImageTitle>
              {" "}
              {item[createProperty("photo_group_title", language)]}
            </PressImageTitle>
            {item.images
              ? item.images.map((i, id) => (
                  <PressImagesGrid key={id} borderBottom>
                    {getDocument(props.documents, i.wordpress_id) ? (
                      <a
                        href={getDocument(props.documents, i.wordpress_id).url}
                        target="__blank"
                        rel="noopener noreferrer"
                      >
                        <ImageResource
                          id={i.wordpress_id}
                          withCaption={false}
                        />
                      </a>
                    ) : null}

                    <div
                      dangerouslySetInnerHTML={{
                        __html: i.acf[createProperty("caption", language)],
                      }}
                    />
                  </PressImagesGrid>
                ))
              : null}
          </div>
        )
        break
      case "grouptitle":
        renderSection = (
          <div key={index}>
            <PressImageTitle>
              {" "}
              {item[createProperty("photo_group_title", language)]}
            </PressImageTitle>
            {item.images
              ? item.images.map((i, id) => (
                  <PressImagesGrid key={id} borderBottom>
                    {getDocument(props.documents, i.wordpress_id) ? (
                      <a
                        href={getDocument(props.documents, i.wordpress_id).url}
                        target="__blank"
                        rel="noopener noreferrer"
                      >
                        <ImageResource
                          id={i.wordpress_id}
                          withCaption={false}
                        />
                      </a>
                    ) : null}

                    <div
                      dangerouslySetInnerHTML={{
                        __html: i.acf[createProperty("caption", language)],
                      }}
                    />
                  </PressImagesGrid>
                ))
              : null}
          </div>
        )
        break
      case "images":
        renderSection = (
          <div key={index}>
            {item.images
              ? item.images.map((i, id) => (
                  <PressImagesGrid key={id} borderBottom>
                    {getDocument(props.documents, i.wordpress_id) ? (
                      <a
                        href={getDocument(props.documents, i.wordpress_id).url}
                        target="__blank"
                        rel="noopener noreferrer"
                      >
                        <ImageResource
                          id={i.wordpress_id}
                          withCaption={false}
                        />
                      </a>
                    ) : null}

                    <div
                      dangerouslySetInnerHTML={{
                        __html: i.acf[createProperty("caption", language)],
                      }}
                    />
                  </PressImagesGrid>
                ))
              : null}
          </div>
        )
        break
      default:
        renderSection = <div key={index}></div>
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
        pathname={pageInfo.slug}
      />
      
      <PressImageTitleHeader
            dangerouslySetInnerHTML={{
                __html: content[language].press_images,
              }}
            />
      
      {pageInfo.acf.press_images.map((section, index) =>
        generateSection(section, index)
      )}
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
    press_images: "Press images",
  },
  DE: {
    press_images: "Pressebilder",
  },
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
  }
}

export default connect(mapStateToProps, null)(PressImages)
