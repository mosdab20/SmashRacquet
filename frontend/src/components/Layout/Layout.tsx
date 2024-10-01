// import React from 'react';

// import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header.tsx";

const Layout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="mt-20 p-4 mb-20 ">
                <Outlet/>
            </main>
            
        </div>
    );
};

export default Layout;