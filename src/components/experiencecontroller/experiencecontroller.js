import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as actionTypes from "../../store/action"
import {
  ExperienceControllerWrapper,
  ExperienceButton,
} from "./experiencecontroller.styles"


const ExperienceController = props => {
  let experiences = [1, 2, 3, 4]
  const changeExperience = (chosenExperience) => {
    let currentExperience = props.experience;
    if(currentExperience < chosenExperience){
      props.experienceIncreased();
    } else {
      props.experienceDecreased();
    }
    props.changeExperience(chosenExperience);
    setTimeout(() => {
      props.setIsVisibleToTrue();

    }, 5);
  }
  experiences = experiences.filter(experience =>
    filterBasedOnPosition(props, experience)
  )
  return (
    <ExperienceControllerWrapper left={props.left}>
      <ExperienceButton bold> exp</ExperienceButton>
      {experiences.map(experience => (
        <ExperienceButton
          key={experience}
          bold
          hover
          onClick={() => changeExperience(experience)}
          fade
        >
          {" "}
          {experience}
        </ExperienceButton>
      ))}
    </ExperienceControllerWrapper>
  )
}

const filterBasedOnPosition = (props, experience) => {
  if (props.left) {
    return experience < props.experience
  } else {
    return experience > props.experience
  }
}

const mapStateToProps = state => {
  return {
    experience: state.experience,
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
