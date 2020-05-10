import React from "react"
import { connect } from "react-redux"
import {
  PressFormError,
  PressFormWrapper,
  PressFormInput,
} from "./press-form.styles"
import { FormButton, FormLabel } from "../modal/modal.styles"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import validator from "validator"
import { navigate } from 'gatsby';
import axios from 'axios'
class PressForm extends React.Component {
  language

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      name: "",
      media_affliation: "",
      hasSubmitted: false,
      hasTouched: false,
      hasErrors: false,
      errors: {
        name: "",
        email: "",
        media_affliation: "",
      },
    }

  }

  handleSubmit = async event => {
    event.preventDefault();
    this.sendPostRequest().then(() => {
      this.setState({
        hasSubmitted: true,
      })
    })
    navigate(createPath(this.language, 'press-images'))
  }

  sendPostRequest = async () => {
    const url =
      "https://admin11.berlinbiennale.de/wp-json/contact-form-7/v1/contact-forms/444/feedback"

    let formData = new FormData();
    formData.set('address-email', this.state.email);
    formData.set('full-name', this.state.name);
    formData.set('media-outlet', this.state.media_affliation);
    formData.set('honeypot-179', "")
    formData.set('_wpcf7', 444);
    formData.set('_wpcf7_version', "5.1.4");
    formData.set('_wpcf7_locale', "en_US");
    formData.set('_wpcf7_unit_tag', "wpcf7-f444-o1");
    formData.set('_wpcf7_container_post', "0");

    axios({
      method: 'post',
      url: url,
      data: formData,
      headers: {'Content-Type': 'multipart/form-data' }
    }).then((response) => {
      console.log('Response', response)
    }).catch((e) => {
      console.log('Error', e)
    })
    // await axios.post(url, data)
  }

  clearState = () => {
    this.setState({
      email: "",
      name: "",
      media_affliation: "",
    })
  }

  handleInputChange = event => {
    if (!this.state.hasTouched) {
      this.setState({ hasTouched: true })
    }
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name
    let errors = this.state.errors
    switch (name) {
      case "name":
        // errors.name =
        //   value.length < 3
        //     ? formText[this.language].errors.name
        //     : ""
        break
      case "email":
        errors.email = !validator.isEmail(value)
          ? formText[this.language].errors.email
          : ""
        break
      case "media_affliation":
        // errors.media_affliation =
        //   value.length < 3
        //     ? formText[this.language].errors.media_affliation
        //     : ""
        break
      default:
        break
    }
    let errorList = Object.values(errors);

    errorList = errorList.filter((item) => {
        return item.length !== 0;
    });

    const hasErrors = errorList.length > 0 ? true : false;
    this.setState(
      {
        hasErrors: hasErrors,
        errors,
        [name]: value,
      }
    )
  }

  render() {
    this.language = getCurrentLanguageString(this.props.languages)

    return (
      <PressFormWrapper>
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
              required
            />
            <PressFormError hidden={this.state.errors.email === ""}>
              {this.state.errors.email}
            </PressFormError>
          </FormLabel>
          <FormLabel>
            <p> {formText[this.language].media_affliation}</p>
            <PressFormInput
              type="text"
              name="media_affliation"
              onChange={this.handleInputChange.bind(this)}
            />
          </FormLabel>

          <FormButton disabled={this.state.hasErrors || !this.state.hasTouched}> {formText[this.language].button} </FormButton>
        </form>
      </PressFormWrapper>
    )
  }
}

const formText = {
  EN: {
    email: "E-mail",
    name: "First and last name",
    media_affliation: "Media affiliation",
    button: "Submit",
    thank_you:
      "Thank you for your subscription. We have sent you an e-mail with a confirmation link.",
      errors : {
          name: 'This field requires at least 3 characters',
          email: 'Valid e-mail address required',
          media_affliation: 'This field requires at least 3 characters'
      }
  },
  DE: {
    email: "E-Mail",
    name: "Vor- und Nachname",
    media_affliation: "Medium",
    thank_you:
      "Thank you for your subscription. We have sent you an e-mail with a confirmation link.",
    button: "Senden",
    errors : {
        name: 'This field requires at least 3 characters',
        email: 'Gültige E-Mail-Adresse erforderlich',
        media_affliation: 'This field requires at least 3 characters'
    }
  },
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(
  mapStateToProps,
  null
)(PressForm)
