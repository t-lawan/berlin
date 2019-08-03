import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { EventsWrapper, EventItem } from "./upcomingevents.styles";

const events = [
    {
        id: 1,
        date: Date.now(),
        title: 'Art',
        subtitle: 'Subtitle 1',
        place: 'Lisbon'
    },
    {
        id: 2,
        date: Date.now(),
        title: 'Architecture',
        subtitle: 'Subtitle 1',
        place: 'London'
    }
]


const UpcomingEvents = props => (
    <EventsWrapper>
        {events.map(event => (
            <EventItem key={event.id}>
                <p> {event.date}</p>
                <p> {event.title}</p>
                <p> {event.subtitle}</p>
                <p> {event.place}</p>
            </EventItem>
        ))}
    </EventsWrapper>
)

export default UpcomingEvents;