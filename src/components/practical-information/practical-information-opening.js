import React from "react"
import { connect } from "react-redux"
import { PageTitle } from "../../templates/page.styles";
import { getCurrentLanguageString } from "../../utility/helper";

const PracticalInformationOpening = props => {
    let language = getCurrentLanguageString(props.languages)

    return (
        <>
            <PageTitle> {page_title[language].title}</PageTitle>
            <p> opening hours text</p>
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
      title: "offnungszeiten",

    },
  }
  
  export default connect(mapStateToProps, null)(PracticalInformationOpening)
  
