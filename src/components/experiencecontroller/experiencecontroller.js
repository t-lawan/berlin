import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as actionTypes from "../../store/action"
import {
  ExperienceControllerWrapper,
  ExperienceButton,
} from "./experiencecontroller.styles"

const ExperienceController = props => {
  let experiences = [
    {
      id: 1,
      isReady: true,
      display: 1
    },
    {
      id: 2,
      isReady: true,
      display: 2
    },
    {
      id: 3,
      isReady: true,
      display: 3
    },
    {
      id: 4,
      isReady: true,
      display: (<img src="https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans/images/bb11_logo_mob.svg" />)
    },
  ]
  const changeExperience = chosenExperience => {
    if(chosenExperience.isReady) {
      let currentExperience = props.experience
      if (currentExperience < chosenExperience.id) {
        props.experienceIncreased()
      } else {
        props.experienceDecreased()
      }
      props.changeExperience(chosenExperience.id)
      setTimeout(() => {
        props.setIsVisibleToTrue()
      }, 5)
    }
  }

  experiences = experiences.map(item => {
    let exhibition = props.exhibitions.find(exhibition => {
      return item.id === parseInt(exhibition.experience)
    })

    let isReady = exhibition ? true  : false;

    return {
      id: item.id,
      isReady: isReady,
      display: item.display
    }
  })

  experiences = experiences.filter(experience =>
    filterBasedOnPosition(props, experience)
  )
  return (
    <ExperienceControllerWrapper left={props.left}>
      <ExperienceButton bold hidden={experiences.length === 0} show> exp</ExperienceButton>
      {experiences.map(experience => (
        <ExperienceButton
          key={experience.id}
          bold
          hover={experience.isReady}
          show={experience.isReady}
          onClick={() => changeExperience(experience)}
        >
          {experience.display}
        </ExperienceButton>
      ))}
    </ExperienceControllerWrapper>
  )
}

const filterBasedOnPosition = (props, experience) => {
  if (props.left) {
    return experience.id < props.experience
  } else {
    return experience.id > props.experience
  }
}

const mapStateToProps = state => {
  return {
    experience: state.experience,
    exhibitions: state.exhibitions,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeExperience: experience =>
      dispatch({ type: actionTypes.CHANGE_EXPERIENCE, experience: experience }),
    experienceIncreased: () =>
      dispatch({ type: actionTypes.INCREASE_EXPERIENCE_TRANSITION }),
    experienceDecreased: () =>
      dispatch({ type: actionTypes.DECREASE_EXPERIENCE_TRANSITION }),
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
