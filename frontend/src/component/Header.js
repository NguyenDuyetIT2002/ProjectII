import React, { useState, useEffect, useRef } from "react";
import logo from "../assest/logo.png";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();
  const userData = useSelector((state) => state.user);
  console.log(userData);
  const dispatch = useDispatch();
  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(logoutRedux());
    }, 2000);
    toast("Bạn sẽ đăng xuất sau vài giây");
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, []);

  return (
    <header className="fixed shadow-md w-full h-18 px-2 md:px-4 z-50 bg-white">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
        {/* Logo cửa hàng */}
        <Link to={""}>
          <div className="h-14">
            <img src={logo} className="h-full" alt="Logo" />
          </div>
        </Link>

        {/* Thanh điều hướng */}
        <div className="flex items-center gap-4 md:gap-8">
          <nav className="flex gap-3 md:gap-6 text-base md:text-lg">
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-slate-500 relative">
            <BsCartFill />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
              0
            </div>
          </div>
          <div className=" text-slate-500" ref={menuRef}>
            <div
              className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden"
              onClick={handleShowMenu}
            >
              {userData.image ? (
                <img src={userData.image} className="h-full w-full" />
              ) : (
                <HiOutlineUserCircle className="h-full w-full" />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
                {userData.image ? (
                  <p
                    className="cursor-pointer hover:bg-red-300"
                    onClick={handleLogout}
                  >
                    Đăng xuất
                  </p>
                ) : (
                  <>
                    <Link
                      to={"login"}
                      className="whitespace-nowrap cursor-pointer hover:bg-red-300"
                    >
                      Đăng nhập
                    </Link>
                    <Link
                      to={"signup"}
                      className="whitespace-nowrap cursor-pointer hover:bg-red-300"
                      id="signup"
                    >
                      Đăng ký
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* mobile */}
    </header>
  );
};

export default Header;
