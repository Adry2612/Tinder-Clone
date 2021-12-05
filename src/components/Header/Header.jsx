import React from "react";
import "./Header.css";

// Icons imports
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import { IconButton } from "@mui/material";

export default function Header() {
  return (
    <header className="header">
        <IconButton>
            <PersonIcon className="header__profile" fontSize="large" />
        </IconButton>

        <img
            className="header__logo"
            src="https://1000logos.net/wp-content/uploads/2018/07/Tinder_logo_PNG3.png"
            alt="" 
        />

        <IconButton>
            <ForumIcon className="header__chats" fontSize="large" />
        </IconButton>
    </header>
  );
}
