import React from "react"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../../utility/helper"
import styled from "styled-components"
import { PageTitle } from "../../templates/page.styles"

const ParticipantVideo = styled.div`
  /* width: 80%; */
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`
const ExpNumber = styled.span`
font-size: 1em;
font-style: italic;
`


const ParticipantSingle = props => {
  let language = getCurrentLanguageString(props.languages)
  let participant = props.participant
  let experience = participant.experience
  experience = experience.filter(exp => {
    return exp != "4"
  })
  let isInExperience123 = () => {
    return (
      experience.includes("1") |
      experience.includes("2") |
      experience.includes("3")
    )
  }

  return (
    <>
      <PageTitle>
        {" "}
        {participant.group
          ? `${participant[language].participant_group_name}`
          : `${participant.firstname} ${participant.lastname}`}
      </PageTitle>
      <div>
        {isInExperience123() ? (
          <>
            <div
              dangerouslySetInnerHTML={{
                __html: participant[language].participant_venue,
              }}
            />
            <p>
              {ParticipantSingleText[language].was_part_of}
              {experience.map((exp, index) => {
                return (
                  <React.Fragment key={index}>
                    {experience.length === index + 1 && experience.length > 1
                      ? `${ParticipantSingleText[language].and}`
                      : ""}
                    <ExpNumber> exp. {exp} </ExpNumber>
                    {experience.length === index + 1 ||
                    experience.length - 1 === index + 1
                      ? ""
                      : ""}
                  </React.Fragment>
                )
              })}
            </p>
          </>
        ) : null}
      </div>
      <div>
        <h2>
          {participant.group
            ? `${participant[language].participant_group_name}`
            : `${participant.firstname} ${participant.lastname}`}
        </h2>
        <div
          dangerouslySetInnerHTML={{
            __html: participant[language].project_description,
          }}
        />

        {participant[language].short_bio ? (
        <div
          dangerouslySetInnerHTML={{
            __html: participant[language].short_bio,
          }}
        />
        ) : null}

        {participant[language].group_bios ? (
          <div>
            {participant[language].group_bios.map((member, index) => (
              <>
                <p key={index}> {member.full_name}</p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: member.biography,
                  }}
                />
              </>
            ))}
          </div>
        ) : null}
        
        {participant.video ? (
        <ParticipantVideo
          dangerouslySetInnerHTML={{
            __html: participant.video,
          }}
        />
         ) : null}
        {participant[language].participant_video_caption ? (
        <div
          dangerouslySetInnerHTML={{
            __html: participant[language].participant_video_caption,
          }}
        />
         ) : null}

      </div>
    </>
  )
}

const ParticipantSingleText = {
  EN: {
    was_part_of: "Was also part of:",
    and: "and ",
  },
  DE: {
    was_part_of: "War Teil von:",
    and: "und ",
  },
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(mapStateToProps, null)(ParticipantSingle)

