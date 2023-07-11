import { Link } from "react-router-dom";
import './NavBar.scss'

const NavBar = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/gh'>GitHub User Search</Link>
                </li>
                <li>
                    <Link to='/bmi'>BMI Calculator</Link>
                </li>
            </ul>
        </>
    )
}

export default NavBar;