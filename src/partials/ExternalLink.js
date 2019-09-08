
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ExternalLink extends Component {
    static propTypes = {
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }

    render() {
        return (
            <a target="_blank" href={this.props.link}>
                {this.props.link}
            </a>
        )
    }
}
