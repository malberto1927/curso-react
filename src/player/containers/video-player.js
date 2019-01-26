import React, {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-players-controls'

import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner';
import Volumen from '../components/volumen';
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component {

    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false
    }

    togglePlay = event =>{
        this.setState({
            pause: !this.state.pause
        })
    }

    componentDidMount = () => {
        this.setState({
            pause: (!this.props.autoplay)
        })
    }

    handleLoadedMetadata = event => {
        this.video = event.target
        this.setState({
            duration: this.video.duration
        })
    }

    handleTimeUpdate = event => {
        this.setState({
            currentTime: this.video.currentTime
        })
    }

    handleProgressChange = event => {
        this.video.currentTime = event.target.value
    }

    handleSeeking = event => {
        this.setState({
            loading: true
        })
    }

    handleSeeked = event => {
        this.setState({
            loading: false
        })
    }

    handleVolumenChange = event => {
        this.video.volume = event.target.value
    }

    handleFullScreenClick = event => {
        if (!document.webkitIsFullScreen) {
            this.player.webkitRequestFullScreen()
        } else {
            document.webkitExitFullscreen()
        }
    }

    setRef = element => {
        this.player = element
    }

    render() {
        return (
            <VideoPlayerLayout setRef={this.setRef}>
                <Title title={this.props.title}/>
                <Controls>
                    <PlayPause pause={this.state.pause} handleClick={this.togglePlay}/>
                    <Timer duration={this.state.duration} currentTime={this.state.currentTime}/>
                    <ProgressBar duration={this.state.duration} progress={this.state.currentTime} handleProgressChange={this.handleProgressChange}/>
                    <Volumen handleVolumenChange={this.handleVolumenChange}/>
                    <FullScreen handleFullScreenClick={this.handleFullScreenClick}/>
                </Controls>
                <Spinner active={this.state.loading}></Spinner>
                <Video src={this.props.src} 
                    pause={this.state.pause} 
                    autoplay={this.props.autoplay} 
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}/>
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer