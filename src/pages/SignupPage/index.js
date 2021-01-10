import SignupForm from '../../components/SignupForm/SignupForm';
import './SignupPage.css';

const SignupPage = (props) => {
    return (
        <div className="Page">
            <h1 className="SignupHeader">Signup</h1>
            <SignupForm 
            {...props}
            />
        </div>   
    );
};

export default SignupPage;