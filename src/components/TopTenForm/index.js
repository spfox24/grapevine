import { useState } from 'react';
import InputField from '../InputField/InputField';
import { addTop } from '../../services/userService';

import { Link } from 'react-router-dom';
import './TopTenForm.css';


function TopTenForm(props) {
    
    const [ topFormState, setTopFormState ] = useState({
        title: "",
        content: "",
    });

    function getInitialFormState() {
        return {
            title: "",
            content: "",
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
                        <label for="Content"></label>
                            <div className="select">
                                <select className="Content-select">
                                    <option value="Movie">Movie</option>
                                    <option value="Show">Show</option>
                                    <option value="Book">Book</option>
                                </select>
                                <span className="focus"></span>
                            </div>
                            <button>Add To Grapevine</button>
                        <div className="cancelLink">
                            <Link to="/" className="cancel">Cancel</Link>
                        </div>
                    </form>
                </section>
            <section className="TopTenList">
                <div className="list-container">
                    <table className="list-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* User.topTen.forEach(function(top){ */}
                        <tr>
                            <td className="title-data">Harry Potter</td>
                            <td className="content-data">Book</td>
                                    {/* <td className="list-item">{topTen.title}</td> */}
                                    {/* <td className="list-item">{topTen.content}</td> */}
                        </tr>
                            {/* }) */}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
};

export default TopTenForm;