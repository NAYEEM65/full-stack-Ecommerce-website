import { useSelector } from 'react-redux';

const AdminOnlyRoute = ({ children }) => {
    const { email } = useSelector((state) => state.auth);
    const userEmail = email;
    if (userEmail === 'test@test.com') {
        return children;
    }
    return null;
};

export default AdminOnlyRoute;
