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
            <img src="https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/bb11_logo_nav.svg" />
          ),
        },
      ],
    }
  }

  incrementExperience = () => {
    // temporarily disable experience 4 by checking before incrementing
    if (
      this.props.experience < this.state.experiences.length && this.props.experience + 1 !== 4
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

  // runThroughAllExperiences = chosenExperience => {
  //   let index = this.state.experiences.findIndex(exp => {
  //     return exp.id === chosenExperience.id
  //   })
  //   let currentExperience = this.props.experience;
  //   let experiences;
  //   // If moving from 3 -> 1
  //   if(currentExperience > index + 1) {
  //     experiences = this.state.experiences.filter((xp) => {
  //       return xp.id >= index + 1 && xp.id < currentExperience ;
  //     });
  //     experiences = experiences.reverse();
  //   // If moving from 1 -> 3
  //   } else if(currentExperience < index  + 1)  {
  //     experiences = this.state.experiences.filter((xp) => {
  //       return xp.id <= index + 1 && xp.id > currentExperience;
  //     });
  //   }
  //   experiences.forEach((xp, ind) => {
  //     setTimeout(() => {
  //       this.changeExperience(xp)
  //     }, transitionTimes.timeOutForEachExperiences * (ind + 1));
  //   })
  // }

  changeExperience = chosenExperience => {
    if (chosenExperience.isReady) {
      let currentExperience = this.props.experience
      if (currentExperience < chosenExperience.id) {
        // this.props.experienceIncreased()
      } else {
        // this.props.experienceDecreased()
      }
      setTimeout(() => {
        this.props.changeExperience(chosenExperience.id)
      }, transitionTimes.changeExperienceDelayTime)
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
      if(index === 3) {
        isReady = false;
      }
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
            src="https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/expnav_prev.svg"
          />
          <ExperienceButtonImage
            hidden={this.props.left}
            show={this.props.experience !== 4}
            onClick={() => this.incrementExperience()}
            src="https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/expnav_next.svg"
          />
        </ExperienceButtonTitle>
        <ExperienceButtonTitle bold hidden={this.experiences.length === 0} show>
          <span> exp. </span>
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
