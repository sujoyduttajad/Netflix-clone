import React, {useState, useContext} from 'react'
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes'; 
// useHistory allows users to push into different pages on an action
import { useHistory } from 'react-router';


function Signup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' ||  password === '' || emailAddress === '';

    const handleSignUp = (event) => {
        event.preventDefault();

        // firebase auth(this is a Promise)
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                // push to the browse page
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            }); 
    };

    return (
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignUp} method="POST">
                    <Form.Input
                        placeholder="First Name"
                        value={firstName}
                        onChange={({ target }) => setFirstName(target.value)}  
                    />
                </Form.Base>
            </Form>
        </HeaderContainer>
    )
}

export default Signup
