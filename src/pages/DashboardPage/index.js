import TopTenForm from '../../components/TopTenForm';
import './DashboardPage.css';

const DashboardPage = (props) => {
    return (
        <div className="Page">
            <main className="DashMain">
                <TopTenForm 
                {...props}
                />
            </main>
        </div>  
    );
};

export default DashboardPage;