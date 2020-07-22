import React from "react"
import { connect } from "react-redux"
import { PageTitle } from "../../templates/page.styles"
import { getCurrentLanguageString } from "../../utility/helper"
import styled from 'styled-components';

const FAQQuestionWrapper =  styled.div`
`

const FAQAnswerWrapper =  styled.div`
`

const FAQWrapper = styled.div`
  margin-bottom: 1rem;
`
const PracticalInformationFAQ = props => {
  let language = getCurrentLanguageString(props.languages)
  let content = props.content.acf[LanguageKeyTranslator[language]]
  return (
    <>
      <PageTitle> {page_title[language].title}</PageTitle>
      {content.faq_repeater.map((item, index) =>
        PracticalInformationFAQBlock(item, index)
      )}
    </>
  )
}

const PracticalInformationFAQBlock = (item, index) => {
  return (
    <FAQWrapper key={index}>
      <p> {item.section_header} </p>
      <FAQQuestionWrapper
        dangerouslySetInnerHTML={{
          __html: item.faq_question,
        }}
      />

      <FAQAnswerWrapper
        key={index}
        dangerouslySetInnerHTML={{
          __html: item.faq_answer,
        }}
      />
    </FAQWrapper>
  )
}

const LanguageKeyTranslator = {
  EN: "english",
  DE: "german",
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
