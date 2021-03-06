import React, { Component } from 'react'
import Header from './Header'
import Video from './Video'
import { injectGlobal } from 'styled-components'
import { Wrapper } from './theme'

injectGlobal`
body {
margin: 0;
padding: 0;
font-family: sans-serif;
}
`

export default class App extends Component {
constructor(props) {
super(props)
}


render() {
return (
<Wrapper>
<Header />
<Video />
</Wrapper>
)
}
}

