import { useSelector } from 'react-redux';

const ShowOnLogIn = ({ children }) => {
    const { isLoggedIn } = useSelector((state) => state.auth);
    if (isLoggedIn) {
        return children;
    } else {
        return null;
    }
};

export default ShowOnLogIn;
