import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as actionTypes from "../../store/action";
import { ExperienceControllerWrapper, ExperienceButton } from "./experiencecontroller.styles";


const ExperienceController = props => {
  let experiences = [1, 2, 3, 4];
  
  experiences = experiences.filter(experience =>
    filterBasedOnPosition(props, experience)
  );
  return (
    <ExperienceControllerWrapper left={props.left}>
      <ExperienceButton bold> exp</ExperienceButton>
      {experiences.map(experience => (
          <ExperienceButton key={experience} bold hover onClick={() => props.changeExperience(experience)} fade> {experience}</ExperienceButton>
      ))}
    </ExperienceControllerWrapper>
  )
}

const filterBasedOnPosition = (props, experience) => {
  if(props.left) {
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
  }
}

ExperienceController.propTypes = {
  left: PropTypes.bool.isRequired
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExperienceController)
