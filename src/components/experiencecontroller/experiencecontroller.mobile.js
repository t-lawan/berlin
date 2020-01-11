import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as actionTypes from "../../store/action"
import {
  ExperienceControllerMobileWrapper,
  ExperienceControllerMobileButton,
} from "./experiencecontroller.styles"
import { getCurrentLanguageString, createPath } from "../../utility/helper";
import { navigate } from "gatsby";

class ExperienceControllerMobile extends  React.Component {
  experiences;
  language;
  visibleDelayTime = 5;
  changeExperienceDelayTime = 50;

  constructor(props) {
    super(props);
    this.language = getCurrentLanguageString(props.languages)
    this.state = {
      experiences : [
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
    }
  }



  changeExperience = chosenExperience => {
    if (chosenExperience.isReady) {
      let currentExperience = this.props.experience
      if (currentExperience < chosenExperience.id) {
        this.props.experienceIncreased()
      } else {
        this.props.experienceDecreased()
      }
      setTimeout(() => {
        this.props.changeExperience(chosenExperience.id);
      }, 50)
      navigate(createPath(this.language, '/'));
      setTimeout(() => {
        this.props.setIsVisibleToTrue()
      }, this.visibleTransitionTime)
    }
  }


  render() {
    this.experiences = this.state.experiences.map(item => {
      let exhibition = this.props.exhibitions.find(exhibition => {
        return item.id === parseInt(exhibition.experience)
      })
  
      let isReady = exhibition ? true  : false;
  
      return {
        id: item.id,
        isReady: isReady,
        display: item.display
      }
    })

    return (
      <ExperienceControllerMobileWrapper showInMobile={this.props.showInMobile}>
        {this.experiences.map((experience, index) => (
          <ExperienceControllerMobileButton isSelected={experience.id === this.props.experience} show={experience.isReady} key={index} onClick={()=> this.changeExperience(experience)}>
            <p>{index !== 3 ? "exp." : ""} {experience.display}</p>  
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
    languages: state.languages
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
