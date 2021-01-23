import { useEffect, useState, useRef } from 'react';
import InputField from '../InputField/InputField';
import { getUser, updateList } from '../../services/userService';
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

    
        const itemUrl = props.location.pathname.split('/')
         
        const itemId = itemUrl[2];
            
        try {
            evt.preventDefault();
            await updateList(editState, itemId);

            props.history.push('/dashboard');

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

        const itemUrl = props.location.pathname.split('/')
        const itemId = itemUrl[2];
        

        fetch(`${BASE_URL}/edit/${itemId}/${userId}`, requestOptions)
        .then(response => response.json())
        .then(data => setEditState({ title: data.listItem.title, content: data.listItem.content }))
    }, []);

    const inputRef = useRef();

    useEffect(() => {
            inputRef.current.populateEditField(editState.title)
    }, [editState]);

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
                        ref={inputRef}
                        value={editState.title}
                        active={true}
                        locked={true}
                    />
                    <label for="Content"></label>
                        <div className="select">
                            <select 
                                className="Content-select" 
                                value={editState.content} 
                                onChange={handleContentChange}>
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