import { useEffect, useState, useRef } from 'react';
import InputField from '../InputField/InputField';
import { addTop } from '../../services/userService';
import { getUser } from '../../services/userService';
import { Link } from 'react-router-dom';
import './TopTenForm.css';
import { getToken } from '../../services/tokenService';


const BASE_URL = 'https://grapevine-content-app.herokuapp.com/api/users';

function TopTenForm(props) {
    
    const inputRef = useRef();

    const [ topFormState, setTopFormState ] = useState({
        title: "",
        content: "",
    });
    
    const [ listState, setListState ] = useState([])


    useEffect(() => {
        
        const userId = getUser()._id;

        const requestOptions = {
            headers: { 
                'Content-Type': 'Application/json',
                'Authorization': 'Bearer ' + getToken()
            }
        }
        fetch(BASE_URL + '/dashboard/' + userId, requestOptions)
        .then(response => response.json())
        .then(data =>  setListState(data.topTenArray)
    )}, []);

    function getInitialFormState() {
        return {
            title: "",
            content: "",
        }
    };

    function handleChange(input, arg) {
        setTopFormState(prevState => ({
            ...prevState,
            [input.name]: arg
        })
        );
    }

    function handleContentChange(evt) {
        const value = evt.target.value;

        setTopFormState(prevState => ({
            ...prevState,
            content: value,
        }))
    }

function handleDelete(idx) {
    
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + getToken()
            }
        }; 
        fetch(BASE_URL + '/delete/' + idx, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data)


            const state = [...listState];
            console.log('state:', state)
            state.splice(idx, 1);
            setListState(state);
            console.log(state);
        })

        props.history.push('/dashboard');
        
}
    async function handleSubmit(evt) {
        try {
            evt.preventDefault();
            await addTop(topFormState);

            props.history.push('/dashboard');
            
            setTopFormState(getInitialFormState());

            inputRef.current.changeInputState();

            const userId = getUser()._id;

            const requestOptions = {
                headers: { 
                    'Content-Type': 'Application/json',
                    'Authorization': 'Bearer ' + getToken()
                }
            }
            fetch(BASE_URL + '/dashboard/' + userId, requestOptions)
            .then(response => response.json())
            .then(data =>  setListState(data.topTenArray)
        )} catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="TopTen-container">
            <h1 className="list-header">My Grapevine</h1>
                <section className="TopTenForm">
                    <form className="formBody" onSubmit={handleSubmit}>
                        <InputField
                            name="title"
                            handleChange={handleChange}  
                            type="text"
                            placeholder="Title"
                            ref={inputRef}
                        />
                        <label for="Content"></label>
                            <div className="select">
                                <select className="Content-select" 
                                    value={topFormState.content} 
                                    name="content"
                                    onChange={handleContentChange}>
                                    <option value="Movie">Movie</option>
                                    <option value="Show">Show</option>
                                    <option value="Book">Book</option>
                                    <option value="">Content</option>
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
                            { listState && listState.map((item, idx) => {
                                    return (
                                  <tr>
                                      <td className="title-data">{item.title}</td>
                                      <td className="content-data">{item.content}</td>
                                      <td>
                                            <Link to={`/edit/${item._id}`} className="edit">
                                                <i className="fa fa-edit"></i>
                                            </Link>
                                      </td>
                                      <td className="delete" 
                                        onClick={() => handleDelete(idx)}>
                                            <i className="fas fa-times-circle"></i>
                                      </td>
                                  </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
};

export default TopTenForm;