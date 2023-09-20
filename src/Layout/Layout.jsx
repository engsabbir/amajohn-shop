import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";

const Layout = () => {
    const navigation = useNavigation();
    // console.log(navigation)
    return (
        <div className="border border-black p-3">
            <NavBar></NavBar>
            <div className="min-h-screen">
                {
                    navigation.state === 'loading' ? <Spinner/> : <Outlet></Outlet>
                }
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;