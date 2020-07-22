import React from "react"
import { connect } from "react-redux"
import { PageTitle } from "../../templates/page.styles";
import { getCurrentLanguageString } from "../../utility/helper";

const PracticalInformationAdmission = props => {
    let language = getCurrentLanguageString(props.languages)
    let content = props.content.acf[language]

    return (
        <>
            <PageTitle> {page_title[language].title}</PageTitle>
            {content.content_block.map((item, index) => PracticalInformationContentBlock(item, index))}
        </>
    )
}

export const PracticalInformationContentBlock = (item, index) => {
  let renderComponent;
  switch(item.block_type) {
    case 'text': 
      renderComponent = (
        <div key={index} 
        dangerouslySetInnerHTML={{
          __html: item.text,
        }} />
      )
      break;
    default:
      renderComponent = (
        <p key={index}> default</p>
      )
      break;
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
  
