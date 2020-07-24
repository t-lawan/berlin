import React from "react"
import { connect } from "react-redux"
import { PageTitle } from "../../templates/page.styles"
import { getCurrentLanguageString } from "../../utility/helper"
import ImageResource from "../../partials/ImageResource"
import ExternalLink from "../../partials/ExternalLink"
import styled from "styled-components"
import { PracticalInformationContentBlock } from "./practical-information-admission";

const ContentBlockWrapper = styled.div`
  margin-bottom: 2rem;
`

const PracticalInformationAntiDiscrimination = props => {
  let language = getCurrentLanguageString(props.languages)
  let content = props.content.acf[language]

  return (
    <>
      <PageTitle> {page_title[language].title}</PageTitle>
      {content.content_block ? content.content_block.map((item, index) =>
        PracticalInformationContentBlock(item, index)
      ) : null}

    </>
  )
}


const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

let page_title = {
  EN: {
    title: "anti-discrimination clause",
  },
  DE: {
    title: "antidiskriminierungsklausel",
  },
}

export default connect(mapStateToProps, null)(PracticalInformationAntiDiscrimination)
