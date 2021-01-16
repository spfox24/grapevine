import TopTenForm from '../../components/TopTenForm';
import './DashboardPage.css';

const DashboardPage = (props) => {
    return (
        <div className="Page">
            <main className="DashMain">
                <TopTenForm 
                history={props.history}
                {...props}
                />
            </main>
        </div>  
    );
};

export default DashboardPage;