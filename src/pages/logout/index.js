import AuthContext from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import { useEffect, useContext } from "react";

export default function Logout() {

    const history = useHistory();
    const { logoutUser } = useContext(AuthContext);

    useEffect(() => {
        logoutUser();
        history.push("/");
    })

    return (<></>)
}