import React, { useState } from 'react';
import { BsGlobe } from 'react-icons/bs';
import { AiOutlineShopping } from 'react-icons/ai';
import { GrClose, GrMenu } from 'react-icons/gr';

export default function NavBar() {
  const [menu, setMenu] = useState(true);

  return (
    <div className="fixed w-full top-0 ">

      <nav className="cursor-pointer h-16 bg-white drop-shadow p-4 shadow font-semibold md:flex md:items-center md:justify-between text-larq w-full ">

        <div className="flex justify-between items-center">
          <a href="/">
            {/* <img className='h-6 inline' src="https://res.cloudinary.com/larq/image/upload/v1570724754/assets/spa/icons/logo-larq.svg" alt="LIRQ" /> */}
            <h1 className="text-3xl">MΛRQ</h1>
          </a>
          <span className="text-3xl cursor-pointer mx-2 md:hidden block">
            {menu ? <GrMenu onClick={() => setMenu(false)} /> : <GrClose onClick={() => setMenu(true)} />}
          </span>
        </div>


        <ul className={`md:flex md:items-center z-[1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all ease-in duration-500 md:opacity-100 ${menu && ' top-[-400px] opacity-0 '}`}>

          <li className="mx-4 my-6 md:my-0">
            <a className="text-larq text-lg hover:text-cyan-500 duration-500" href="/products">Products</a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a className="text-larq text-lg hover:text-cyan-500 duration-500" href="/category">Category</a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a className="text-larq text-lg hover:text-cyan-500 duration-500" href="/sign-in">Sign In</a>
          </li>
          <li className="mx-4 my-6 md:my-0">

            <select name="cars" id="cars">
              <option value="volvo">
                <span className="text-larq text-lg hover:text-cyan-500 duration-500" href="/language">
                  En
                </span>
              </option>
            </select>
            <span>
              <BsGlobe className="inline" />
            </span>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a className="text-larq text-lg hover:text-cyan-500 duration-500" href="/cart">
              <AiOutlineShopping />
              Cart
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
