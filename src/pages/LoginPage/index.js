import { useState } from 'react';
import { login } from '../../services/userService';

import './LoginPage.css';

const LoginPage = (props) => {

    const [ formState, setFormState ] = useState(getInitialFormState());

    function getInitialFormState() {
        return {
            email: "",
            password: "",
        }
    };

    function handleChange(evt) {
        setFormState(prevState => ({
            ...prevState,
            [evt.target.name]: evt.target.value
        }));
    }

    async function handleSubmit(evt) {
        try {
            evt.preventDefault();
            await login(formState)
            
            setFormState(getInitialFormState());

            props.handleSignupOrLogin();
    
            props.history.push('/dashboard');

        } catch (error) {
            alert(error.message);
        }
    };

    return(
        <div className="Page">
            <form onSubmit={handleSubmit}>

                <input 
                    value={formState.email} 
                    onChange={handleChange} 
                    name="email" 
                    type="email" 
                    placeholder="Email"
                />
                <input 
                    value={formState.password} 
                    onChange={handleChange} 
                    name="password" 
                    type="password" 
                    placeholder="Password"
                    />
                <button>Login</button>
            </form>
        </div>
    )
};

export default LoginPage;