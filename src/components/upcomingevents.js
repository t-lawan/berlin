import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const events = [
    {
        id: 1,
        date: Date.now(),
        title: 'Title 1',
        subtitle: 'Subtitle 1',
        place: 'Place'
    },
    {
        id: 2,
        date: Date.now(),
        title: 'Title 1',
        subtitle: 'Subtitle 1',
        place: 'place 1'
    }
]

const EventsWrapper = styled.div`
`

const EventItem = styled.div`
    padding: 1em 0;

`
const UpcomingEvents = props => (
    <EventsWrapper>
        <h4> upcoming events </h4>
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