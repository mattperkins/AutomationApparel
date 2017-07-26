
import React, { Component } from 'react'
import styled from 'styled-components'
import { Wrapper } from './theme'


const Brand = styled.h1`
font-size: 72px;
`
export default class Header extends Component {
render() {
const brand = "Automation Apparel"
return (
<Wrapper>
<Brand>{brand}</Brand>
</Wrapper>
    
)
}
}

