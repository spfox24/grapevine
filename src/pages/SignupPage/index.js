import SignupForm from '../../components/SignupForm/SignupForm';
import './SignupPage.css';

const SignupPage = (props) => {
    return (
        <div className="Page">
            <SignupForm 
            {...props}
            />
        </div>   
    );
};

export default SignupPage;