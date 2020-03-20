import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { getCurrentLanguageString } from "../../utility/helper"

const DocumentationListWrapper = styled.div`
  padding: 0.5rem;
`
const DocumentationItem = styled.div`
  display: grid;
  grid-template-columns: 4fr 5fr;
  padding: 0.5rem 0;
`

const DocumentationTextBox = styled.div``

let content = {
  EN: {
    video: "Video",
    mp3: "Audio",
    imagegallery: "Image",
    text: "Text",
  },
  DE: {
    video: "Video",
    mp3: "Audio",
    imagegallery: "Image",
    text: "Text",
  },
}

const DocumentationList = props => {
  let language = getCurrentLanguageString(props.languages)
  let documentation = props.documentation

  const createComponent = (doc, index) => {
    console.log("DOC LOG", doc)
    let renderComponent
    switch (doc.type) {
      case "video":
        renderComponent = (
          <DocumentationItem key={index}>
            <p> {content[language][doc.type]} </p>
            <DocumentationTextBox>
              <div
                dangerouslySetInnerHTML={{
                  __html: doc[language].title,
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: doc[language].doc_credits,
                }}
              />
            </DocumentationTextBox>
          </DocumentationItem>
        )
        break
      case "mp3":
        renderComponent = (
          <DocumentationItem key={index}>
            <p> {content[language][doc.type]} </p>
            <DocumentationTextBox>
              <div
                dangerouslySetInnerHTML={{
                  __html: doc[language].title,
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: doc[language].doc_credits,
                }}
              />
            </DocumentationTextBox>
          </DocumentationItem>
        )
        break
      case "imagegallery":
        renderComponent = (
          <DocumentationItem key={index}>
            <p> {content[language][doc.type]} </p>
            <DocumentationTextBox>
              <div
                dangerouslySetInnerHTML={{
                  __html: doc[language].title,
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: doc[language].doc_credits,
                }}
              />
            </DocumentationTextBox>
          </DocumentationItem>
        )
        break
      case "text":
        renderComponent = (
          <DocumentationItem key={index}>
            <p> {content[language][doc.type]} </p>
            <DocumentationTextBox>
              <div
                dangerouslySetInnerHTML={{
                  __html: doc[language].title,
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: doc[language].doc_credits,
                }}
              />
            </DocumentationTextBox>
          </DocumentationItem>
        )
        break
      default:
        renderComponent = (
          <DocumentationItem key={index}>
            <p> Default </p>
          </DocumentationItem>
        )
        break
    }

    return renderComponent
  }

  return (
    <DocumentationListWrapper>
      {documentation.map((doc, index) => createComponent(doc, index))}
    </DocumentationListWrapper>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    resources: state.resources,
    documentation: state.documentation,
  }
}

export default connect(mapStateToProps, null)(DocumentationList)
