import { useEffect, useState } from 'react';
import InputField from '../InputField/InputField';
import { getUser, update } from '../../services/userService';
import { Link } from 'react-router-dom';
import './EditForm.css';
import { getToken } from '../../services/tokenService';
import logo from '../../img/gvlogo.png';

const BASE_URL = 'http://localhost:3001/api/users';

function EditForm(props) {
    
    const [ editState, setEditState ] = useState({
        title: "",
        content: "",
    });

    async function handleSubmit(evt) {
        try {

            evt.preventDefault();
            await update(editState);

            
            props.history.push('/dashboard');
            
            setEditState();
        } catch (error) {
            alert(error.message);
        }
    }

    function handleChange(input, arg) {
        setEditState(prevState => ({
            ...prevState,
            [input.name]: arg,
        }));
    }

    function handleContentChange(evt) {
        const value = evt.target.value;

        setEditState(prevState => ({
            ...prevState,
            content: value,
        }))
    }

    useEffect(() => {
        
        const userId = getUser()._id;

        const requestOptions = {
            headers: { 
                'Content-Type': 'Application/json',
                'Authorization': 'Bearer ' + getToken()
            }
        }
        fetch(BASE_URL + '/edit/:id' + userId, requestOptions)
        .then(response => response.json())
        .then(data =>  setEditState(data.topTenArray)
    )}, []);

    return (
        <div className="EditForm-container">
            <h1 className="list-header">Edit List</h1>
            <section className="EditForm">
                <form className="formBody" onSubmit={handleSubmit}>
                    <InputField
                        name="title"
                        handleChange={handleChange}  
                        type="text"
                        placeholder="Title"
                    />
                    <label for="Content"></label>
                        <div className="select">
                            <select className="Content-select" value={editState.content} onChange={handleContentChange}>
                                <option value="Movie">Movie</option>
                                <option value="Show">Show</option>
                                <option value="Book">Book</option>
                                <option value="">Content</option>
                            </select>
                            <span className="focus"></span>
                        </div>
                        <button>Submit</button>
                    <div className="cancelLink">
                        <Link to="/dashboard" className="cancel">Cancel</Link>
                    </div>
                </form>
            </section>
            <div>
                <img src={logo} className="logo-footer" alt="logo"/>
            </div>
        </div>
    )
}

export default EditForm;