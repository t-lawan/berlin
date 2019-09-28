import React from "react"
import UpcomingEvents from "../components/events/upcomingevents"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString, createProperty } from "../utility/helper"
import SEO from "../components/seo/seo"
import { PageWrapper, PressFormInput } from "./page.styles"
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

const PressWrapper = styled.div`
  padding: 2em 1em;
  display: grid;
  grid-template-columns: 3fr 6fr;
  ${changeGridToOneRow}
`

const PressReleaseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 1em;
`
const PressReleaseText = styled.span`
  margin-right: 2.5em;
`

const PressReleaseLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: ${Color.red};
  }
`

const PressForm = styled.div`
  padding: 1em 0em;
`

const PressArrowDown = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  width: 0.4em;
  opacity: 0.5;
`

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
      hasSubmitted: false
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      hasSubmitted: true,
    })
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
    const name = target.name;
    this.setState({
      [name]: value,
    })
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
        {/* firstColumn */}
        <div>
          <p>Contact</p>
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
        {/* secondColumn */}

        <div>
          <p> Press Releases</p>
          {this.pressInfo.acf.press_releases.map((press_release, index) => (
            <PressReleaseWrapper key={index}>
              <PressReleaseText> {moment(press_release.date).format("DD.MM.YYYY")}</PressReleaseText>
              <PressReleaseText>
                <PressReleaseLink
                  target="_blank"
                  href={getPdf(
                    this.props.documents,
                    press_release,
                    this.language
                  )}
                >
                  <PressArrowDown icon={faLongArrowAltDown} />
                  {
                    press_release[
                      createProperty("title_of_press_release_in", this.language)
                    ]
                  }
                </PressReleaseLink>
              </PressReleaseText>
            </PressReleaseWrapper>
          ))}

          <p> Images </p>
          <div
            dangerouslySetInnerHTML={{
              __html: this.pressInfo.acf[this.language].images_note,
            }}
          />
          <PressForm>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <FormLabel>
                <p> {formText[this.language].name}</p>
                <PressFormInput
                  type="text"
                  name="name"
                  onChange={this.handleInputChange.bind(this)}
                />
              </FormLabel>
              <FormLabel>
              <p> {formText[this.language].email}</p>
                <PressFormInput
                  type="email"
                  name="email"
                  onChange={this.handleInputChange.bind(this)}
                />
              </FormLabel>
              <FormLabel>
              <p> {formText[this.language].media_affliation}</p>
                <PressFormInput
                  type="text"
                  name="media_affliation"
                  onChange={this.handleInputChange.bind(this)}
                />
              </FormLabel>

              <FormButton> {formText[this.language].button} </FormButton>
            </form>
          </PressForm>
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

const formText = {
  EN: {
    email:
      "Email",
    name:
      "First and Last Name",
    media_affliation:
      "Media affliation",
    button: "Submit",
    thank_you:
      "Thank you for your subscription. We have sent you an e-mail with a confirmation link.",
  },
  DE: {
    email:
    "Email",
  name:
    "Vor- und Nachname",
  media_affliation:
      "Medium",
  thank_you:
    "Thank you for your subscription. We have sent you an e-mail with a confirmation link.",
    button: "Anmeldung",

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
