import React from "react"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../../utility/helper"
import { ContentBlock, PageTitle } from "../../templates/page.styles"
import { ExchangeContentBlock } from "./exchange-curatorial-workshop";

const ExchangePage = props => {
    let language = getCurrentLanguageString(props.languages)
    let content = props.content.acf[language]
    return (
        <>
            <PageTitle> {page_title[language].title}</PageTitle>
            {content.content_block.map((item, index) => ExchangeContentBlock(item, index))}
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
      title: "exchange",
    },
    DE: {
      title: "austausch",

    },
  }
  
  export default connect(mapStateToProps, null)(ExchangePage)