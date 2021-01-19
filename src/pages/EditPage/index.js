import EditForm from '../../components/EditForm';
import './EditPage.css';

const EditPage = (props) => {
    return (
        <div className="Page">
            <main className="EditMain">
                <EditForm 
                history={props.history}
                {...props}
                />
            </main>
        </div>  
    );
};

export default EditPage;