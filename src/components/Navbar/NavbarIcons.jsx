import React, { useState } from "react";
import {
  Avatar,
  Divider,
  Menu,
  MenuItem,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const IconsContainer = styled(Box)({});

const NavbarIcons = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Stack
        gap={2}
        justifyContent="center"
        alignItems="center"
        direction="row"
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        <Badge badgeContent={2} color="error">
          <MailIcon />
        </Badge>
        <Badge badgeContent={2} color="error">
          <NotificationsIcon />
        </Badge>
        <Avatar
          sx={{ width: 30, height: 30, cursor: "pointer" }}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          U
        </Avatar>
      </Stack>
      <Stack
        gap={2}
        justifyContent="center"
        alignItems="center"
        direction="row"
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <Avatar sx={{ width: 30, height: 30 }}>U</Avatar>

        <Typography>User Name</Typography>
      </Stack>
      <Menu
        open={menuOpen}
        onClose={() => setMenuOpen(() => false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Number One</MenuItem>
        <MenuItem>Number Two</MenuItem>
        <Divider />
        <MenuItem>Number Three</MenuItem>
      </Menu>
    </>
  );
};

export default NavbarIcons;
