import React from 'react'
import { Header } from '../components/header/styles/header'

function HeaderContainer() {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo />
                <Header.Button />
            </Header.Frame>
        </Header>
    )
}

export default HeaderContainer
