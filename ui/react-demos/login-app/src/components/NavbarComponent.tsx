import { Principal } from "../models/Principal";

interface INavbarProps {
    currentUser: Principal | undefined,
    setCurrentUser: (nextUser: Principal | undefined) => void
}


function NavbarComponent(props: INavbarProps) {

    return (
        <>
        </>
    );
}

export default NavbarComponent;