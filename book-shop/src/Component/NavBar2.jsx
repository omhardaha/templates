import React from "react";
// import {Link} from "react/"
import { useState } from 'react'
import { MdVerified } from "react-icons/md"
import { CgLogOff } from "react-icons/cg"
import { VscClose } from "react-icons/vsc"
import { IoLogoSlack } from "react-icons/io"

function NavBar2() {
    let profilePicUrl = "https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
    let username = "omhardaha1"
    let email = "omhardaha1"
    const [menu, setMenu] = useState(true);
    return (
        <>
            <div className='sticky top-0 w-full z-10'>

                <nav className='cursor-pointer drop-shadow p-4 bg-white shadow font-semibold flex items-center justify-around text-larq w-full '>

                    <div className='flex justify-between items-center'>

                        <span >
                            <div className="flex">
                                <div>
                                    <a href="/">
                                        <IoLogoSlack className="hover:text-black hover:animate-spin text-5xl inline1 pl-1 text-purple-600" />
                                    </a>
                                </div>
                                <div className="my-auto pl-3 lg:pl-10">
                                </div>

                            </div>
                        </span>

                    </div>
                </nav>
            </div>

            <div style={{ 'font-family': 'Source Code Pro' }} className="flex text-xl items-center flex-col mt-10 ">
                <div className="p-10 drop-shadow-lg bg-white">
                    <div >
                        <input type="text" placeholder="Email" className="p-2 font-['Cabin Sketch']  focus:border-b-2 no-outline" outline-none />
                    </div>

                    <div className="my-3">
                        <input type="password" placeholder="Password" className="p-2 font-['Cabin Sketch'] no-outline" />
                    </div>

                    <div className="pt-2">
                        <button className="w-full text-white bg-purple-500  hover:bg-purple-400 p-2">Login</button>
                    </div>
                    <div className="text-center py-3">or</div>
                    <div>

                        <a href="/signup">
                            <span className="text-purple-600 border-solid p-2 cursor-pointer" >
                                Create a new account
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar2;
