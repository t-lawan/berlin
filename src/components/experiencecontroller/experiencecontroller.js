import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as actionTypes from "../../store/action"
import {
  ExperienceControllerWrapper,
  ExperienceButton,
  ExperienceButtonImage,
  ExperienceButtonTitle,
} from "./experiencecontroller.styles"
import { navigate } from "gatsby"
import { createPath, getCurrentLanguageString, transitionTimes } from "../../utility/helper"
class ExperienceController extends React.Component {
  experiences
  language
  visibleDelayTime = transitionTimes.visibleDelayTime;
  changeExperienceDelayTime = transitionTimes.changeExperienceDelayTime;
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
            <img src="https://admin11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/bb11_logo_nav.svg" alt="11. Berlin Biennale Link"/>
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

  incrementExperience = () => {
    // temporarily disable experience 4 by checking before incrementing
    if (
      this.props.experience < this.state.experiences.length
    ) {
      // this.props.experienceIncreased()
      this.props.experience + 1
      setTimeout(() => {
        this.props.changeExperience(this.props.experience + 1)
      }, this.changeExperienceDelayTime)

      navigate(createPath(this.language, "/"))
      setTimeout(() => {
        this.props.setIsVisibleToTrue()
      }, this.visibleTransitionTime)
    }
  }

  decrementExperience = () => {
    if (
      this.props.experience > 0
    ) {
      // this.props.experienceDecreased()
      this.props.experience + 1
      setTimeout(() => {
        this.props.changeExperience(this.props.experience - 1)
      }, this.changeExperienceDelayTime)
      navigate(createPath(this.language, "/"))
      setTimeout(() => {
        this.props.setIsVisibleToTrue()
      }, this.visibleTransitionTime)
    }
  }

  changeExperience = chosenExperience => {
    if (chosenExperience.isReady) {
      setTimeout(() => {
        this.props.changeExperience(chosenExperience.id)
      }, this.changeExperienceDelayTime)
      navigate(createPath(this.language, "/"))
      setTimeout(() => {
        this.props.setIsVisibleToTrue()
      }, this.visibleTransitionTime)
    }
  }

  filterBasedOnPosition = experience => {
    if (this.props.left) {
      return experience.id < this.props.experience
    } else {
      return experience.id >= this.props.experience
    }
  }
  render() {
    this.experiences = this.state.experiences.map((item, index) => {
      let exhibition = this.props.exhibitions.find(exhibition => {
        return item.id === parseInt(exhibition.experience)
      })
      let isReady = exhibition ? true : false;
      // Temporarily disable for the last exhibition
      return {
        id: item.id,
        isReady: isReady,
        display: item.display,
      }
    })


    this.experiences = this.experiences.filter(experience =>
      this.filterBasedOnPosition(experience)
    )
    return (
      <ExperienceControllerWrapper left={this.props.left}>
        <ExperienceButtonTitle hidden={this.experiences.length === 0} show>
          <ExperienceButtonImage
            hidden={!this.props.left}
            show={this.props.experience !== 1}
            onClick={() => this.decrementExperience()}
            src="https://admin11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/expnav_prev.svg"
            alt="Previous Navigation Arrow"
          />
          <ExperienceButtonImage
            hidden={this.props.left}
            show={this.props.experience !== 4}
            onClick={() => this.incrementExperience()}
            src="https://admin11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/expnav_next.svg"
            alt="Next Navigation Arrow"
          />
        </ExperienceButtonTitle>
        <ExperienceButtonTitle bold hidden={this.experiences.length === 0} show>
          {this.props.experience != 4 || this.props.left ?  <span> exp. </span> :null} 
        </ExperienceButtonTitle>
        {this.experiences.map(experience => (
          <ExperienceButton
            key={experience.id}
            bold
            hover={experience.isReady}
            show={experience.isReady}
            left={this.props.left}
            isExperience4={this.props.experience === 4}
            onClick={() => this.changeExperience(experience)}
          >
            {experience.display}
          </ExperienceButton>
        ))}
      </ExperienceControllerWrapper>
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

const mapDispatchToProps = dispatch => {
  return {
    changeExperience: experience =>
      dispatch({ type: actionTypes.CHANGE_EXPERIENCE, experience: experience }),
    setIsVisibleToTrue: () =>
      dispatch({ type: actionTypes.SET_IS_VISIBLE_TO_TRUE }),
  }
}

ExperienceController.propTypes = {
  left: PropTypes.bool.isRequired,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExperienceController)
