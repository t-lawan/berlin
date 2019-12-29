import React from "react"
import UpcomingEvents from "../components/events/upcomingevents"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString, createProperty } from "../utility/helper"
import SEO from "../components/seo/seo"
import {
  PressArrowContainer,
  PressReleaseWrapper,
  PressWrapper,
  PressReleaseText,
  PressReleaseLink,
  PressReleaseParagraphBlock
} from "./page.styles"
import styled from "styled-components"
import { getDocument } from "../store/selector"
import { changeGridToOneRow, Color } from "../index.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons"
import {
  FormLabel,
  FormInput,
  FormButton,
} from "../components/modal/modal.styles"
import moment from "moment"
import axios from "axios"
import PressForm from "../components/forms/press-form"
class Press extends React.Component {
  language
  pressInfo
  renderComponent

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      name: "",
      media_affliation: "",
      hasSubmitted: false,
      errors: {
        name: "",
        email: "",
        media_affliation: "",
      },
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.sendPostRequest().then(() => {
      this.setState({
        hasSubmitted: true,
      })
    })
  }

  sendPostRequest = async () => {
    const url =
      "https://api.newsletter2go.com/forms/submit/rimnoamr-wo3ma3nb-18l9?type=subscribe"
    let data = {
      recipient: {
        email: this.state.email,
        name: this.state.name,
        media_affliation: this.state.media_affliation,
      },
    }
    data = JSON.stringify(data)
    await axios.post(url, data)
  }

  clearState = () => {
    this.setState({
      email: "",
      name: "",
      media_affliation: "",
    })
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name
    let errors = this.state.errors
    switch (name) {
      case "name":
        errors.name =
          !validator.isAlpha(value) || value.length < 3
            ? "This field requires at least 3 characters"
            : ""
        break
      case "email":
        errors.email = !validator.isEmail(value)
          ? "This field requires a valid email"
          : ""
        break
      case "media_affliation":
        errors.media_affliation =
          !validator.isAlphanumeric(value) || value.length < 3
            ? "This field requires at least 3 characters"
            : ""
        break
      default:
        break
    }
    this.setState(
      {
        errors,
        [name]: value,
      },
      () => {}
    )
  }

  render() {
    this.language = getCurrentLanguageString(this.props.languages)

    this.pressInfo = this.props.pageContext

    this.renderComponent = (
      <PressWrapper>
        <SEO
          title={`${this.pressInfo.slug}`}
          description={`${this.pressInfo.slug}`}
          lang={this.pressInfo.language}
        />
        <div>
          <p>{content[this.language].contact}</p>
          {this.pressInfo.acf.contact_people.map((person, index) => (
            <div key={index}>
              <p> {person.full_name}</p>
              <p> {person[createProperty("position", this.language)]}</p>
            </div>
          ))}

          {this.pressInfo.acf.contact_data.map((contact_data, index) => (
            <div key={index}>
              <p> {contact_data.contact_data_line}</p>
            </div>
          ))}
        </div>

        <div>
          <p> {content[this.language].press_release}</p>
          {this.pressInfo.acf.press_releases.map((press_release, index) => (
            <PressReleaseWrapper key={index}>
              <PressReleaseText>
                {" "}
                {moment(press_release.date).format("DD.MM.YYYY")}
              </PressReleaseText>
              {/* <PressReleaseText> */}
                <PressReleaseLink
                  target="_blank"
                  href={getPdf(
                    this.props.documents,
                    press_release,
                    this.language
                  )}
                >
                  {/* <PressArrowDown icon={faLongArrowAltDown} /> */}
                  <PressArrowContainer>
                    <img src="https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/pdf_icon.svg" alt="arrow_down" />
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

          <p> {content[this.language].images} </p>
          <div
            dangerouslySetInnerHTML={{
              __html: this.pressInfo.acf[this.language].images_note,
            }}
          />
          <PressForm />
        </div>
      </PressWrapper>
    )
    return (
      <Layout
        firstColumn={this.renderComponent}
        numberOfColumnsIsTwo={false}
        thirdColumn={<UpcomingEvents />}
      />
    )
  }
}

const getPdf = (documents, press_release, language) => {
  const id = press_release[`${language.toLowerCase()}_press_release_pdf`]
  const pdf = getDocument(documents, id)
  return pdf ? pdf.url : ""
}

const content = {
  EN: {
    contact: "Press contact",
    press_release: "Downloads",
    images: "Press images",
  },
  DE: {
    contact: "Pressekontakt",
    press_release: "Downloads",
    images: "Pressebilder",
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
