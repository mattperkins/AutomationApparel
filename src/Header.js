
import React, { Component } from 'react'
import styled from 'styled-components'
import { Wrapper } from './theme'


const Brand = styled.h1`
font-size: 72px;
`
export default class App extends Component {
constructor(props) {
super(props)
}

render() {
return (

<Wrapper>
<Brand>Automation Apparel</Brand>
</Wrapper>
    
)
}
}

