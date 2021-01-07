import { useState } from 'react';
import { signup } from '../../services/userService';
import './SignupForm.css';

function SignupForm(props) {

    const [ formState, setFormState ] = useState(getInitialFormState());

    function getInitialFormState() {
        return {
            name: "",
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
            <form onSubmit={handleSubmit}>
                <input 
                    value={formState.name} 
                    onChange={handleChange} 
                    name="name" 
                    type="text"
                    placeholder="Name"
                />
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
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignupForm;