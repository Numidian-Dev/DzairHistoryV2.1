"use client";
import { useState } from "react";
import logo from "../../styles/assets/img/logo/dzair.svg";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Header = () => {
  const [displayState, setDisplayState] = useState();
  const pathName = usePathname();

  const display = { display: displayState };

 

  return (
    <header>
      <div onClick={() => setDisplayState("flex")} className="openMenu">
        <FaBars />
      </div>
      <div className="logo">
        <Link href={"/"}>
          <Image layout="fill" src={logo} alt="Dzair History" />
        </Link>
      </div>
      <nav>
        <ul style={display}>
          <div onClick={() => setDisplayState("false")} className="closeMenu">
            <FaTimes />
          </div>
          <li className={pathName === "/" ? "active" : ""}>
            <Link href={"/"}>Accueil</Link>
          </li>
          <li className={pathName === "/categorie/histoire" ? "active" : ""}>
            <Link href={"/categorie/histoire"}>Histoire</Link>
          </li>
          <li className={pathName === "/categorie/culture" ? "active" : ""}>
            <Link href={"/categorie/culture"}>Culture</Link>
          </li>
          <li className={pathName === "/categorie/regions" ? "active" : ""}>
            <Link href={"/categorie/regions"}>Régions</Link>
          </li>

          <li
            className={
              pathName === "/categorie/archives" ? "active dropdown": "dropdown"}>
                Archives
              <ul className="dropdown-menu">
                <li
                  className={
                    pathName === "/archives/livres" ? "active livres" : "livres"
                  }
                >
                  <Link href={"/archives/livres"}>Livres</Link>
                </li>
              </ul>
          </li>

          <li className={pathName === "/contact" ? "active" : ""}>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
        <button>
          <Link href={"/search"}>
            <FaSearch />
          </Link>
        </button>
      </nav>
    </header>
  );
};

export default Header;
