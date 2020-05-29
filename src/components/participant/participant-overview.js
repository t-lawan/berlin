import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { TwoColumnPageWrapper } from "../../templates/page.styles"
import { capitalise } from "../../utility/helper"

const AlphabetContainer = styled.div`
  margin-bottom: 1rem;
`

const AlphabetLanguageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
`

const ExperienceContainer = styled.div``

const AlphabetText = styled.span`
  padding: 0.4rem 0.2rem;
  :hover {
    cursor: pointer;
  }
`

const ExperienceState = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  ALL: 5,
}

const ParticipantName = styled.p`
  opacity: ${props => (props.isSelected ? 1 : 0.6)};
`

const ExperienceText = styled.span`
  display: block;
  margin-bottom: 0.4rem;
  :hover {
    cursor: pointer;
  }
`

const ExperienceImage = styled.img`
  margin-top: 1rem;
  width: 10% !important;
  :hover {
    cursor: pointer;
  }
`
class ParticipantOverView extends Component {
  alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
  partipants = []
  experiences = [
    {
      id: 1,
      isText: true,
      display: "exp 1",
    },
    {
      id: 2,
      isText: true,
      display: "exp 2",
    },
    {
      id: 3,
      isText: true,
      display: "exp 3",
    },
    {
      id: 4,
      isText: false,
      display:
        "https://admin11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/bb11_logo_nav.svg",
    },
  ]

  constructor(props) {
    super(props)
    this.state = {
      chosenExperience: ExperienceState.TWO,
    }
    this.partipants = this.alphabet.map(value => {
      return {
        participants: [
          { name: `${value + "elena"}`, experience: 1 },
          { name: `${value + "homas"}`, experience: 2 },
        ],
        letter: value,
      }
    })
  }

  experienceHasChosen = experience => {
    switch (this.state.chosenExperience) {
      case ExperienceState.ONE:
        return experience === this.state.chosenExperience
      case ExperienceState.TWO:
        return experience === this.state.chosenExperience
      case ExperienceState.THREE:
        return experience === this.state.chosenExperience
      case ExperienceState.FOUR:
        return experience === this.state.chosenExperience
      case ExperienceState.ALL:
        return true
      default:
        return true
    }
  }

  changeExperience = experience => {
    let chosenExperience = experience === this.state.chosenExperience ? ExperienceState.ALL : experience;
    
    this.setState({
        chosenExperience: chosenExperience
    });
  }
  render() {
    console.log("Sorting NAme", this.partipants)
    return (
      <TwoColumnPageWrapper>
        <div>
          <AlphabetContainer>
            {this.alphabet.map((value, index) => (
              <AlphabetText key={index}> {value.toUpperCase()} </AlphabetText>
            ))}
          </AlphabetContainer>
          <ExperienceContainer>
            {this.experiences.map((value, index) => (
              <>
                {value.isText ? (
                  <ExperienceText onClick={() => this.changeExperience(value.id)} key={index}> {value.display} </ExperienceText>
                ) : (
                  <ExperienceImage onClick={() => this.changeExperience(value.id)} src={value.display} />
                )}
              </>
            ))}
          </ExperienceContainer>
        </div>
        <div>
          {this.partipants.map((value, index) => (
            <AlphabetLanguageContainer key={index}>
              <div>
                <p> {value.letter.toUpperCase()}</p>
              </div>
              <div>
                {value.participants.map((participant, i) => (
                  <ParticipantName
                    isSelected={this.experienceHasChosen(
                      participant.experience
                    )}
                    key={i}
                  >
                    {" "}
                    {capitalise(participant.name)}{" "}
                  </ParticipantName>
                ))}
              </div>
            </AlphabetLanguageContainer>
          ))}
        </div>
      </TwoColumnPageWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(mapStateToProps, null)(ParticipantOverView)
