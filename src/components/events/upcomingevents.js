import React from "react"
import {
  EventsWrapper,
  EventItem,
  EventLink,
  EventTitle,
} from "./upcomingevents.styles"
import { connect } from "react-redux"
import {
  getCurrentLanguageString,
  createPath,
  truncateText,
} from "../../utility/helper"
import { getVenue } from "../../store/selector"
import striptags from "striptags"
import * as actionTypes from "../../store/action"
import { DateManager } from "../../utility/date"

const UpcomingEvents = props => {
  const language = getCurrentLanguageString(props.languages)
  let currentExhibition = props.exhibitions.find(exhibition => {
    return exhibition.experience == props.experience
  })
  let filteredItems;
  if(props.isCurrent) {
    filteredItems = props.calendar_items
    .filter(item => {
        return (
          item.experience.includes(props.active_experience.toString()) &&
          item.item === "event" &&
          DateManager.getDaysFromCurrentDate(item.start_date) >= 0
        )

    })
    .sort((a, b) => {
      return a.start_date - b.start_date
    })
  } else {
    filteredItems = props.calendar_items
    .filter(item => {
      if (DateManager.getDaysFromCurrentDate(currentExhibition.end_date) >= 0) {
        return (
          item.experience.includes(props.experience.toString()) &&
          item.item === "event" &&
          (props.experience >= props.active_experience
            ? item.end_date ? DateManager.getDaysFromCurrentDate(item.end_date) >= 0 :  DateManager.getDaysFromCurrentDate(item.start_date) >= 0
            : true)
        )
      } else {
        return (
          item.item === "event" &&
          item.experience.includes(props.experience.toString())
        )
      }
    })
    .sort((a, b) => {
      return a.start_date - b.start_date
    })
  }


  return (
    <EventsWrapper isCurrent={props.isCurrent} isHome={props.isHome}>
      <p hidden={filteredItems.length !== 0}> {language === "EN" ? "" : ""} </p>
      {filteredItems.map(item => (
        <EventItem isActive={currentExhibition.active} key={item.id}>
          <EventLink
            onClick={() => props.startTransition()}
            to={createPath(language, `${item.slug}`)}
          >
            {/* <EventLink
            cover
            direction="down"
            bg={transitionBackground}
            colour="black"
            to={createPath(language, `${item.slug}`)}
          > */}
            <p>
              {" "}
              {DateManager.createLongDateString(
                item.start_date,
                language.toLowerCase()
              )} – {item.end_date ? DateManager.createLongDateString(
                item.end_date,
                language.toLowerCase()
              ) : null}
            </p>
            <p> {item[language].display_time}</p>
            <EventTitle
              dangerouslySetInnerHTML={{ __html: item[language].title }}
            />
            {item[language].subtitle ? (
              <EventTitle
                dangerouslySetInnerHTML={{
                  __html: `<p>${truncateText(
                    striptags(item[language].subtitle),
                    16
                  )} ...</p>`,
                }}
              />
            ) : null}

            <p> {item.venue ? getVenue(props.venues, item.venue[0])[language].venue_name : null}</p>
            <p>
              {item.language == "other"
                ? item[language].other_language
                : UpcomingEventsContent[language][item.language]}
            </p>
            <p hidden={!item.is_free}>
              {" "}
              {`${UpcomingEventsContent[language].free_admission}${
                item.limited_capacity
                  ? `, ${UpcomingEventsContent[language].limited_capacity}`
                  : ""
              }`}
            </p>
          </EventLink>
        </EventItem>
      ))}
    </EventsWrapper>
  )
}

export const UpcomingEventsContent = {
  DE: {
    free_admission: "Freier Eintritt",
    limited_capacity: "begrenzte Kapazität",
    en: "Auf Englisch",
    de: "Auf Deutsch",
    rsvp: "RSVP erforderlich",
  },
  EN: {
    free_admission: "Free admission",
    limited_capacity: "limited capacity",
    en: "In English",
    de: "In German",
    rsvp: "RSVP Required",
  },
}

// UpcomingEvents.propTypes = {
// isHome: PropTypes.boolean,
// }

UpcomingEvents.defaultProps = {
  isHome: false,
  isCurrent: false
}
const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
    calendar_items: state.calendar_items,
    venues: state.venues,
    active_experience: state.active_experience,
    exhibitions: state.exhibitions,
    news: state.news,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startTransition: () => dispatch({ type: actionTypes.START_TRANSITION }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingEvents)
