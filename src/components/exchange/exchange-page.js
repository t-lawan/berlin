import React from "react"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../../utility/helper"
import { ContentBlock, PageTitle } from "../../templates/page.styles"
import {
  ExchangeContentBlock,
  ContentBlockWrapper,
} from "./exchange-curatorial-workshop"
import ImageGalleryResource from "../../partials/ImageGalleryResource"
import styled from 'styled-components';
import { size } from "../../index.styles";


const ImageWrapper = styled.div`
  
`; 
const ExchangePage = props => {
  let language = getCurrentLanguageString(props.languages)
  let content = props.content.acf[language]
  let image_gallery
  if (props.content.acf.image_gallery) {
    image_gallery = props.content.acf.image_gallery.map(image => {
      return image.wordpress_id
    })
  }
  return (
    <ContentBlockWrapper>
      <PageTitle> {page_title[language].title}</PageTitle>
      {image_gallery ? (
        <ImageWrapper>
          <ImageGalleryResource ids={image_gallery} />{" "}
        </ImageWrapper>
      ) : null}
      {content.content_block
        ? content.content_block.map((item, index) =>
            ExchangeContentBlock(item, index)
          )
        : null}
    </ContentBlockWrapper>
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
