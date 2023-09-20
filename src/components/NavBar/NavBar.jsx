import { NavLink, useNavigate } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    const navigate = useNavigate();
    const handleHomePage = () => {
        navigate('/');
    }
    return (
        <div className="flex flex-col md:flex-row justify-between shadow-xl py-5">
            <div>
                <h1 onClick={handleHomePage} className="text-3xl md:text-4xl lg:text-5xl font-medium cursor-pointer">AMAJOHN</h1>
            </div>
            <div>
                <ul className="flex gap-3 md:gap-5">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/products'>Products</NavLink>
                    <NavLink to='/profile'>Profile</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;