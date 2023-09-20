import { Link, Outlet } from "react-router-dom";

const ProfileLayout = () => {
    return (
        <div id="profile-tab" className="flex gap-5">
            <div className="w-[20%] grid gap-2 text-xl">
                <Link className="hover:bg-gray-400 hover:text-white" to='/profile'>Profile</Link>
                <Link className="hover:bg-gray-400 hover:text-white" to='/profile/edit'>Edit Profile</Link>
                <Link className="hover:bg-gray-400 hover:text-white" to='/profile/blog'>Blog</Link>
                <Link className="hover:bg-gray-400 hover:text-white" to='/profile/contact'>Contact Me</Link>
            </div>
            <div className="w-[80%]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ProfileLayout;