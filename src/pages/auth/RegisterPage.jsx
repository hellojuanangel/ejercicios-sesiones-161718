import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';

const Registerpage = () => {

    const history = useHistory();

    const navigateTo = (path) => {
        history.push(path);
    }

    return (
        <div>
            <h1>Register Page</h1>
            <Button variant="contained" onClick={() => navigateTo('/login')}>LOGIN</Button>
        </div>
    );
}

export default Registerpage;
