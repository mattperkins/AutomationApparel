import React, { Component } from 'react'
import styled from 'styled-components'
import { Wrapper } from './theme'

const Video = styled.div`
height: 630px;
width: 100%;
`
export default class App extends Component {
constructor(props) {
super(props)
this.state = {
youtubeVideoUrl: 'https://www.youtube.com/embed/yISZkS2VaIk'
}
}

render() {
return (
<Wrapper>
<Video>		
	
<iframe height="100%" width="100%" src={this.state.youtubeVideoUrl + '?autoplay=0&mute=1'} frameborder="0" title="Automation Apparel" allowfullscreen/>
  		
</Video>		
</Wrapper>
);
}
}

