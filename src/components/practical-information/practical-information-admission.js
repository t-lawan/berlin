import React from "react"
import { connect } from "react-redux"
import { PageTitle } from "../../templates/page.styles"
import { Color } from "../../index.styles"
import { getCurrentLanguageString } from "../../utility/helper"
import ImageResource from "../../partials/ImageResource"
import ExternalLink from "../../partials/ExternalLink"
import styled from "styled-components"

const ContentBlockWrapper = styled.div`
  margin-bottom: 2rem;
  > div > p > a {
    font-size: 1em;
      border-bottom: solid thin;
      border-color: ${Color.red};
      :hover {
        color: ${Color.red};
      }
  }
`

const PracticalInformationAdmission = props => {
  let language = getCurrentLanguageString(props.languages)
  let content = props.content.acf[language]

  return (
    <>
      <PageTitle> {page_title[language].title}</PageTitle>
      {content.content_block.map((item, index) =>
        PracticalInformationContentBlock(item, index)
      )}
    </>
  )
}

export const PracticalInformationContentBlock = (item, index) => {
  let renderComponent
  switch (item.block_type) {
    case "text":
      renderComponent = (
        <ContentBlockWrapper>
          {item.text ? <div
            key={index}
            dangerouslySetInnerHTML={{
              __html: item.text,
            }}
          /> : null}
        </ContentBlockWrapper>
      )
      break
    case "image":
      renderComponent = (
        <ContentBlockWrapper>
          {item.image ? <ImageResource id={item.image} withCaption={true}/>  : null}
        </ContentBlockWrapper>        
      )
      break
    case "pdf":
      renderComponent = (
        <ContentBlockWrapper>
          {item.file ? <ExternalLink id={item.file}> {item.file_label} </ExternalLink> : null}
        </ContentBlockWrapper>
      )
      break
    default:
      renderComponent = <p key={index}> </p>
      break
  }
  return renderComponent
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

let page_title = {
  EN: {
    title: "admission",
  },
  DE: {
    title: "eintritt",
  },
}

export default connect(mapStateToProps, null)(PracticalInformationAdmission)
