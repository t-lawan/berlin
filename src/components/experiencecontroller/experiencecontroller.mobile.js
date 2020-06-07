import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as actionTypes from "../../store/action"
import {
  ExperienceControllerMobileWrapper,
  ExperienceControllerMobileButton,
} from "./experiencecontroller.styles"
import {
  getCurrentLanguageString,
  createPath,
  transitionTimes,
} from "../../utility/helper"
import { navigate } from "gatsby"

class ExperienceControllerMobile extends React.Component {
  experiences
  language
  visibleDelayTime = transitionTimes.visibleDelayTime
  changeExperienceDelayTime = transitionTimes.changeExperienceDelayTime

  constructor(props) {
    super(props)
    this.language = getCurrentLanguageString(props.languages)
    this.state = {
      experiences: [
        {
          id: 1,
          isReady: true,
          display: 1,
        },
        {
          id: 2,
          isReady: true,
          display: 2,
        },
        {
          id: 3,
          isReady: true,
          display: 3,
        },
        {
          id: 4,
          isReady: true,
          display: (
            <img src="https://admin11.berlinbiennale.de/wp-content/themes/bb11-car-trans/images/bb11_logo_mob.svg" />
          ),
        },
      ],
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.languages !== this.props.languages) {
      this.language = getCurrentLanguageString(this.props.languages);
    }
  }

  changeExperience = chosenExperience => {
    if (chosenExperience.isReady) {
      setTimeout(() => {
        this.props.changeExperience(chosenExperience.id)
      }, transitionTimes.changeExperienceDelayTime)
      navigate(createPath(this.language, "/"))
      setTimeout(() => {
        this.props.setIsVisibleToTrue()
      }, this.visibleTransitionTime)
    }
  }

  render() {
    this.experiences = this.state.experiences.map((item, index) => {
      let exhibition = this.props.exhibitions.find(exhibition => {
        return item.id === parseInt(exhibition.experience)
      })

      let isReady = exhibition ? true : false
      // if (index === 3) {
      //   isReady = false
      // }
      return {
        id: item.id,
        isReady: isReady,
        display: item.display,
      }
    })

    return (
      <ExperienceControllerMobileWrapper
        showInTablet={this.props.showInTablet}
        showInMobile={this.props.showInMobile}
      >
        {this.experiences.map((experience, index) => (
          <ExperienceControllerMobileButton
            isSelected={experience.id === this.props.experience}
            show={experience.isReady}
            key={index}
            onClick={() => this.changeExperience(experience)}
          >
            <p>
              {index !== 3 ? "exp." : ""} {experience.display}
            </p>
          </ExperienceControllerMobileButton>
        ))}
      </ExperienceControllerMobileWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    experience: state.experience,
    exhibitions: state.exhibitions,
    languages: state.languages,
  }
}

ExperienceControllerMobile.propTypes = {
  showInMobile: PropTypes.bool,
  showInTablet: PropTypes.bool,
}

const mapDispatchToProps = dispatch => {
  return {
    changeExperience: experience =>
      dispatch({ type: actionTypes.CHANGE_EXPERIENCE, experience: experience }),
    setIsVisibleToTrue: () =>
      dispatch({ type: actionTypes.SET_IS_VISIBLE_TO_TRUE }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExperienceControllerMobile)
