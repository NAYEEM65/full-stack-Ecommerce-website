import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AdminOnlyRoute = ({ children }) => {
    const { email } = useSelector((state) => state.auth);
    const userEmail = email;
    if (userEmail === 'test@test.com') {
        return children;
    }
    return (
        <section className="min-h-[85vh] bg-gray-200 text-center">
            <div className="w-1/2 mx-auto">
                <h2 className="text-red-400">Access denied!!</h2>
                <p className="text-gray-700">This page only can be viewed by Admin.</p>
                <br />
                <Link to="/">
                    <button className="bg-gray-400 px-3 py-2 transition duration-100 ease-in-out rounded hover:bg-7lue-600">
                        &larr; Back to Home
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default AdminOnlyRoute;
