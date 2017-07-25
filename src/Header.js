
import React, { Component } from 'react'
import styled from 'styled-components'
import { Wrapper } from './theme'


const Brand = styled.h1`
font-size: 72px;
`
export default class Header extends Component {
render() {
return (

<Wrapper>
<Brand>Automation Apparel</Brand>
</Wrapper>
    
)
}
}

