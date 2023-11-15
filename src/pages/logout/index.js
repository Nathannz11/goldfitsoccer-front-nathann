import AuthContext from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';




export default function SignUpAthlete() {

    const history = useHistory();
    const { authToken, logoutUser } = useContext(AuthContext);

    useEffect(() => {
        logoutUser();
        history.push("/");
    })
}