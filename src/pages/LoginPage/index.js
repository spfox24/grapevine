import { useState } from 'react';
import { login } from '../../services/userService';
import InputField from '../../components/InputField/InputField';

import './LoginPage.css';

const LoginPage = (props) => {

    const [ formState, setFormState ] = useState({
        email: "",
        password: "",
    });

    function getInitialFormState() {
        return {
            email: "",
            password: "",
        }
    };

    function handleChange(input, arg) {
        setFormState(prevState => ({
            ...prevState,
            [input.name]: arg,
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
            <h1 className="LoginHeader">Login</h1>
            <div className="LoginForm">
                <form className="formBody" onSubmit={handleSubmit}>

                    <InputField 
                        value={formState.email} 
                        handleChange={handleChange} 
                        name="email" 
                        type="email" 
                        placeholder="Email"
                    />
                    <InputField 
                        value={formState.password} 
                        handleChange={handleChange} 
                        name="password" 
                        type="password" 
                        placeholder="Password"
                        />
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
};

export default LoginPage;