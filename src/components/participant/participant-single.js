import React from "react"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../../utility/helper"
import { PageTitle, ExpNumber } from "../../templates/page.styles"
import RelatedResources from "../resources/related-resources";

const ParticipantSingle = props => {
  let language = getCurrentLanguageString(props.languages)
  let participant = props.participant

  let isInExperience123 = () => {
    return (
      participant.experience.includes("1") |
      participant.experience.includes("2") |
      participant.experience.includes("3")
    )
  }
  console.log("PROPS", participant)
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
              {" "}
              Was also part of:{" "}
              {participant.experience.map((exp, index) => {
                return (
                  <>
                    {participant.experience.length === index + 1 && participant.experience.length > 1 ? "and" : ""}
                    <ExpNumber>exp. {exp}</ExpNumber>
                    {participant.experience.length === index + 1  || participant.experience.length - 1 === index + 1 ? "" : ","}
                  </>
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

        <div
          dangerouslySetInnerHTML={{
            __html: participant[language].short_bio,
          }}
        />

        <div
          dangerouslySetInnerHTML={{
            __html: participant[language].works_list,
          }}
        />
        {participant.related_resources ? <RelatedResources ids={participant.related_resources} /> : null}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(mapStateToProps, null)(ParticipantSingle)
