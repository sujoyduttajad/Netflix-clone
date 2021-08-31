import React, {useState} from 'react'
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';

const Signin = () => {
    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');

    // check form input elements are valid
    // email & password

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}

export default Signin
