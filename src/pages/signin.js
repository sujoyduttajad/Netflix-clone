import React, {useState} from 'react'
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';

const Signin = () => {
    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');


    return (
        <>
            <HeaderContainer>HELLO from sign in</HeaderContainer>
            <FooterContainer />
        </>
    )
}

export default Signin
