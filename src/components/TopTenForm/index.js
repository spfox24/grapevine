import { useState } from 'react';
import InputField from '../InputField/InputField';
import { addTop } from '../../services/userService';

import { Link } from 'react-router-dom';
import './TopTenForm.css';


function TopTenForm(props) {
    
    const [ topFormState, setTopFormState ] = useState({
        title: "",
    });

    function getInitialFormState() {
        return {
            title: "",
        }
    };

    function handleChange(input, arg) {
        setTopFormState(prevState => ({
            ...prevState,
            [input.name]: arg,
        }));
    }

    async function handleSubmit(evt) {
        try {
            evt.preventDefault();
            await addTop(topFormState);

            setTopFormState(getInitialFormState());

            props.history.push('/dashboard');
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="TopTen-container">
            <h1 className="list-header">My Top Ten</h1>
                <section className="TopTenForm">
                    <form className="formBody" onSubmit={handleSubmit}>
                        <InputField
                            name="title"
                            handleChange={handleChange}  
                            type="text"
                            placeholder="Title"
                        />
                        <button>Add To Grapevine</button>
                        <div className="cancelLink">
                            <Link to="/dashboard" className="cancel">Cancel</Link>
                        </div>
                    </form>
                </section>
            <section className="TopTenList">
                <div className="list-container">
                    <ul className="list-main">
                        <li className="list-item"></li>
                    </ul>
                </div>
            </section>
        </div>
    )
};

export default TopTenForm;