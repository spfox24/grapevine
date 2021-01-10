import { useState } from 'react';
import { signup } from '../../services/userService';
import { Link } from 'react-router-dom';
import InputField from '../InputField/InputField';
import './SignupForm.css';

function SignupForm(props) {
    
    const [ formState, setFormState ] = useState({
        name: "",
        email: "",
        password: "",
    });
    
    function getInitialFormState() {
        return {
            name: "",
            email: "",
            password: "",
        }
    };

    function handleChange(arg) {
        setFormState(prevState => ({
            ...prevState,
            [arg.name]: arg.value,
        }));
    }

    async function handleSubmit(evt) {
        try {
            evt.preventDefault();
            await signup(formState)
            
            setFormState(getInitialFormState());

            props.handleSignupOrLogin();
    
            props.history.push('/dashboard');

        } catch (error) {
            alert(error.message);
        }
    };

    return(
        <div className="SignupForm">
            <form className="formBody" onSubmit={handleSubmit}>
                    <InputField 
                        value={formState.name} 
                        handleChange={handleChange} 
                        name="name" 
                        type="text"
                        placeholder="User Name"
                    />
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
                <div className="Button">
                    <button>Sign Up</button>
                </div>
                <div className="cancelLink">
                    <Link className="cancel" to='/'>Cancel</Link>
                </div>
            </form>
        </div>

    )
}

export default SignupForm;