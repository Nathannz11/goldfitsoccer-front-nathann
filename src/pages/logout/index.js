import AuthContext from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

export default function Logout() {

    const history = useHistory();
    const { logoutUser } = useContext(AuthContext);

    useEffect(() => {
        logoutUser();
        history.push("/");
    })

    return (<></>)
}