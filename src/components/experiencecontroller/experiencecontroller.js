import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as actionTypes from "../../store/action";
import { ExperienceControllerWrapper, ExperienceButton } from "./experiencecontroller.styles";


const ExperienceController = props => {
  let experiences = [1, 2, 3, 4];
  experiences = experiences.filter(experience => {
    return experience !== props.experience;
  });
  return (
    <ExperienceControllerWrapper>
      <ExperienceButton bold> exp</ExperienceButton>
      {experiences.map(experience => (
          <ExperienceButton key={experience} bold hover onClick={() => props.changeExperience(experience)}> {experience}</ExperienceButton>
      ))}
    </ExperienceControllerWrapper>
  )
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
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExperienceController)
