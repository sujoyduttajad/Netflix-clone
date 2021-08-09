import React from 'react'
import { Header } from '../components/accordion/styles/accordion'

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