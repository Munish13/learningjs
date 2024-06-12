import React from "react";


const Navbar = () => {

    return (
        <div className="NavbarOuter bg-[#007aff]">
            <div className="container mx-auto ">
                <div className="navbar">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-2xl text-white">FreeCart</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><a className="text-white text-[16px]">Theme</a></li>
                            <li><a className="text-white text-[16px]">About</a></li>
                            <li><a className="text-white text-[16px]">Cart</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Navbar;