import { Navigate } from "react-router-dom";
import { Principal } from "../models/Principal";

interface IDashboardProps {
    currentUser: Principal | undefined;
}

function DashboardComponent(props: IDashboardProps) {
    return (
        !props.currentUser ? <Navigate to="/login"/> :
        <h1>Welcome, {props.currentUser.username}!</h1>
    );
}

export default DashboardComponent;