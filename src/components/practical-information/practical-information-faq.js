import React from "react"
import { connect } from "react-redux"
import { PageTitle } from "../../templates/page.styles";
import { getCurrentLanguageString } from "../../utility/helper";

const PracticalInformationFAQ = props => {
    let language = getCurrentLanguageString(props.languages)

    return (
        <>
            <PageTitle> {page_title[language].title}</PageTitle>
            <p> faq text</p>
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
      title: "faq",
    },
    DE: {
      title: "faq",
    },
  }
  
  export default connect(mapStateToProps, null)(PracticalInformationFAQ)
  
