import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import styled from "styled-components"
import { getDocument } from "../store/selector"
import { getCurrentLanguageString } from "../utility/helper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlayCircle,
  faPlay,
  faPause,
  faBackward,
  faForward,
  faVolumeDown,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons"
import { TextBlock } from "../templates/page.styles"

const AudioResourceWrapper = styled.section`
  /* display: flex;
  flex-direction: row; */
  padding: 1em 0;
`

const ActionIcons = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em 0;
`

const ActionIcon = styled(FontAwesomeIcon)`
  margin-right: 1em;
  :hover {
    cursor: pointer;
  }
  transition: ease-in-out;
  transition-duration: 10;
  display: ${props => (props.show ? "inherit" : "none")};
`

const ProgressEl = styled.progress``
class AudioResource extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    withCaption: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)
    this.audio_tag = React.createRef()
    this.state = {
      isPlaying: false,
      currentTime: 0,
      length: 0,
    }
  }
  audio
  language
  skipPercentage = 0.02
  changeVolume = 0.1

  setAudioInfo = () => {
    let audio = this.audio_tag.current
    this.setState({
      currentTime: audio.currentTime,
      length: audio.duration,
    })
  }
  initProgressBar = () => {
    let audio = this.audio_tag.current
    this.setState({
      currentTime: audio.currentTime,
      length: audio.duration,
    })

    this.reset()
  }

  play = () => {
    this.audio_tag.current.play()
    this.setState({
      isPlaying: true,
    })
  }

  pause = () => {
    this.audio_tag.current.pause()
    this.setState({
      isPlaying: false,
    })
  }

  reset = () => {
    if (this.audio_tag.current.currentTime === this.state.length) {
      this.audio_tag.current.currentTime = 0
    }
  }

  forward = () => {
    if (this.audio_tag.current.currentTime !== this.state.length) {
      this.audio_tag.current.currentTime =
        this.audio_tag.current.currentTime +
        this.skipPercentage * this.state.length
    }
  }
  backward = () => {
    if (
      this.audio_tag.current.currentTime >
      this.skipPercentage * this.state.length
    ) {
      this.audio_tag.current.currentTime =
        this.audio_tag.current.currentTime -
        this.skipPercentage * this.state.length
    } else {
      this.audio_tag.current.currentTime =
        this.audio_tag.current.currentTime -
        (this.skipPercentage / 4) * this.state.length
    }
  }

  increaseVolume = () => {
    if (this.audio_tag.current.volume !== 1) {
      this.audio_tag.current.volume =
        this.audio_tag.current.volume + this.changeVolume
    }
  }

  decreaseVolume = () => {
    if (this.audio_tag.current.volume > this.changeVolume) {
      this.audio_tag.current.volume =
        this.audio_tag.current.volume - this.changeVolume
    }
  }

  calculateTotalValue = length => {
    let hours = Math.floor(length / 3600)
    console.log(hours)
    let minutes = Math.floor(length / 60),
      seconds_int = length - minutes * 60,
      seconds_str = seconds_int.toString(),
      seconds = seconds_str.substr(0, 2)

    let time =
      hours > 0
        ? `${hours}:${this.showProperTime(minutes - hours * 60)}:${this.showProperTime(seconds)}`
        : `${this.showProperTime(minutes)}:${this.showProperTime(seconds)}`

    return time
  }

  showProperTime = (value) => {
    let time = value < 10 ? "0" + value : value;
    return time;
  }

  calculateCurrentValue = currentTime => {
    let current_hour = Math.floor(currentTime / 3600),
      current_minute = Math.floor(currentTime / 60),
      current_seconds_int = currentTime - current_minute * 60,
      current_seconds_str = current_seconds_int.toString(),
      current_seconds = current_seconds_str.substr(0, 2)

    let current_time =
      current_hour > 0 ?
      `${current_hour}:${this.showProperTime(current_minute - current_hour * 60)}:${this.showProperTime(current_seconds)}`
      : `${this.showProperTime(current_minute)}:${this.showProperTime(current_seconds)}`;

    return current_time
  }

  // calculateCurrentValue = currentTime => {
  //   let current_hour = parseInt(currentTime / 3600) % 24,
  //     current_minute = parseInt(currentTime / 60) % 60,
  //     current_seconds_long = currentTime % 60,
  //     current_seconds = current_seconds_long.toFixed()

  //   let current_time =
  //     current_hour > 0 ?
  //     `${this.showProperTime(current_minute)}:${this.showProperTime(current_seconds)}`
  //     : `${current_hour}:${this.showProperTime(current_minute)}:${this.showProperTime(current_seconds)}`;

  //   return current_time
  // }

  UNSAFE_componentWillMount() {
    this.audio = getDocument(this.props.documents, this.props.id)
  }

  componentDidMount() {}
  render() {
    this.language = getCurrentLanguageString(this.props.languages)
    return (
      <AudioResourceWrapper>
        <audio
          preload="metadata"
          ref={this.audio_tag}
          controls
          hidden={true}
          onTimeUpdate={() => this.initProgressBar()}
          onLoadedMetadata={this.setAudioInfo}
        >
          <source src={this.audio.url} />
        </audio>
        <ActionIcons>
          <ActionIcon
            onClick={() => this.play()}
            show={!this.state.isPlaying ? 1 : 0}
            icon={faPlay}
          />
          <ActionIcon
            onClick={() => this.pause()}
            show={this.state.isPlaying ? 1 : 0}
            icon={faPause}
          />
        </ActionIcons>
        <TextBlock>
          <p>
            {this.calculateCurrentValue(this.state.currentTime)} |{" "}
            {this.calculateTotalValue(this.state.length)}
          </p>
        </TextBlock>
        <ActionIcons hidden={this.state.isPlaying}>
          <ActionIcon
            onClick={() => this.backward()}
            icon={faBackward}
            show={this.state.isPlaying ? 1 : 0}
          />
          <ActionIcon
            onClick={() => this.forward()}
            icon={faForward}
            show={this.state.isPlaying ? 1 : 0}
          />
          <ActionIcon
            onClick={() => this.decreaseVolume()}
            icon={faVolumeDown}
            show={this.state.isPlaying ? 1 : 0}
          />
          <ActionIcon
            onClick={() => this.increaseVolume()}
            icon={faVolumeUp}
            show={this.state.isPlaying ? 1 : 0}
          />
        </ActionIcons>
        {/* <ActionIcons hidden={this.state.isPlaying}>
            <ActionIcon onClick={() => this.backward()} icon={faVolumeDown} show={this.state.isPlaying ? 1 : 0}/>
            <ActionIcon onClick={() => this.forward()} icon={faVolumeUp} show={this.state.isPlaying ? 1 : 0}/>
        </ActionIcons> */}
      </AudioResourceWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
  }
}
export default connect(
  mapStateToProps,
  null
)(AudioResource)
