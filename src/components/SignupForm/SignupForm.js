import { useState } from 'react';
import { Link } from 'react-router-dom';

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

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log('submitted form data: ', formState)

        setFormState(getInitialFormState());
        props.history.push('/dashboard');
    };

    return(
        <div className="Page">
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