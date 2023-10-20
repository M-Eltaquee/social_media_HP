import React from "react";
import { Box, Fab, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Post from "./Post";
const Feeds = () => {
  return (
    <Box flex={4}>
      <Post />
      <Post />
    </Box>
  );
};

export default Feeds;
