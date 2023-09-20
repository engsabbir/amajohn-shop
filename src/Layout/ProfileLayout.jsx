import { Link, Outlet } from "react-router-dom";
import './ProfileLayout.css'

const ProfileLayout = () => {
    return (
        <div id="profile-tab" className="flex gap-5">
            <div className="w-[20%] border border-black grid">
                <Link to='/profile'>Profile</Link>
                <Link to='/profile/edit'>Edit Profile</Link>
                <Link to='/profile/blog'>Blog</Link>
                <Link to='/profile/contact'>Contact Me</Link>
            </div>
            <div className="w-[80%] border border-black">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ProfileLayout;