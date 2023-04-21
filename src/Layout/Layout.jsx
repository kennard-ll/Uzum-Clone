import { Outlet } from "react-router-dom";

import ResponsiveDrawer from "../component/Drawer";


const Layout = () => {
    return (
        <div className="px-3 max-w-[1240px] m-auto ">
            <ResponsiveDrawer />
            <main className="mt-[80px] lg:mt-[5px]"><Outlet /></main>
        </div>
    );
}

export default Layout;