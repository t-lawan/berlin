import React from "react"
import { connect } from "react-redux"
import { PageTitle } from "../../templates/page.styles";
import { getCurrentLanguageString } from "../../utility/helper";
import { PracticalInformationContentBlock } from "./practical-information-admission";

const PracticalInformationOpening = props => {
    let language = getCurrentLanguageString(props.languages)
    let content = props.content.acf[language]
    return (
        <>
            <PageTitle> {page_title[language].title}</PageTitle>
            {content.content_block.map((item, index) => PracticalInformationContentBlock(item, index))}
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
      title: "opening hours",
    },
    DE: {
      title: "öffnungszeiten",

    },
  }
  
  export default connect(mapStateToProps, null)(PracticalInformationOpening)
  
