import { Box, Stack } from "@mui/material";
import React from "react";
import {YoutubeLogo} from "../../constant/index";
import { colors } from "../../constant/colors";
import { Link } from "react-router-dom";
import {SearchBar} from "../index";

function Navbar() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{ position: "sticky", top: 0, zIndex: 999, background: colors.primary}}
    >
      <Link to={"/"} style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
        <img src={YoutubeLogo} alt="logo" height={60} width={60} style={{borderRadius: '30px'}} />
        <h1 style={{fontFamily: 'fantasy', fontSize: '30px'}}>Jo'rabek</h1>
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
}

export default Navbar;
