import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as actionTypes from "../../store/action"
import {
  ExperienceControllerMobileWrapper,
  ExperienceControllerMobileButton,
} from "./experiencecontroller.styles"

const ExperienceControllerMobile = props => {
  let experiences = [1, 2, 3, 4];

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
  return (
    <ExperienceControllerMobileWrapper showInMobile={props.showInMobile}>
      {experiences.map((experience, index) => (
        <ExperienceControllerMobileButton key={index} onClick={()=> changeExperience(experience)}>
          <p>exp. {experience}</p>  
        </ExperienceControllerMobileButton>
      ))}
    </ExperienceControllerMobileWrapper>
  )
}

const mapStateToProps = state => {
  return {
    experience: state.experience,
  }
}

ExperienceControllerMobile.propTypes = {
  showInMobile: PropTypes.bool
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



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExperienceControllerMobile)
