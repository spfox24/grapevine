import { useEffect, useState } from 'react';
import InputField from '../InputField/InputField';
import { addTop } from '../../services/userService';
import { getUser } from '../../services/userService';
import { Link } from 'react-router-dom';
import './TopTenForm.css';
import { getToken } from '../../services/tokenService';

const BASE_URL = 'http://localhost:3001/api/users';

function TopTenForm(props) {
    
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
            [input.name]: arg,
        }));
    }

    function handleContentChange(evt) {
        const value = evt.target.value;

        setTopFormState(prevState => ({
            ...prevState,
            content: value,
        }))
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
                                <select className="Content-select" value={topFormState.content} onChange={handleContentChange}>
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
                            { listState && listState.map((item) => {
                                    return (
                                  <tr>
                                      <td className="title-data">{item.title}</td>
                                      <td className="content-data">{item.content}</td>
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