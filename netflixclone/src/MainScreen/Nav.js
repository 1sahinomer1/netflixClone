import React, { useEffect, useState } from "react";
import "./Nav.css";
import { AiOutlineGift } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
function Nav({ selectedFoto, selectedName, search, setSearch }) {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "navBlack"}`}>
      <img
        className="navLogo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <ul className="leftList">
        <li>
          <a className="homep" href="">
            Anasayfa
          </a>
        </li>
        <li>
          <a href="">Diziler</a>
        </li>
        <li>
          <a href="">Filmler</a>
        </li>
        <li>
          <a href="">Yeni ve Popüler</a>
        </li>
        <li>
          <a href="">Listem</a>
        </li>
      </ul>
      <img className="navAvatar" src={selectedFoto} alt="Avatar" />
      <ul className="rightList">
        <li className="searchBox">
          <input
            className="searchText"
            type="text"
            placeholder="İçerik,kişi,tür"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <a className="searchButton">
            <AiOutlineSearch size={20} />
          </a>
        </li>
        <li>
          <a href="" className="selectedName">
            {selectedName.toUpperCase()}
          </a>
        </li>
        <li>
          <AiOutlineGift color="white" className="icon" size={25} />
        </li>

        <li>
          <a href="">
            <IoIosNotifications color="white" className="icon" size={25} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
