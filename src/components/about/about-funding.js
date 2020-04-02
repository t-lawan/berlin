import React from "react"
import { getCurrentLanguageString, createProperty } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import {
  AboutFundingHeader,
  AboutFundingBlock,
  AboutImageBlock,
  AboutPartnerImage,
  AboutCorporateImageItem,
  AboutPrimaryImageContainer,
} from "./about.styles"
import { Section } from "../../index.styles";
import { PageTitle } from "../../templates/page.styles";


const AboutFunding = props => {
  const language = getCurrentLanguageString(props.languages)
  const funding = props.funding;
  const generateSection = (fundingItem, index) => {

    let renderComponent
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
            {fundingItem.logo_upload ? (
              <AboutPrimaryImageContainer>
                <AboutPartnerImage id={fundingItem.logo_upload} withCaption={false} />
              </AboutPrimaryImageContainer> 
              ) : null}

          </AboutFundingBlock>
        )
        break
      case "corporate":
        renderComponent = (
          <AboutFundingBlock key={index}>
            <AboutFundingHeader>
              {fundingItem[createProperty("support_header", language)]}
            </AboutFundingHeader>
            <AboutCorporateImageItem>
                <AboutPartnerImage id={fundingItem.logo_upload} withCaption={false} />
            </AboutCorporateImageItem>
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
                <Section key={index}>
                  <AboutPartnerImage
                    id={item.wordpress_id}
                    withCaption={false}
                  />
                </Section>
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

  return (
  <>
  <PageTitle> {content[language].title}</PageTitle>
    <div>{funding.map((item, index) => generateSection(item, index))}</div>
  </>
  
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

let content = {
  EN: {
    title: 'support'
  },
  DE: {
    title: 'unterstützung'
  }
}

AboutFunding.propTypes = {
  funding: PropTypes.array,
}

export default connect(
  mapStateToProps,
  null
)(AboutFunding)
