import React, { Component } from 'react'
import style from 'styled-components'
import './video.css'

const Wrapper = style.div`
	max-width: 1200px;
`
const Video = style.div`
position: fixed;
height: 100%;
width: 100%;
top: 0;
left: 0;
`
export default class App extends Component {
	constructor(props) {
	super(props)
	this.state = {
	}
}

  render() {
    return (
	<Wrapper>

<Video>		
	
	<iframe height="100%" width="100%" src="https://www.youtube.com/embed/i9IkIl3U02A?&autoplay=1&mute=1" frameborder="0" title="Automation Apparel" allowfullscreen/>
  		

</Video>		
	</Wrapper>
    );
  }
}

