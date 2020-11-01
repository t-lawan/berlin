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
  width: 93vw;
  @media (min-width: ${size.mobileL}) {
    width: 94vw;
  }
  @media (min-width: ${size.tablet}) {
    width: 64vw;
  }
  @media (min-width: ${size.tabletL}) {
    width: 45vw;
  }
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
    <>
      <PageTitle> {page_title[language].title}</PageTitle>
      <ContentBlockWrapper>
      {image_gallery ? (
          <ImageGalleryResource ids={image_gallery} />
      ) : null}
      </ContentBlockWrapper>

      {content.content_block
        ? content.content_block.map((item, index) =>
            ExchangeContentBlock(item, index)
          )
        : null}
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
