import React from "react"
import { connect } from "react-redux"
import { PageTitle } from "../../templates/page.styles";
import { getCurrentLanguageString } from "../../utility/helper";
import { ExchangeContentBlock } from "./exchange-curatorial-workshop";

const ExchangeTours = props => {
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
      title: "tours",
    },
    DE: {
      title: "rundgänge",

    },
  }
  
  export default connect(mapStateToProps, null)(ExchangeTours)
  
