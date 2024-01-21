import React from "react";
import "../Css/header.css";
import { Link, NavLink } from "react-router-dom";
import Resume from "../images/resume.pdf";
import { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StorageIcon from "@mui/icons-material/Storage";
import TerminalIcon from "@mui/icons-material/Terminal";
import DownloadIcon from "@mui/icons-material/Download";
import { Typography } from "@mui/material";

function Navbar() {
  const [bar_class, setBar] = useState("hamburger unclicked");
  const [menu, setMenu] = useState("head-elments flexy");
  const [mainBar, setMainBar] = useState("bars middle");
  const [burger, setBurger] = useState(true);
  const [ismenuCLicked, setMenuSetClicked] = useState(false);

  const clicked = () => {
    if (!ismenuCLicked) {
      setBar("hamburger clicked");
      setMenu("head-elments visible flexy");
      setMainBar("bars");
      setBurger(!burger);
    }
    setMenuSetClicked(!ismenuCLicked);
  };

  const crossed = () => {
    setBar("hamburger clicked");
    setMenu("head-elments flexy");
    setMainBar("bars middle");
    setMenuSetClicked(!ismenuCLicked);
    setBurger(!burger);
  };

  return (
    <div className="header">
      <div className="head-part1">
        <a href="/" className="logoA">
          <h1>A</h1>
        </a>
        <div className={menu}>
          <NavLink className="a" to="/" onClick={crossed}>
            <HomeOutlinedIcon
              sx={{
                fontSize: 32,
              }}
            />
            Home
          </NavLink>
          <NavLink className="a" to="/skill" onClick={crossed}>
            {" "}
            <TerminalIcon
              sx={{
                fontSize: 32,
              }}
            />{" "}
            Skills
          </NavLink>
          <NavLink className="a" to="/project" onClick={crossed}>
            {" "}
            <StorageIcon
              sx={{
                fontSize: 32,
              }}
            />{" "}
            Projects
          </NavLink>
          <a className="a" href={Resume} download onClick={crossed}>
            {" "}
            <DownloadIcon
              sx={{
                fontSize: 32,
              }}
            />{" "}
            Resume
          </a>
        </div>
      </div>
      {/* {burger ? (
        <div className={mainBar} onClick={clicked}>
          <i class="fa-solid fa-bars fa-2xl"></i>
        </div>
      ) : (
        <i
          class="fa-solid fa-circle-xmark fa-xl solidcross"
          style={{ padding: "30px" }}
          onClick={crossed}
        ></i>
      )} */}
    </div>
  );
}

export default Navbar;
