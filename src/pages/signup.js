import React, {useState, useContext} from 'react'
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes'; 
// useHistory allows users to push into different pageson an action
import { useHistory } from 'react-router';


function Signup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');

    return (
        <div>
            <h1>Hello from the signup</h1>
        </div>
    )
}

export default Signup
