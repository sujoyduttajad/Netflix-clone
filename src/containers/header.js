import React from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="Netflix" />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>SIgn In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}

export default HeaderContainer
