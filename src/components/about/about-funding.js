import React from "react"
import { getCurrentLanguageString, createProperty } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import {
  AboutFundingHeader,
  AboutFundingBlock,
  AboutImageBlock,
  AboutPartnerImage,
} from "./about.styles"
import { GalleryImage } from "../../partials/ImageGalleryResource"
import ImageResource from "../../partials/ImageResource"

const AboutFunding = props => {
  const language = getCurrentLanguageString(props.languages)
  const funding = props.funding
  const generateSection = (fundingItem, index) => {
    let renderComponent;
    switch (fundingItem.funding_type) {
      case "primary":
        renderComponent = (
          <AboutFundingBlock key={index}>
            <AboutFundingHeader>
              {fundingItem[createProperty("support_header", language)]}
            </AboutFundingHeader>
            <div
              dangerouslySetInnerHTML={{
                __html: fundingItem[createProperty("notice", language)],
              }}
            />
          </AboutFundingBlock>
        )
        break
      case "corporate":
        renderComponent = (
          <AboutFundingBlock key={index}>
            <AboutFundingHeader>
              {fundingItem[createProperty("support_header", language)]}
            </AboutFundingHeader>
          </AboutFundingBlock>
        )
        break
      case "logoblock":
        renderComponent = (
          <AboutFundingBlock key={index}>
            <AboutFundingHeader>
              {fundingItem[createProperty("support_header", language)]}
            </AboutFundingHeader>
            <AboutImageBlock>
              {fundingItem.logo_block.map((item, index) => (
                <AboutPartnerImage
                  key={index}
                  id={item.wordpress_id}
                  withCaption={false}
                />
              ))}
            </AboutImageBlock>
          </AboutFundingBlock>
        )
        break
      default:
        renderComponent = <p key={index}></p>
        break
    }

    return renderComponent
  }

  return <div>{funding.map((item, index) => generateSection(item, index))}</div>
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

AboutFunding.propTypes = {
  funding: PropTypes.array,
}

export default connect(
  mapStateToProps,
  null
)(AboutFunding)
