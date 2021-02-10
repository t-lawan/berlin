import React from "react"
import UpcomingEvents from "../components/events/upcomingevents"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString, createProperty, truncateText, capitalise } from "../utility/helper"
import SEO from "../components/seo/seo"
import {
  PressArrowContainer,
  PressReleaseWrapper,
  PressWrapper,
  PressReleaseText,
  PressReleaseLink,
  PressReleaseParagraphBlock,
  PageTitle,
  PageSubTitle,
  ImagesCont,
  FormText,
} from "./page.styles"
import { getDocument } from "../store/selector"
import PressForm from "../components/forms/press-form"
import NewsList from "../components/news/newslist";
import striptags from 'striptags';
import { DateManager } from "../utility/date";
class Press extends React.Component {
  language
  pressInfo
  renderComponent

  render() {
    this.language = getCurrentLanguageString(this.props.languages)
    this.pressInfo = this.props.pageContext;
    let description = truncateText(striptags(this.pressInfo.acf[`${this.pressInfo.language.toUpperCase()}`].images_note));
    this.renderComponent = (
      <PressWrapper>
        <SEO
          title={`${capitalise(content[this.pressInfo.language.toUpperCase()].title)}`}
          description={description}
          lang={this.pressInfo.language}
          pathname={this.pressInfo.slug}
        />
        <div>
          
          <PageTitle
              dangerouslySetInnerHTML={{
                __html: content[this.language].title,
              }}
            />
          <p>{content[this.language].contact}</p>
          {this.pressInfo.acf.contact_people ? this.pressInfo.acf.contact_people.map((person, index) => (
            <div key={index}>
              <p> {person.full_name}</p>
              <p> {person[createProperty("position", this.language)]}</p>
            </div>
          )) : null}
          <ul>
          {this.pressInfo.acf.contact_data.map((contact_data, index) => (
              <li key={index}> {contact_data.contact_data_line}</li>
          ))}
          <li><a target="__blank" rel="noopener noreferrer" href={`mailto:${this.pressInfo.acf.press_email}`}>{this.pressInfo.acf.press_email}</a></li>
          </ul>
        </div>

        <div>
        <PageSubTitle
              dangerouslySetInnerHTML={{
                __html: content[this.language].previewtitle,
              }}
            />
        <div
            dangerouslySetInnerHTML={{
              __html: this.pressInfo.acf[this.language].preview_information,
            }}
          />
        <PageSubTitle
              dangerouslySetInnerHTML={{
                __html: content[this.language].press_release,
              }}
            />
          
          {this.pressInfo.acf.press_releases.map((press_release, index) => (
            <PressReleaseWrapper key={index}>
              <PressReleaseText>
                {DateManager.toDateString(press_release.date)}
              </PressReleaseText>
              {/* <PressReleaseText> */}
                <PressReleaseLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={getPdf(
                    this.props.documents,
                    press_release,
                    this.language
                  )}
                >
                  {/* <PressArrowDown icon={faLongArrowAltDown} /> */}
                  <PressArrowContainer>
                    <img src="https://admin11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/pdf_icon.svg" alt="arrow_down" />
                  </PressArrowContainer>
                  <PressReleaseParagraphBlock
                    dangerouslySetInnerHTML={{
                      __html: press_release[createProperty("title_of_press_release_in", this.language)],
                    }}
                  />
                </PressReleaseLink>
              {/* </PressReleaseText> */}
            </PressReleaseWrapper>
          ))}

          
          {/* <PressForm /> */}
        </div>
      </PressWrapper>
    )

    let thirdColumn = (
      <>
        <NewsList />
        <UpcomingEvents />
      </>
    )
    
    return (
      <Layout
        firstColumn={this.renderComponent}
        numberOfColumnsIsTwo={false}
        thirdColumn={thirdColumn}
      />
    )
  }
}

const getPdf = (documents, press_release, language) => {
  const id = press_release[`${language.toLowerCase()}_press_release_pdf`]
  const pdf = getDocument(documents, id)
  return pdf ? (typeof window !== `undefined` ? window.location.origin + pdf.publicUrl : "" ): ""
}

const content = {
  EN: {
    contact: "Press contact",
    title: "press",
    previewtitle: "Current information",
    press_release: "Downloads",
  },
  DE: {
    contact: "Pressekontakt",
    title: "presse",
    previewtitle: "Aktuelle Information",
    press_release: "Downloads",
  },
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
  }
}

export default connect(
  mapStateToProps,
  null
)(Press)
