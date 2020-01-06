import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as actionTypes from "../../store/action"
import {
  ExperienceControllerWrapper,
  ExperienceButton,
} from "./experiencecontroller.styles"
import { navigate } from 'gatsby';
import { createPath, getCurrentLanguageString } from "../../utility/helper";
class ExperienceController extends React.Component {
  experiences;
  language;
  constructor(props) {
    super(props);
    this.language = getCurrentLanguageString(props.languages);
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
      }, 5)
    }
  }

  // componentDidMount() {
  //   let latestExperience = this.experiences.map(item => {
  //     return item.isReady
  //   });
  //   let index = latestExperience.lastIndexOf(true);
  //   if(index !== -1) {
  //     this.props.changeExperience(this.experiences[index].id);
  //   }
  // }

  filterBasedOnPosition = (experience) => {
    if (this.props.left) {
      return experience.id < this.props.experience
    } else {
      return experience.id > this.props.experience
    }
  }
  render() {
    this.experiences = this.state.experiences.map(item => {
      let exhibition = this.props.exhibitions.find(exhibition => {
        return item.id === parseInt(exhibition.experience)
      })
      let isReady = exhibition ? true : false;
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
        <ExperienceButton hidden={this.experiences.length === 0} show>
          <img src="https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/expnav_prev.svg" />
          <img src="https://11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/expnav_next.svg" />
        </ExperienceButton>
        <ExperienceButton bold hidden={this.experiences.length === 0} show>
          <span> exp. </span>
        </ExperienceButton>
        {this.experiences.map(experience => (
          <ExperienceButton
            key={experience.id}
            bold
            hover={experience.isReady}
            show={experience.isReady}
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
    languages: state.languages
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
