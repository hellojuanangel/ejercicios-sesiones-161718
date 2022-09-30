import React from 'react';
import { useHistory } from 'react-router-dom';
import Loginformik from '../../components/pure/forms/loginFormik';
import { Button } from '@mui/material';

const Loginpage = () => {

    const history = useHistory();

    const navigateTo = (path) => {
        history.push(path);
    }

    return (
        <div>
            <h1>Login Page</h1>
            <Loginformik></Loginformik>
            <hr/>
            <Button variant="contained" onClick={() => navigateTo('/register')}>REGISTER</Button>
        </div>
    );
}

export default Loginpage;
