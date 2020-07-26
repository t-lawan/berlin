import React from "react"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../../utility/helper"
import { ContentBlock, PageTitle } from "../../templates/page.styles"
import ImageResource from "../../partials/ImageResource"


const PracticalInformationPage = props => {
  let language = getCurrentLanguageString(props.languages)
  let content = props.content
  return (
    <>
      <PageTitle> {page_title[language].title}</PageTitle>
      <ContentBlock
        dangerouslySetInnerHTML={{
          __html: content.acf[language].new_practical_info,
        }}
      />
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

let page_title = {
  EN: {
    title: "practical information",
  },
  DE: {
    title: "praktische information",
  },
}


export default connect(mapStateToProps, null)(PracticalInformationPage)